import { Box, Button, TextField } from "@mui/material";
import { useForm } from 'react-hook-form'
import { useEffect, useState } from "react";
import { useListaContext } from "../../hooks/useListaContext";
import SelectGenero from "./SelectGenero";
import { validarEmail } from "../../Utils/emailValidation";
import { calculaIdade } from "../../Utils/data";

export default function Form({ fecharForm, children, handleClose }) {
  const { register, handleSubmit,setValue ,formState: { errors } } = useForm()
  const { pegaDadosForm, adicionaDados, dadosEditar, editar } = useListaContext()
  const [dataInput, setDataInput] = useState(false)
  

 

  const onSubmit = (data) => {
    console.log(data)
    const dadosComIdade = {...data, age: calculaIdade(data.birthday)}
    adicionaDados(dadosComIdade)
    fecharForm()

  }

  useEffect(() => {
    setValue('avatar', dadosEditar.avatar)
    setValue('first_name', dadosEditar.first_name)
    setValue('last_name', dadosEditar.last_name)
    setValue('email', dadosEditar.email)
    setValue('birthday', dadosEditar.birthday)
    setValue('gender', dadosEditar.gender)
    setValue('language', dadosEditar.language)
  }, [editar, dadosEditar])

  return (
    <Box component={'form'} onSubmit={(event) => handleSubmit(onSubmit)(event.preventDefault())} sx={{ display: 'grid', gap: '10px', justifyContent: 'stretch', flexWrap: 'wrap' }} >
      <TextField  size="small"  {...register('avatar')} id="avatar" label="Avatar" variant="filled" />
     
      <TextField error={errors?.first_name && true} size="small"   {...register('first_name', { required: true, minLength: 3 })} id="nome" label="Nome" variant="filled" />
      <span style={{ color: 'red', fontSize: '12px', display: errors?.first_name ? 'block' : 'none' }}>
        {errors?.first_name?.type === 'required' ? 'Campo Obrigatório' : 'O nome precisa ter mais de 3 caracteres!'}</span>
     
      <TextField error={errors?.last_name && true} size="small"  {...register('last_name', {required: true, minLength: 4})} id="sobrenome" label="Sobrenome" variant="filled" />
      <span style={{ color: 'red', fontSize: '12px', display: errors?.last_name ? 'block' : 'none' }}>
        {errors?.last_name?.type === 'required' ? 'Campo Obrigatório' : 'O nome precisa ter mais de 4 caracteres!'}</span>
    
      <TextField  error={!!errors?.email} size="small"  {...register('email', {required: true, validate: (value)=> {return validarEmail(value) || 'Email invalido' }})} id="email" label="Email" variant="filled" />
      <span style={{ color: 'red', fontSize: '12px', display: errors?.email ? 'block' : 'none' }}>
        {errors?.email?.type === 'required' ? 'Campo Obrigatório' : errors?.email?.message}</span>
    
      <TextField error={errors?.birthday && true} size="small"  {...register('birthday',{required: true})} type={dataInput ? 'date' : 'text'} onFocus={() => setDataInput(true)} onBlur={() => setDataInput(false)} id="data" label="Data de nascimento" variant="filled" />
      <span style={{ color: 'red', fontSize: '12px', display: errors?.birthday ? 'block' : 'none' }}>
        {errors?.birthday?.type === 'required' && 'Campo Obrigatório' }</span>
     
      <SelectGenero error={errors?.gender && true} setGenero={{ ...register('gender',{ validate: (value) =>{ return value !== '' }})}} />
      <span style={{ color: 'red', fontSize: '12px', display: errors?.gender ? 'block' : 'none' }}>
        {errors?.gender?.type === 'validate' && 'Campo gênero precisa ser selecionado'}</span>
     
      <TextField error={errors?.language && true} {...register('language', {required: true, minLength: 4})} id="idioma" label="Idioma" variant="filled" />
      <span style={{ color: 'red', fontSize: '12px', display: errors?.language ? 'block' : 'none' }}>
        {errors?.language?.type === 'required' ? 'Campo Obrigatório' : 'O campo precisa ter mais de 4 caracteres!'}</span>
      <Box>
        <Button color='error' onClick={() => handleClose()} >Cancelar</Button>
        <Button color='success'  type="submit">{!editar ? 'Adicionar' : 'Editar Contato'}</Button>
      </Box>
    </Box>
  )
}