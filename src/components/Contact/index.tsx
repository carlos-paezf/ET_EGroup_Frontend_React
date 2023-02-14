import { Container, Grid, Stack, Typography } from '@mui/material'
import { FC } from "react"
import { HeaderComponent } from "../Header"
import { ContactForm } from './ContactForm'

export const ContactComponent: FC = () => {
    return (
        <section id="contact">
            <HeaderComponent title="Contacto" description="Escríbenos y déjanos saber que piensas" />
            <Container maxWidth="xl">
                <Grid container direction='row' justifyContent="space-between" alignItems="center" spacing={ 5 }>
                    <Grid item sx={ { width: { sm: '100%', md: "50%" } } }>
                        <Stack direction="column" spacing={ 2 } sx={ {
                            alignItems: { sm: "center", md: 'start' },
                            textAlign: { sm: "center", md: 'left' }
                        } }>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam tenetur commodi, aliquam et minima facere officia odio eius pariatur sapiente ullam, quos voluptate eum inventore laboriosam consectetur accusantium. Laborum, excepturi.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis impedit facilis expedita molestiae dolores iste mollitia dolore totam pariatur consequuntur, a, possimus itaque officiis assumenda incidunt, vero illum enim dignissimos. <br /><br />
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate harum, earum suscipit tenetur facere illo iure distinctio similique tempore accusantium id error, temporibus commodi dolor quibusdam sunt eveniet, maiores numquam.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos voluptates assumenda at distinctio aut rem nesciunt aliquid vel. Eligendi natus nemo placeat ipsum optio enim nulla sint consequatur maiores necessitatibus?
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid item sx={ { width: { sm: '0%', md: "50%" } } }>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}