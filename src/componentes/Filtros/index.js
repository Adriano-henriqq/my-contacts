import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useListaContext } from '../../hooks/useListaContext';
import { useFiltrosContext } from '../../hooks/useFiltroContext';



export default function Filtros({itemFiltro}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {listaBrowser} = useListaContext()
  const {filtrarAge,filtrarGender,filtrarIdioma,filtragem} = useFiltrosContext()
  
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    if(anchorEl) {
      setAnchorEl(null)
    }
    
    
  };

  //criei essa função para evitar itens duplicados na seleção do item filtrado.
  const obterCamposUnicos = (campo) => {
    const itens = new Set();

    listaBrowser.forEach(contato => {
      itens.add(contato[campo]);
    });

    return Array.from(itens);
  }; 

  const filtra = (event) => {
    if(filtrarAge){
        filtragem(event, 'age', filtrarAge)
    }else if(filtrarGender){
     filtragem(event, 'gender' ,filtrarGender)

    }else if(filtrarIdioma){
      filtragem(event, 'language' ,filtrarIdioma)
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
        {obterCamposUnicos(itemFiltro).map((item) => (
          <MenuItem key={item} onClick={filtra}>{item}</MenuItem>
        ))
        
        }
      </Menu>
    </div>
  );
}
