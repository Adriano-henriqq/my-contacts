import { Box, Fade, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useListaContext } from "../../hooks/useListaContext"
import LanguageIcon from '@mui/icons-material/Language';
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
import Face3SharpIcon from '@mui/icons-material/Face3Sharp';
import { ThemeProvider } from "@emotion/react";
import { themeInicio } from "../../temas/temas";

export default function Resumo(){
const {listaBrowser} = useListaContext()

const CalculaGeneros = ()=>{
    let totalHomens = 0 
    let totalMulheres = 0
    listaBrowser.forEach(item => {
        if(item.gender === 'M'){
            totalHomens++;
        }else if(item.gender === 'F'){
            totalMulheres++
        }
    })
    
    return {totalHomens, totalMulheres }
}

const contarIdiomas = () => {
    const totalIdiomas = new Set();

    listaBrowser.forEach(contato => {
      totalIdiomas.add(contato.language);
    });

    return totalIdiomas.size;
  };
    return (
      <ThemeProvider theme={themeInicio}>  
       <Box component={'div'} height={'100vh'} padding={5}>
        <Typography variant="h2"  margin={'10px 0 19px 10px'}>Resumo</Typography>
        <Typography variant="body1" margin={'20px 0 10px 10px'} >Aqui esta um resumo estatistico dos campos: 
            <br/> <strong>Genero e Idiomas</strong> </Typography>

        <Fade appear in  timeout={1000} >
        <TableContainer sx={{marginTop:'5rem'}}  component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><Box display={"flex"} justifyContent={'center'}alignItems={'center'} gap={'10px'}><span>Homens</span><FaceSharpIcon fontSize="large"/></Box></TableCell>
            <TableCell align="center"><Box display={"flex"}justifyContent={'center'} alignItems={'center'} gap={'10px'}><span>Mulheres</span><Face3SharpIcon fontSize="large"/></Box></TableCell>
            <TableCell align="center"><Box display={"flex"}justifyContent={'center'} alignItems={'center'} gap={'10px'}><span>Idiomas</span><LanguageIcon fontSize="large" /></Box></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell sx={{padding: 5}} align="center">{CalculaGeneros().totalHomens}</TableCell>
              <TableCell sx={{padding: 5}} align="center">{CalculaGeneros().totalMulheres}</TableCell>
              <TableCell sx={{padding: 5}} align="center">{contarIdiomas()}</TableCell>
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
    </Fade>

       </Box>
       </ThemeProvider>
    )
}