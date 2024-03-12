import { Button } from '@mui/material';
import React from 'react';
import * as XLSX from 'xlsx';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';



export default function BotaoExportarExcel({data}){


    const exportarParaExcel = ()=>{
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Contatos');
    XLSX.writeFile(wb,'Dados-Tabela-Exportados.xls')
    }
    return(
         <Button title='Baixar Tabela' color='success' sx={{borderRadius: 10}} variant='contained' onClick={exportarParaExcel}><DownloadForOfflineIcon/></Button>   

    )
}