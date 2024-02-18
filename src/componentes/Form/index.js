import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useListaContext } from "../../hooks/useListaContext";
import SelectGenero from "./SelectGenero";

export default function Form({fecharForm,children}){
    const {pegaDadosForm,adicionaDados,dadosEditar,editar}= useListaContext()
    const [dataInput,setDataInput] = useState(false)
    const [avatar,setAvatar]= useState('')
    const [nome,setNome]= useState('')
    const [sobrenome,setSobrenome]= useState('')
    const [email,setEmail]= useState('')
    const [data,setData]= useState('')
    const [genero,setGenero]= useState('')
    const [idioma,setIdioma]= useState('')
    
      const dados = pegaDadosForm(avatar,nome,sobrenome,email,data,genero,idioma)
    function aoSalvar(evento){
        evento.preventDefault()
        adicionaDados(dados,dadosEditar.id)
        fecharForm()
        
    }

    useEffect(()=>{
      setAvatar(dadosEditar.avatar)
      setNome(dadosEditar.first_name)
      setSobrenome(dadosEditar.last_name)
      setEmail(dadosEditar.email)
      setData(dadosEditar.birthday)
      setGenero(dadosEditar.gender)
      setIdioma(dadosEditar.language)
    },[editar])
    
    return(
           <Box component={'form'} onSubmit={aoSalvar}  sx={{display:'flex', gap: '10px',justifyContent:'stretch', flexWrap:'wrap'}} > 
            <TextField required value={avatar} onChange={(evento) =>{setAvatar(evento.target.value)}} id="avatar" label="Avatar" variant="filled" />
            <TextField required value={nome}  onChange={(evento) =>{setNome(evento.target.value)}}  id="nome" label="Nome" variant="filled" />
            <TextField required value={sobrenome} onChange={(evento) =>{setSobrenome(evento.target.value)}} id="sobrenome" label="Sobrenome" variant="filled" />
            <TextField required value={email} onChange={(evento) =>{setEmail(evento.target.value)}} id="email" label="Email" variant="filled" />
            <TextField required value={data} onChange={(evento) =>{setData(evento.target.value)}} type={dataInput? 'date': 'text'} onFocus={()=> setDataInput(true)} onBlur={()=> setDataInput(false)} id="data" label="Data de nascimento" variant="filled" />
            <SelectGenero setGenero={setGenero} value={genero}/>
            <TextField required value={idioma} onChange={(evento) =>{setIdioma(evento.target.value)}} id="idioma" label="Idioma" variant="filled" />
            {children}
            </Box> 
    )
}