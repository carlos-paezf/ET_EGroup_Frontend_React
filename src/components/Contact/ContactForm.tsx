import { TextField, Stack, Button } from '@mui/material'
import { FC } from "react"

export const ContactForm: FC = () => {
    return (
        <form style={ { width: '100%' } }>
            <Stack direction="column" spacing={ 2 } justifyContent="end">
                <TextField id="name" label="Nombre" variant="outlined" fullWidth />

                <TextField id="email" type="email" label="Email" variant="outlined" fullWidth />

                <TextField id="content" label="¿Cómo podemos ayudarte?" variant="outlined" fullWidth multiline rows={ 5 } />

                <Button variant='contained'>Enviar</Button>
            </Stack>
        </form >
    )
}