import { useContext, useState } from "react";
import { FiltroContext } from "../Contextos/FiltroContext";
import { useListaContext } from "./useListaContext";

export function useFiltrosContext() {
    const { filtrar,
        setFiltrar,
        filtrarBirthday,
        setFiltrarBirthday,
        filtrarAge,
        setFiltrarAge,
        filtrarGender,
        setFiltrarGender,
        filtrarIdioma,
        setFiltrarIdioma
    } = useContext(FiltroContext)
    const { listaBrowser, setListaBrowser } = useListaContext()
    const { listaBackup, setListaBackup } = useContext(FiltroContext)
    const [retiraFiltro, setRetiraFiltro] = useState(false)
    const [CountFiltro, setCountFiltro] = useState(0)

    function ativaFiltro(tipoFiltro) {
        console.log(CountFiltro)
        const itensOriginais = JSON.parse(localStorage.getItem('contatos'))
        setFiltrar(true)
        const estadoFiltro = pegaTipoFiltro(tipoFiltro)
        setCountFiltro((prevCount) => {
            const contagemDeFiltros = !estadoFiltro ? prevCount + 1 : prevCount - 1;

            if (contagemDeFiltros <= 0) {
                setFiltrar(false);
                setListaBrowser(() => [...itensOriginais])
            }

            return contagemDeFiltros;
        });
    }

   

    function pegaTipoFiltro(tipoFiltro) {
        switch (tipoFiltro) {
            case 'idade':
                if (filtrarAge) {
                    setFiltrarAge(false)

                } else {
                    setFiltrarAge(true)
                }
                    return filtrarAge
                
            case 'genero':
                if (filtrarGender) {
                    setFiltrarGender(false)
                } else {
                    setFiltrarGender(true)
                }
                    return filtrarGender

            case 'idioma':
                if (filtrarIdioma) {
                    setFiltrarIdioma(false)
                } else {
                    setFiltrarIdioma(true)
                }
                    return filtrarIdioma

            default:

                return false
        }

    }

    function ativafiltrarPorData() {
        const itensOriginais = JSON.parse(localStorage.getItem('contatos'))

        setFiltrarBirthday(true);
        setListaBackup([...listaBrowser])
        if (filtrarBirthday && listaBackup !== null) {
            setListaBrowser([...itensOriginais])
            setFiltrarBirthday(false)
        }
    }

    function filtragem(event, index, tipoFiltro) {
        if (!listaBackup.length) {
            setListaBackup([...listaBrowser]);
        }
        const valor = event.target.textContent;

        if (tipoFiltro && !retiraFiltro) {
            //verifico se a lista que foi filtrada e a de backup ou a original(listaBrowser)
            const listaAlvo = listaBackup.length <= 0 ? listaBrowser : listaBackup;
                //aqui eu verifico se quero filtrar por data ou por outros campos
            const arrayFiltrado = listaAlvo.filter(item => index === 'age' ? item[index] === Number(valor) 
            :item[index] === valor);

            setListaBrowser([...arrayFiltrado]);
            setRetiraFiltro(true);
        } else if (retiraFiltro || !tipoFiltro) {

            const listaRestaurar = listaBackup.length <= 0 ? listaBrowser : listaBackup;

            setListaBrowser([...listaRestaurar]);
            setRetiraFiltro(false);
            setListaBackup([]);
        }
    }

    const filtrarPorMes = (mesSelecionado) => {
        if (!listaBackup.length) {
            setListaBackup([...listaBrowser]);
        }
        const itensFiltrados = listaBrowser.filter(item => {
            const partesData = item.birthday.split('-');
            const dataNascimento = new Date(
                parseInt(partesData[0], 10),
                parseInt(partesData[1], 10) - 1,
                parseInt(partesData[2], 10)
            );

            const mesNascimento = dataNascimento.getMonth() + 1;
            return mesNascimento === mesSelecionado;
        });
        setListaBrowser(itensFiltrados)
        setRetiraFiltro(true);
     if (retiraFiltro) {

        const listaRestaurar = listaBackup.length <= 0 ? listaBrowser : listaBackup;

        setListaBrowser([...listaRestaurar]);
        setRetiraFiltro(false);
        setListaBackup([]);
    }
    }




    return {

        filtrarBirthday,
        setFiltrarBirthday,
        filtrarAge,
        setFiltrarAge,
        filtrarGender,
        setFiltrarGender,
        filtrarIdioma,
        setFiltrarIdioma,
        ativafiltrarPorData,
        filtragem,
        ativaFiltro,
        filtrarPorMes,
        filtrar

    }
}