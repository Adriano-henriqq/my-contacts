import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useListaContext } from "../../../hooks/useListaContext";

export default function SelectGenero({value,setGenero,error}){
    
    const generos = ['M', 'F']
    
    return(
        <FormControl variant="filled" sx={{ minWidth: 220 }}>
        <InputLabel error={error} id="gender-filled-label" >Gênero</InputLabel>
        <Select  variant="filled"
          labelId="gender-filled-label"
          id="gender-filled"
          {...setGenero}
          error={error}
          {...value}
          value={value}
        >
          <MenuItem value={'0'}>
            {''}
          </MenuItem>
          {generos.map(genero =>(
          <MenuItem key={genero} value={genero || value}>{(genero === 'M') ? 'Masculino': (genero === 'F') ? 'Feminino': ''}</MenuItem>
          ))}
        </Select>
        </FormControl>    
        )
}