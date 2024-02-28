import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Form from '../Form';
import { useFormContext } from '../../hooks/useFormContext';
import { Fab } from '@mui/material';
import { useListaContext } from '../../hooks/useListaContext';

export default function FormDialog({children}) {
 const {open, handleClickOpen, handleClose} = useFormContext();
 const {editar} = useListaContext()

  return (
    <React.Fragment >
      <Fab sx={{padding:3}} variant='extended' color="primary" size='large' aria-label="add"
      onClick={handleClickOpen}>
        {children}
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{height:{xs: 'auto', md:'100%'}}}
        
      >
        <DialogTitle>{!editar ?'Adicionar Contato': 'Editar Contato'}</DialogTitle>
        <DialogContent sx={{width: 450}} >
          <DialogContentText>
           Preencha os dados do contato
          </DialogContentText>
          <Form handleClose={handleClose} fecharForm={handleClose}>
          <DialogActions>
         
        </DialogActions>
          </Form>
        </DialogContent>
       
      </Dialog>
    </React.Fragment>
  );
}
