import { Menu as MenuIcon } from '@mui/icons-material'
import { AppBar, Box, Button, Container, Grid, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ThemePalette } from '../../helpers/util'
import { DrawerComponent } from './Drawer'
import { LinksComponent } from './Links'


const NavBar: FC<{}> = () => {
    const navigate = useNavigate()
    const [ mobileOpen, setMobileOpen ] = useState<boolean>( false )

    const handleDrawerToggle = () => setMobileOpen( !mobileOpen )

    return (
        <Box sx={ { flexGrow: 1 } }>
            <AppBar position='fixed' component='nav' sx={ {
                background: `${ ThemePalette.BG_GLASS }`,
                backdropFilter: 'blur( 10px )',
                WebkitBackdropFilter: 'blur( 10px )',
                boxShadow: 'none'
            } }>
                <Toolbar>
                    <Container maxWidth="md" sx={ { mr: 2, display: { md: 'none' } } }>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant='h6'
                                    onClick={ () => navigate( '' ) }
                                    sx={ { my: 2, cursor: 'pointer', color: `${ ThemePalette.PRIMARY }` } }>
                                    GitFerrer
                                </Typography>
                            </Grid>
                            <Grid item>
                                <IconButton color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={ handleDrawerToggle } >
                                    <MenuIcon sx={ { color: ThemePalette.PRIMARY } } />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Container>

                    <Container maxWidth="xl" sx={ { display: { xs: 'none', sm: 'none', md: 'block', } } }>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Stack direction="row" spacing={ 1 } alignItems='center'>
                                    <Typography variant='h6'
                                        onClick={ () => navigate( '' ) }
                                        sx={ { my: 2, mr: 3, cursor: 'pointer', color: `${ ThemePalette.PRIMARY }` } }>
                                        GitFerrer
                                    </Typography>
                                    <LinksComponent />
                                </Stack>
                            </Grid>

                            <Grid item>
                                <Stack direction="row" spacing={ 2 }>
                                    <Button variant='contained'>Register</Button>
                                    <Button variant='outlined'>Login</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>

            <Box component="nav">
                <DrawerComponent mobileOpen={ mobileOpen } navigate={ navigate } handleDrawerToggle={ handleDrawerToggle } />
            </Box>
        </Box >
    )
}

export default NavBar