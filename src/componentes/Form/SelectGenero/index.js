import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SelectGenero({value,setGenero}){
    const generos = ['M', 'F']
    return(
        <FormControl variant="filled" sx={{ minWidth: 220 }}>
        <InputLabel  id="demo-simple-select-filled-label" >Sexo</InputLabel>
        <Select required variant="filled"
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={value}
          onChange={(evento)=>setGenero(evento.target.value)}
        >
          <MenuItem value= {undefined}>
            <em>None</em>
          </MenuItem>
          {generos.map(genero =>(
          <MenuItem key={genero} value={genero}>{genero}</MenuItem>
          ))}
        </Select>
        </FormControl>    
        )
}