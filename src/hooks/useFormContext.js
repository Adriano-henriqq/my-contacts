import { useContext } from "react";
import { ListaContext } from "../Contextos/ListaContext";


export function useFormContext(){
    const {open,setOpen,setEditar,setDadosEditar} = useContext(ListaContext)



const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    setEditar(false)
    setDadosEditar([])
  };
 

  return{
    open,
    handleClickOpen,
    handleClose
  }
}