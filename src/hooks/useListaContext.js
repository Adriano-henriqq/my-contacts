import { useContext } from "react"
import { ListaContext } from "../Contextos/ListaContext"
import axios from "axios"
import { v4 as uuidv4 } from "uuid";
import { useFormContext } from "./useFormContext";
import { calculaIdade } from "../Utils/data";
import { FiltroContext } from "../Contextos/FiltroContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BACKEND_API } from "../config";



export const useListaContext = () => {
  const { lista, setLista, listaBrowser, setListaBrowser, dadosEditar, setDadosEditar, editar, setEditar } = useContext(ListaContext)
  const { handleClickOpen } = useFormContext();
  const { listaBackup, filtrar } = useContext(FiltroContext)


  function buscaDados() {
    
    axios.get(process.env.REACT_APP_BACKEND_URL)
      .then(function (response) {
        const dadosComIdade = adicionaCampoIdade(response)
        console.log(dadosComIdade)
        salvaDadosBrowser(dadosComIdade)
      })
      .catch(function (error) {
        console.log(error);
        console.log('dados api' + BACKEND_API)
      })

  }
  function pegaDadosForm(avatar, nome, sobrenome, email, data, genero, idioma) {
    const dadosForm = {
      age: calculaIdade(data),
      avatar,
      first_name: nome,
      last_name: sobrenome,
      email,
      birthday: data,
      gender: genero,
      language: idioma
    }

    return dadosForm
  }


  function adicionaDados(dadosDoForm) {
    const contatosId = { ...dadosDoForm, id: uuidv4() }
    if (!editar) {
      setListaBrowser([...listaBrowser, contatosId])
      localStorage.setItem('contatos', JSON.stringify([...JSON.parse(localStorage.getItem('contatos')), contatosId]))
      toast.success('Contato Adicionado', { autoClose: 2000 })
    } else {
      enviaDadosEditados(dadosDoForm)
    }
    
  }


  function excluiDados(id) {
    const indexRemover = !filtrar
      ? listaBrowser.findIndex((contato) => contato.id === id)
      : listaBackup.findIndex((contato) => contato.id === id);
    const novaLista = [...listaBrowser];
    if (filtrar) {
      listaBackup.splice(indexRemover, 1);
      setListaBrowser([...listaBackup]);
      localStorage.setItem('contatos', JSON.stringify(listaBackup));
    } else {
      novaLista.splice(indexRemover, 1);
      setListaBrowser([...novaLista]);
      localStorage.setItem('contatos', JSON.stringify(novaLista));
    }
    toast.success('Contato excluido com sucesso', { autoClose: 2000 })
  }


  function editaDados(id) {
    setEditar(true)
    const dadosExistentes = JSON.parse(localStorage.getItem('contatos'));
    const dadoAoEditar = dadosExistentes.find((contato) => contato.id === id)
    setDadosEditar(dadoAoEditar)
    handleClickOpen()
  }


  function enviaDadosEditados(dadosDoForm) {
    const contatoIndex = !filtrar ? listaBrowser.findIndex(contato => contato.id === dadosEditar.id)
      : listaBackup.findIndex(contato => contato.id === dadosEditar.id)
    if (contatoIndex !== -1) {
      const novaLista = [...listaBrowser];
      novaLista[contatoIndex] = { ...novaLista[contatoIndex], ...dadosDoForm };
      if (filtrar) { //caso o filtro esteja ativo, qualquer alteração tambem sera feita ao filtrar
        listaBackup[contatoIndex] = { ...listaBackup[contatoIndex], ...dadosDoForm }
        setListaBrowser([...listaBackup])
        localStorage.setItem('contatos', JSON.stringify([...listaBackup]));

      } else {
        setListaBrowser([...novaLista]);
        localStorage.setItem('contatos', JSON.stringify([...novaLista]));
        setEditar(false);
        setDadosEditar([]);
      }
      toast.success('Contato alterado com sucesso', { autoClose: 2000 })
    }
  }

  function salvaDadosBrowser(dados) {
    if (localStorage.getItem('contatos') === null) {
      localStorage.setItem('contatos', JSON.stringify(dados))
    }
    const listaDb = JSON.parse(localStorage.getItem('contatos'))
    setListaBrowser([...listaDb])
  }
  function adicionaCampoIdade(dados) {
    const dataIdade = dados.data.map(item => {
      const idade = calculaIdade(item.birthday)
      return { ...item, age: idade }
    });

    return dataIdade;
  }




  return {
    listaBrowser,
    setListaBrowser,
    lista,
    setLista,
    buscaDados,
    pegaDadosForm,
    adicionaDados,
    excluiDados,
    dadosEditar,
    editaDados,
    editar
  }
}