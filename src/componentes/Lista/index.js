import { DeleteOutline, Edit } from '@mui/icons-material';
import { Avatar,  Box,Button,Card,Grid,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider, Typography,  } from '@mui/material';
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
import BotaoExportarExcel from '../BotaoExport';
import CardsContatos from '../Cards';
import DialogConfirmation from '../DialogConfirm';

  
export default function Lista(){
  const {listaBrowser, buscaDados,excluiDados,editaDados} = useListaContext()
  const {
    filtrarBirthday,
    filtrarAge,
    filtrarGender,
    filtrarIdioma,
    retiraFiltroTodos    
}  = useFiltrosContext()



  useEffect(()=>{
    if(listaBrowser.length <= 0 || localStorage.getItem('contatos') === null){
      buscaDados()
    }
  },[])
    return (
      <>
       <Box display={'flex'} sx={{ margin: '1.5rem', gap: '16px',flexWrap:'wrap' }}> 
          <Typography flexGrow={1} variant='h2' sx={{fontSize:"32px", color:'#6B728E'}}> Contatos</Typography>
          <BotaoExportarExcel data={listaBrowser}/>
          <FormDialog> 
            <PersonAddIcon />
          </FormDialog>
          <FiltroMenu>
            <FilterListIcon />
          </FiltroMenu>
          <Button onClick={()=>retiraFiltroTodos()} variant='contained'  color='primary'>Limpar Filtro</Button>
        </Box>
      <TableContainer sx={{ backgroundColor: ' transparent' , padding: "1rem",  overflowY: 'hidden', display:{xs:'none', sm:'none', md:'block'}}} >
        <Typography color='#6B728E' variant='body2'>{`Total (${listaBrowser.length}) `}</Typography>
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
                  <TableCell align="center">{contato.gender === 'M' ? 'Masculino': 'Feminino'}</TableCell>
                  <TableCell align="center">{contato.language}</TableCell>
                  <TableCell align="center">
                    <Edit sx={{cursor:'pointer'}} onClick={() => editaDados(contato.id)} fontSize='18px'/>
                  </TableCell>
                  <TableCell sx={{borderRadius:'0 10px 10px 0'}} align="right">
                    <DialogConfirmation id={contato.id}/>
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

      <Box display={{xs:'flex',sm:'flex',md:'none' }} justifyContent={'center'} >

          <Grid container spacing={2} justifyContent={'center'}  alignItems={'center'} >
        { listaBrowser.map(contato => (
            <Grid xs={10} sm={6}  flexWrap={'wrap'}  rowSpacing={1} columnSpacing={1}  item>
              <CardsContatos data={contato}/>

            </Grid>
        ))
        }          
          </Grid>  
      </Box>
      </>
      
      )
}
