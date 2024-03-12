import { DeleteOutline, Edit } from "@mui/icons-material";
import { Card, CardActions, CardContent, CardMedia, List, ListItem, Typography } from "@mui/material";
import { useListaContext } from "../../hooks/useListaContext";

export default function CardsContatos({data}){
    const {excluiDados,editaDados} = useListaContext()
    return(
        <Card  sx={{ maxWidth: 360 }} >
            <CardMedia
             sx={{height: 250}}
             image={data.avatar}
             title='avatar'

            />
            <CardContent>
                <Typography variant="h5">{data.first_name}</Typography>
                <Typography variant="subtitle1">{data.last_name}</Typography>
                <Typography variant="subtitle2"><strong>Email:</strong> {data.email}</Typography>
                <Typography variant="subtitle2"><strong>Data de Nascimento:</strong> {new Date(data.birthday).toLocaleDateString()}</Typography>
                <Typography variant="subtitle2"><strong>Idade:</strong> {data.age}</Typography>
                <Typography variant="subtitle2"><strong>Genero: </strong>{data.gender === 'M' ? 'Masculino': 'Feminino'}</Typography>
                <Typography variant="subtitle2"><strong>Idioma: </strong>{data.language}</Typography>
                <CardActions sx={{display:'flex', justifyContent:'space-around'}}>
                <Edit sx={{cursor:'pointer'}} onClick={() => editaDados(data.id)} fontSize='33px'/>
                <DeleteOutline color="error" sx={{cursor: 'pointer'}} onClick={()=> excluiDados(data.id) } />
                </CardActions>

            </CardContent>
        </Card>
    )
}