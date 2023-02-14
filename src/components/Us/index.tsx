import { FC } from "react"
import { HeaderComponent } from "../Header"
import company from '../../assets/company.svg'
import { Button, Container, Grid, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const UsComponent: FC = () => {
    return (
        <section id="us">
            <HeaderComponent title="Conoce más de nosotros" description="¿Quienes somos? Conoce más acerca de nuestra empresa" />
            <Container maxWidth="xl">
                <Grid container direction="row" alignItems="center" justifyContent="center" sx={ {
                    flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' },
                    textAlign: 'center'
                } }>
                    <Grid item sx={ { width: { xs: '100%', sm: '100%', md: '50%' } } }>
                        <img src={ company } alt="" />
                    </Grid>

                    <Grid item sx={ { width: { xs: '100%', sm: '100%', md: '50%' } } }>
                        <Stack direction="column" spacing={ 2 } alignItems="end">
                            <Typography variant='body1' style={ { textAlign: 'left' } }>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, quidem! Iusto aliquid soluta quas eligendi veniam necessitatibus qui odit unde, facilis at eos? Aliquid debitis totam, dolore perspiciatis quidem repudiandae! <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa eveniet sint quos ex ab blanditiis? Sunt voluptatibus fuga non nam ad reprehenderit esse quis dolore voluptate, sint, necessitatibus suscipit.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum officia libero ut et quaerat voluptate ea nihil? Sapiente a voluptatibus voluptatum ad suscipit, enim quasi voluptate neque ipsa incidunt ducimus.
                            </Typography>
                            <Link to="/">
                                <Button variant="contained">Seguir leyendo</Button>
                            </Link>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}