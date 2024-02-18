import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';



import { Outlet } from 'react-router-dom';
import { theme } from '../../temas/temas';
import BarraNaveg from '../../componentes/AppBar';
import Notificacao from '../../componentes/FeedBack';



const PaginaBase = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <header>
            <BarraNaveg/>
          </header>
         <Notificacao/> 
          
          <CssBaseline />
          <Container maxWidth="xl" sx={{ padding: '0 0 20px 0'}} >
            <section >
             <Outlet/>
            </section>
          </Container>
        </Container>
      </ThemeProvider>
    </>

  );
};

export default PaginaBase;
