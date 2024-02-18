import { createContext, useState } from "react";

export const FiltroContext = createContext()

export const FiltroProvider = ({children}) =>{
    const [filtrar,setFiltrar] = useState(false)
    const [filtrarBirthday,setFiltrarBirthday] = useState(false)
    const [filtrarAge,setFiltrarAge] = useState(false)
    const [filtrarGender,setFiltrarGender] = useState(false)
    const [filtrarIdioma,setFiltrarIdioma] = useState(false)
    const [listaBackup, setListaBackup] = useState([])
    return(
        <FiltroContext.Provider value={{filtrar,
            setFiltrar,
            filtrarBirthday,
            setFiltrarBirthday,
            filtrarAge,
            setFiltrarAge,
            filtrarGender,
            setFiltrarGender,
            filtrarIdioma,
            setFiltrarIdioma,
            listaBackup,
            setListaBackup
        }}>
            {children}
        </FiltroContext.Provider>
    )
}