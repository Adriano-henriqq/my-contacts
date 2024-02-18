import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FilterListIcon from '@mui/icons-material/FilterList';
import mesesDoAno from './meses.json'
import { useFiltrosContext } from '../../../hooks/useFiltroContext';


export default function FiltrosData() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {filtrarPorMes} = useFiltrosContext()
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    if(anchorEl) {
      setAnchorEl(null)
    }
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <FilterListIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClick}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {mesesDoAno.map((mes) => (
          <MenuItem key={mes.id} onClick={()=>filtrarPorMes(mes.id)}>{mes.nome}</MenuItem>
        ))
        
        }
      </Menu>
    </div>
  );
}
