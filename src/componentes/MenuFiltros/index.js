import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Fab, Typography } from '@mui/material';
import { useFiltrosContext } from '../../hooks/useFiltroContext';

export default function FiltroMenu({children}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {
    ativafiltrarPorData,
    ativaFiltro,
    filtrarBirthday,
    filtrarAge,
    filtrarGender,
    filtrarIdioma,
    filtrar
  } = useFiltrosContext()
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    if(anchorEl){
      setAnchorEl(null)
    }
  };
  return (
    <div>
      <Fab
      variant='extended' 
      color={filtrar|| filtrarBirthday ? 'primary': 'dark'} 
      size='large' 
      aria-label="add"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{p:0}}
      >
        {children}
        </Fab>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClick}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        
      >
      <Typography sx={{marginLeft: 2, fontWeight:700}} variant='body1'>Filtrar Por:</Typography>  
        <MenuItem sx={{color: filtrarGender ? 'blue': 'black' }} onClick={() => ativaFiltro('genero')}>Genero</MenuItem>
        <MenuItem sx={{color:filtrarIdioma ? 'blue': 'black'}} onClick={() =>ativaFiltro('idioma')}>Idioma</MenuItem>
        <MenuItem sx={{color:filtrarAge ? 'blue': 'black' }} onClick={() =>ativaFiltro('idade') } >Idade</MenuItem>
        <MenuItem sx={{color:filtrarBirthday ? 'blue': 'black'}} onClick={() =>ativafiltrarPorData()}>Data Nascimento</MenuItem>
      </Menu>
    </div>
  );
}
