import React, { useState } from "react";
import { DeleteOutline } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, IconButton, Typography } from "@mui/material";
import { useListaContext } from "../../hooks/useListaContext";


export default function DialogConfirmation ({id}){
    const  [open,setOpen] = useState(false)
    const {listaBrowser, buscaDados,excluiDados,editaDados} = useListaContext()

   const handleClose = ()=>{
        setOpen(false);   
    }

    
    return(
        <>
        <IconButton
        onClick={()=>setOpen(true)}>
         <DeleteOutline sx={{cursor: 'pointer'}}  />
          </IconButton>
        <Dialog
          open={open}
          onClose={handleClose}
          sx={{height:{xs: 'auto', md:'100%'}}}
          fullWidth={'md'}
          
        >
          <DialogTitle>Excluir contato</DialogTitle>
          <DialogContent  >
            <DialogContentText>
             <Typography variant="body1">
                Deseja excluir esse contato?
             </Typography>
            </DialogContentText>
            
            <DialogActions>
            <Button style={{backgroundColor:'green',color:'white'}}  onClick={()=> excluiDados(id)}>
                confirmar
            </Button>
            <Button style={{backgroundColor:'red',color:'white'}}  onClick={handleClose}>
                Cancelar
            </Button>
          </DialogActions>
           
          </DialogContent>
         
        </Dialog>
      </>
    )
}