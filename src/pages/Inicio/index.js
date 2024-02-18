import { ThemeProvider } from "@emotion/react";
import { Box, Button, Slide, Typography } from "@mui/material";
import { themeInicio } from "../../temas/temas";
import { Link } from "react-router-dom";



export default function Inicio(){
    return (
        <ThemeProvider theme={themeInicio}>
            <Box component={'section'} sx={{display: 'flex',  
             justifyContent: 'space-evenly', 
             padding: '1rem',
             alignItems: 'center',
             flexDirection: {xs: 'column', md: 'row'},
             height:"100%"

             }} >
                <Slide timeout={2000} appear in direction='right' >
                    <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column',gap:'12px', marginTop:'2rem', justifyContent: 'center' }} >
                    <Typography variant="h1" sx={{ fontSize: {xs: '22px', md: '48px'} }}>
                        Gerencie seus contatos <br/>rapidamente e de <br/>forma eficaz
                    </Typography>
                    
                    <Typography variant="body1" sx={{ fontSize: '18px' }}>
                        Com o <strong>My Contacts</strong>
                    </Typography>
                    <Button sx={{ width: '250px' }} variant="contained" >
                        <Link style={{textDecoration:'none', color:'white'}} to={'/Contatos'}>Acesse seus contatos</Link>

                    </Button>
                </Box>
                </Slide>
                <Slide timeout={2000}  appear in direction='left' >
                    <Typography component={'img'} sx={{marginTop:'2rem', width: {xs:'250px', md:'400px'}}} src="/images/capa.png" alt="capa"/>
                </Slide>  
            </Box>
        </ThemeProvider>
    )
}