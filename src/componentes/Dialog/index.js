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

export default function FormDialog({children}) {
 const {open, handleClickOpen, handleClose} = useFormContext();

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
        <DialogTitle>Adicionar Contato</DialogTitle>
        <DialogContent >
          <DialogContentText>
           Preencha os dados do contato
          </DialogContentText>
          <Form fecharForm={handleClose}>
          <DialogActions>
          <Button color='error' onClick={handleClose}>Cancel</Button>
          <Button color='success' type="submit">Adicionar</Button>
        </DialogActions>
          </Form>
        </DialogContent>
       
      </Dialog>
    </React.Fragment>
  );
}
