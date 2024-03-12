import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useController, useForm } from 'react-hook-form'
import { useEffect, useState } from "react";
import { useListaContext } from "../../hooks/useListaContext";
import SelectGenero from "./SelectGenero";
import { validarEmail } from "../../Utils/emailValidation";
import { calculaIdade } from "../../Utils/data";
import { idiomasPossiveis } from "../../Utils/arrayIdiomas";

export default function Form({ fecharForm, handleClose }) {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      avatar: '',
      first_name: '',
      last_name: '',
      email: '',
      birthday: '',
      gender: '',
      

    }
  })

  const { adicionaDados, dadosEditar, editar } = useListaContext()
  const [dataInput, setDataInput] = useState(false)




  const onSubmit = (data) => {
    console.log(data)
    const dadosComIdade = { ...data, age: calculaIdade(data.birthday) }
    adicionaDados(dadosComIdade)
    fecharForm()

  }

  useEffect(() => {
    setValue('avatar', dadosEditar.avatar)
    setValue('first_name', dadosEditar.first_name)
    setValue('last_name', dadosEditar.last_name)
    setValue('email', dadosEditar.email)
    setValue('birthday', dadosEditar.birthday)

    setValue('language', dadosEditar.language)

    setValue('gender', dadosEditar.gender)

  }, [editar, dadosEditar, setValue])

  return (
    <Box component={'form'} onSubmit={(event) => handleSubmit(onSubmit)(event.preventDefault())} sx={{ position: 'relative', display: 'grid', gap: '10px', justifyContent: 'stretch', flexWrap: 'wrap', width: { xs: "100%", md: '100%', lg: '100%' } }} >

      <TextField size="small"  {...register('avatar')} id="avatar" label="Avatar" variant="filled" />

      <TextField error={errors?.first_name && true} size="small"   {...register('first_name', { required: true, minLength: 3 })} id="nome" label="Nome" variant="filled" />
      <span style={{ color: 'red', fontSize: '12px', display: errors?.first_name ? 'block' : 'none' }}>
        {errors?.first_name?.type === 'required' ? 'Campo Obrigatório' : 'O nome precisa ter mais de 3 caracteres!'}</span>

      <TextField error={errors?.last_name && true} size="small"  {...register('last_name', { required: true, minLength: 4 })} id="sobrenome" label="Sobrenome" variant="filled" />
      <span style={{ color: 'red', fontSize: '12px', display: errors?.last_name ? 'block' : 'none' }}>
        {errors?.last_name?.type === 'required' ? 'Campo Obrigatório' : 'O nome precisa ter mais de 4 caracteres!'}</span>

      <TextField error={!!errors?.email} size="small"  {...register('email', { required: true, validate: (value) => { return validarEmail(value) || 'Email invalido' } })} id="email" label="Email" variant="filled" />
      <span style={{ color: 'red', fontSize: '12px', display: errors?.email ? 'block' : 'none' }}>
        {errors?.email?.type === 'required' ? 'Campo Obrigatório' : errors?.email?.message}</span>

      <TextField error={errors?.birthday && true} size="small"  {...register('birthday', { required: true })} type='date' InputLabelProps={{
            shrink: true,
          }} onFocus={() => setDataInput(true)} onBlur={() => setDataInput(false)} id="data" input label={'Data de Nascimento'} variant="filled" />
      <span style={{ color: 'red', fontSize: '12px', display: errors?.birthday ? 'block' : 'none' }}>
        {errors?.birthday?.type === 'required' && 'Campo Obrigatório'}</span>

      <SelectGenero error={errors?.gender && true} value={watch('gender')} setGenero={{ ...register('gender', { required: true, validate: (value) => { return value !== '0' } }) }} />
      <span style={{ color: 'red', fontSize: '12px', display: errors?.gender ? 'block' : 'none' }}>
        {errors?.gender?.type === 'validate' ? 'Campo gênero precisa ser selecionado' : 'Campo obrigatorio'}</span>

      <FormControl error={errors?.language && true}
        variant="filled">
        <InputLabel id='idioma-label'>Idioma</InputLabel>
        <Select
          labelId="idioma-label"
          label='Idioma'
          {...register('language', { required: true })}
          value={watch('language') || ''}
        >
          {idiomasPossiveis.map((contato, index) => (
            <MenuItem key={index} value={contato || watch('language')}>
              {contato}
            </MenuItem>
          ))}
          {


          }
        </Select>
      </FormControl>
      <span style={{ color: 'red', fontSize: '12px', display: errors?.language ? 'block' : 'none' }}>
        {errors?.language?.type === 'required' ? 'Campo Obrigatório' : 'O campo precisa ter mais de 4 caracteres!'}</span>






      {/* <TextField error={errors?.language && true}  id="idioma" label="Idioma" variant="filled" /> */}

      <Box>
        <Button color='error' onClick={() => handleClose()} >Cancelar</Button>
        <Button color='success' type="submit">{!editar ? 'Adicionar' : 'Editar Contato'}</Button>
      </Box>
    </Box>
  )
}