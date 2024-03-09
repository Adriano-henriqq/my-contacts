import { createTheme } from "@mui/material";

export  const theme = createTheme({
    typography: {
      fontFamily: [
        'Montserrat', 
        'sans-serif'
      ].join(','),
    },
    palette:{
      background:{
        default: 'black',
      }
    }
   
  })
  

    export  const themeInicio = createTheme({
      typography:{
        allVariants:{
          color: '#EEEEEE'
          
        },
        h2:{
          fontSize:'50px'
        },
        body1:{
          fontSize:'20px'
        }
      },

      components:{
      MuiTableBody:{  
       styleOverrides:{
        root:{
          backgroundColor:'lightgrey',
          
        }
       }
    },
      MuiTableCell:{
        styleOverrides:{
          root:{
            fontSize:20,
            color: 'black',
            
            
          }
        }
      }
  }
      })    


  export const themeTable= createTheme({
   components:{
    MuiTableCell:{
      styleOverrides:{
        root:{
          borde: 'none',
          color:'#6B728E',
          fontWeight:'bold',
          fontFamily: [
            'Montserrat', 
            'sans-serif'
          ].join(','),
        }
      }
    },
      
   }
  })    
  export const form= createTheme({
    components:{
      MuiTextField:{
        styleOverrides:{
          root:{
            size:{xs:'small', md:'large'} 
          }
        }
      }
    }
  })