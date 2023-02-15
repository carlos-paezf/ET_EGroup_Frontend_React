import { OpenInNew as OpenInNewIcon } from '@mui/icons-material'
import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import { FC, memo } from "react"
import hero1 from '../../assets/hero_world.svg'
import hero2 from '../../assets/hero-2.svg'
import { ThemePalette } from "../../helpers/util"

const Hero: FC<{ step: number }> = ( { step } ) => {
    return (
        <section id="home" style={ { paddingTop: '3rem' } }>
            <Container maxWidth="xl">
                <Grid container direction={ ( step % 2 === 0 ) ? 'row' : 'row-reverse' } justifyContent="space-between" alignItems="center">
                    <Grid item sx={ { width: { sm: '100%', md: "50%" } } }>
                        <Stack direction="column" spacing={ 2 } sx={ {
                            alignItems: { sm: "center", md: ( step % 2 === 0 ) ? 'start' : 'end' },
                            textAlign: { sm: "center", md: ( step % 2 === 0 ) ? 'left' : 'right' }
                        } }>
                            <Typography variant="h2">
                                Página de ensayo para
                            </Typography>
                            <Typography variant="h2" color={ ThemePalette.PRIMARY }>Prueba Técnica</Typography>
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
                        <img src={ ( step % 2 === 0 ) ? hero1 : hero2 } alt="Hero image" />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export const HeroComponent = memo( Hero )