import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SelectGenero({value,setGenero,error}){
    const generos = ['M', 'F']
    return(
        <FormControl variant="filled" sx={{ minWidth: 220 }}>
        <InputLabel error={error} id="demo-simple-select-filled-label" >Gênero</InputLabel>
        <Select  variant="filled"
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={value}
          {...setGenero}
        >
          <MenuItem value={''}>
            {' '}
          </MenuItem>
          {generos.map(genero =>(
          <MenuItem key={genero} value={genero}>{genero === 'M' ? 'Masculino': 'Feminino'}</MenuItem>
          ))}
        </Select>
        </FormControl>    
        )
}