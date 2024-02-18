import { DeleteOutline, Edit } from '@mui/icons-material';
import { Avatar,  Box,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider, Typography,  } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FilterListIcon from '@mui/icons-material/FilterList';
import React, { useEffect } from 'react';
import FormDialog from '../Dialog';
import { useListaContext } from '../../hooks/useListaContext';
import FiltroMenu from '../MenuFiltros';
import Filtros from '../Filtros';
import { useFiltrosContext } from '../../hooks/useFiltroContext';
import { calculaIdade, formataData} from '../../Utils/data';
import FiltrosData from '../Filtros/FiltroData';
import { themeTable } from '../../temas/temas';

  
export default function Lista(){
  const {listaBrowser, buscaDados,excluiDados,editaDados} = useListaContext()
  const {
    filtrarBirthday,
    filtrarAge,
    filtrarGender,
    filtrarIdioma,
}  = useFiltrosContext()



  useEffect(()=>{
    if(listaBrowser.length <= 0){
      buscaDados()
    }
  },[])
    return (
      <>
       <Box display={'flex'} sx={{ margin: '1.5rem', gap: '16px' }}> 
          <Typography flexGrow={1} variant='h2' sx={{fontSize:"32px", color:'#6B728E'}}> Contatos</Typography>
          <FormDialog> 
            <PersonAddIcon />
          </FormDialog>
          <FiltroMenu>
            <FilterListIcon />
          </FiltroMenu>
        </Box>
      <TableContainer sx={{ backgroundColor: ' transparent' , padding: "1rem",  overflowY: 'hidden'}} >
        <Table sx={{  padding: '.5rem', borderCollapse:'inherit',}} aria-label="simple table">
          <TableHead  >
      <ThemeProvider theme={themeTable}>
            <TableRow  sx={{   borderBottom: 'none', textTransform:'uppercase' }} >
              <TableCell sx={{ border: 'none', }}> </TableCell>
              <TableCell sx={{ border: 'none', }} align="center">Nome</TableCell>
              <TableCell sx={{ border: 'none', }} align="center">Sobrenome</TableCell>
              <TableCell sx={{ border: 'none', }} align="center">Email</TableCell>
              <TableCell sx={{ border: 'none', m:0}} align="center"> 
              <Box component={'div'} sx={{display:'flex', alignItems:'center'}}> {filtrarBirthday &&( <FiltrosData/>)}<span>Aniversario</span></Box></TableCell>
              <TableCell sx={{ border: 'none', m:0 }} align="center"> 
              <Box component={'div'}sx={{display:'flex', alignItems:'center'}}>{filtrarAge &&  ( <Filtros itemFiltro={'age'}/>)} <span>Idade</span></Box></TableCell>
              <TableCell sx={{ border: 'none', m:0}} align="center"> 
              <Box component={'div'} sx={{display:'flex', alignItems:'center'}}>{filtrarGender &&(<Filtros itemFiltro={'gender'}/> )}<span>Gênero</span></Box></TableCell>
              <TableCell sx={{ border: 'none', m:0}} align="center">
                <Box component={'div'}sx={{display:'flex', alignItems:'center'}}>{filtrarIdioma &&(  <Filtros itemFiltro={'language'}/> )}<span>idioma</span></Box></TableCell>
              </TableRow>
           </ThemeProvider>   
          </TableHead>
           
          <TableBody sx={{border: 'none' }} >
            {Array.isArray(listaBrowser) && listaBrowser.map((contato, index) => (
              <React.Fragment key={contato.id}>
                
                <TableRow 
                  sx={{
                    borderRadius: '10px', 
                    backgroundColor: "#FEFBF6",
                    padding: '10px',
                    border: 'none'
                  }}
                >
                  <TableCell sx={{borderRadius:'10px 0 0 10px'}} scope="row">
                    <Avatar src={contato.avatar} alt={contato.avatar} />
                  </TableCell>
                  <TableCell align="center">{contato.first_name}</TableCell>
                  <TableCell align="center">{contato.last_name}</TableCell>
                  <TableCell align="center">{contato.email}</TableCell>
                  <TableCell align="center">{formataData(contato.birthday)}</TableCell>
                  <TableCell align="center">{contato.age !== null ? contato.age: calculaIdade(contato.birthday)}</TableCell>
                  <TableCell align="center">{contato.gender}</TableCell>
                  <TableCell align="center">{contato.language}</TableCell>
                  <TableCell align="center">
                    <Edit sx={{cursor:'pointer'}} onClick={() => editaDados(contato.id)} fontSize='18px'/>
                  </TableCell>
                  <TableCell sx={{borderRadius:'0 10px 10px 0'}} align="right">
                    <DeleteOutline sx={{cursor: 'pointer'}} onClick={()=> excluiDados(contato.id) } />
                  </TableCell>
                </TableRow>
                {index < listaBrowser.length - 1 && (
                  <Box component='tr' sx={{ p: 1, width: '100%', height: 10 }}>

                  </Box>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
      
      )
}
