

import React from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaBase from './pages/PaginaBase';
import ListaDeContatos from './pages/Contatos';
import Inicio from './pages/Inicio';
import Resumo from './pages/Resumo';



function RoutesApp ()  {

  return (
    <BrowserRouter>
           
    <Routes> 
        <Route path="/" element={<PaginaBase />}>
        <Route index element={<Inicio/>}></Route>
        <Route path='Contatos' element={<ListaDeContatos />}></Route>
        <Route path='Resumo' element={<Resumo/>}></Route>
        
        </Route>
    </Routes>

</BrowserRouter>

  );
};

export default RoutesApp;
