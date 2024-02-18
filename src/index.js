import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import ListaProvider from './Contextos/ListaContext';
import { FiltroProvider } from './Contextos/FiltroContext';
import RoutesApp from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ListaProvider>
    <FiltroProvider>
    <RoutesApp/>
    </FiltroProvider>
    </ListaProvider>  
  </React.StrictMode>
);

