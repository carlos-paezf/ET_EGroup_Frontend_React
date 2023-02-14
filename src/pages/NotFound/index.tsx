import { Typography, Container, Grid, Button, Stack } from '@mui/material'
import { FC } from "react"
import { Link } from 'react-router-dom'
import status404 from './../../assets/status_404.svg'


export const NotFoundPage: FC = () => {
    return (
        <Container maxWidth="xl" sx={ { my: 12 } }>
            <Grid container direction="row" alignItems="center" justifyContent="center" sx={ {
                flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' },
                textAlign: 'center'
            } }>
                <Grid item sx={ {
                    width: { xs: '100%', sm: '100%', md: '50%' }
                } }>
                    <img src={ status404 } alt="" />
                </Grid>
                <Grid item sx={ {
                    width: { xs: '100%', sm: '100%', md: '50%' }
                } }>
                    <Stack direction="column" spacing={ 2 }>
                        <Typography variant="h3">Página no encontrada</Typography>
                        <Typography variant='subtitle1' style={ { textAlign: 'left' } }>
                            La página que buscas no está disponible por alguna de las siguientes razones:<br />
                            1. El vínculo que conduce a esta página es incorrecto o demasiado antiguo<br />
                            2. Has llegado hasta aquí por medio de un marcador vinculado a una página que ha cambiado de ubicación
                        </Typography>
                        <Link to="/">
                            <Button variant="contained">Ir al Inicio</Button>
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}