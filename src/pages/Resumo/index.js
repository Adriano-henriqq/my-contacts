import { useListaContext } from "../../hooks/useListaContext"

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts'
import { Box } from "@mui/material";

export default function Resumo() {
  const { listaBrowser } = useListaContext()

  const CalculaGeneros = () => {
    let totalHomens = 0
    let totalMulheres = 0
    const listaContatos = JSON.parse(localStorage.getItem('contatos'))
    const contatosLista = listaBrowser.length === 0 ? listaContatos : listaBrowser
    contatosLista.forEach(item => {
      if (item.gender === 'M') {
        totalHomens++;
      } else if (item.gender === 'F') {
        totalMulheres++
      }
    })

    return { totalHomens, totalMulheres }
  }

  const totalHomens = CalculaGeneros().totalHomens
  const totalMulheres = CalculaGeneros().totalMulheres
  const total = totalHomens + totalMulheres;
  const porcentagemM = (totalMulheres / total) * 100
  const porcentagemH = (totalHomens / total) * 100

  const contarIdiomas = () => {
    const contagem = {}
    const listaContatos = JSON.parse(localStorage.getItem('contatos'))



    const idiomas = listaContatos.map(contato => {
      const idioma = contato.language
      return idioma
    })
    for (const idioma of idiomas) {
      const idiomaFormatado = idioma;
      if (contagem[idiomaFormatado]) {
        contagem[idiomaFormatado]++
      } else {
        contagem[idiomaFormatado] = 1
      }

      console.log(contagem)
    }
    const nomeIdiomas = Object.keys(contagem)
    const totalContagem = Object.values(contagem)
    return { totalContagem, nomeIdiomas, idiomas }
  };


  const options = {
    chart: {
      type: 'column',
      height: 300,


    },
    credits: {
      enabled: false,
    },
    title: {
      text: ' Estatísticas da Tabela'
    },
    series: [{
      data: [{
        name: 'Masculino',
        y: Number(parseFloat(porcentagemH.toFixed(1))),

      }],
      name: 'Masculino %',
      color: 'blue'


    },
    {
      data: [{
        name: 'Feminino',
        y: Number(parseFloat(porcentagemM.toFixed(1))),

      }],
      name: 'Feminino %',
      color: 'red'

    }
    ],
    yAxis: {
      title: {
        text: 'Porcentagem de  Generos ',

      }
    },
    xAxis: {
      categories: ['Gêneros']
    },
    tooltip: {
      animation: false,
      backgroundColor: 'lightGray',

    }

  }

  const nomeIdiomas = contarIdiomas().nomeIdiomas
  const quantidadeIdiomas = contarIdiomas().totalContagem
  const optionsIdioma = {
    chart: {
      type: 'column',
      height: 300,
      

    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Estatísticas da Tabela',
    },
    series: [{
      name: 'Quantidade por Idioma',
      data: quantidadeIdiomas,
    }],
    yAxis: {
      title: {
        text: 'Quantidade de Idiomas',
      },
    },
    xAxis: {
      categories: nomeIdiomas,
    },
    tooltip: {
      animation: false,
      backgroundColor: 'lightGray',
    },
  };


  contarIdiomas()
  return (
    <>
      <Box component={'div'} sx={{ width: '100%', marginBottom:3 }}>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />

      </Box>
      <HighchartsReact
        highcharts={Highcharts}
        options={optionsIdioma}
      />
    </>
  )
}