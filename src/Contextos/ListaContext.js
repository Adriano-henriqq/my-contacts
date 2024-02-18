import { createContext, useState } from "react";

export const ListaContext = createContext()



const ListaProvider=({children})=>{
const [lista , setLista]= useState([])
const [listaBrowser , setListaBrowser]= useState([]) 
const [open, setOpen] = useState(false);
const [dadosEditar, setDadosEditar] = useState([]);
const [editar, setEditar] = useState(false)



    return(
        <ListaContext.Provider value={{
            lista,
            setLista,
            listaBrowser,
            setListaBrowser,
            open,
            setOpen,
            dadosEditar,
            setDadosEditar,
            editar,
            setEditar
        }}>
            {children}
        </ListaContext.Provider>
    )
}

export default ListaProvider