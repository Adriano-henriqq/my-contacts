import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


export default function BarraNaveg () {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{backgroundColor: 'transparent'}} elevation={0} >
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{display: 'flex', justifyContent: "space-around", color: 'black'} }>
          <NavLink to={'/'}><img src='/images/My contacts.png' alt='logo myContacts' style={{width:'150px'}}/></NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon  />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Link  to={'/'} style={{textDecoration: 'none', color:'black'}} >inicio</Link>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Link to={'/Contatos'} style={{textDecoration: 'none',color:'black'}} >Contatos</Link>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Link to={'/Resumo'} style={{textDecoration: 'none',color:'black'}} >Resumo</Link>
                </MenuItem>

              
            </Menu>
          </Box>
  
          <Box sx={{ flexGrow:0, display: { xs: 'none', md: 'flex' }, gap: '10px' , color: '#c501e2'}}>
            <Link style={{textDecoration: 'none', fontWeight:'700', color: 'white'}} to={'/'}>Inicio</Link>
            <Link style={{textDecoration: 'none', fontWeight:'700', color: 'white'}} to={`/Contatos`}>Contatos</Link>
            <Link style={{textDecoration: 'none', fontWeight:'700', color: 'white'}} to={`/Resumo`}>Resumo</Link>    
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
