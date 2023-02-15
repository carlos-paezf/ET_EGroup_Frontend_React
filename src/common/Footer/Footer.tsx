import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Divider, Grid, Stack, TextField, Typography } from "@mui/material"
import { FC } from "react"

const Footer: FC = () => {
    return (
        <footer>
            <Box sx={ { flexGrow: 1, mt: 5 } }>
                <Divider sx={ { my: 5 } } />
                <Grid container spacing={ 4 }>
                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 5 } xl={ 4 }>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8142284.141927422!2d-73.10063355846414!3d4.8172657748323475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e15a43aae1594a3%3A0x9a0d9a04eff2a340!2sColombia!5e0!3m2!1ses-419!2sco!4v1676337325961!5m2!1ses-419!2sco"
                            width="100%" height="100%" style={ { border: 0 } } allowFullScreen={ true } loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Grid>

                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 7 } xl={ 8 }>
                        <Stack direction="column" justifyItems="flex-end" alignContent="flex-end" spacing={ 2 } textAlign="left">
                            <Typography variant="h5">Recibe nuevas noticias de nuestra empresa</Typography>
                            <Typography variant="body1">Ingresa tu correo para recibir notificaciones sobre nuevas noticias relacionadas a nuestra compañía</Typography>
                            <TextField id="email" type="email" label="Email" variant="outlined" />

                            <Stack direction="row" justifyContent="flex-end" spacing={ 2 }>
                                <Facebook fontSize='large' />
                                <Twitter fontSize='large' />
                                <Instagram fontSize='large' />
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Box >
        </footer >
    )
}


export default Footer