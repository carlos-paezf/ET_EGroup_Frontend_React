import { OpenInNew as OpenInNewIcon } from '@mui/icons-material'
import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import { FC } from "react"
import hero from '../../assets/hero_world.svg'
import { ThemePalette } from "../../helpers/util"

export const HeroComponent: FC = () => {
    return (
        <section id="home">
            <Container maxWidth="xl">
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Grid item sx={ { width: { sm: '100%', md: "50%" } } }>
                        <Stack direction="column" spacing={ 2 } alignItems='start' sx={ {
                            alignItems: { sm: "center", md: "start" },
                            textAlign: { sm: "center", md: "left" }
                        } }>
                            <Typography variant="h2">
                                Página de ensayo para
                                <Typography variant="h2" color={ ThemePalette.PRIMARY }>Prueba Técnica</Typography>
                            </Typography>
                            <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>

                            <a href="https://github.com/carlos-paezf" target="_blank" rel="noopener noreferrer">
                                <Button variant='contained' sx={ { gap: "10px" } }>
                                    Visita mi GitHub
                                    <OpenInNewIcon />
                                </Button>
                            </a>
                        </Stack>
                    </Grid>

                    <Grid item sx={ { width: { sm: '0%', md: "50%" } } }>
                        <img src={ hero } alt="Hero image" />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}