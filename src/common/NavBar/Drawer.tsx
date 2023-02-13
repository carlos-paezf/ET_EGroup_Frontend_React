import { Box, Button, Divider, Drawer, Grid, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { Link, NavigateFunction } from 'react-router-dom'
import { ThemePalette } from '../../helpers/util'
import { LinksComponent } from './Links'


type DrawerProp = {
    mobileOpen: boolean
    navigate: NavigateFunction
    handleDrawerToggle: () => void
}


export const DrawerComponent: FC<DrawerProp> = ( { mobileOpen, navigate, handleDrawerToggle } ) => {
    const container = () => window.document.body

    return (
        <Drawer container={ container }
            variant="temporary" open={ mobileOpen } onClose={ handleDrawerToggle }
            ModalProps={ { keepMounted: true } } sx={ {
                display: { sm: 'block', md: 'none' },
                '& . MiuDrawer-paper': { boxSizing: 'border-box', width: 240 },
                backdropFilter: 'blur( 10px )',
                WebkitBackdropFilter: 'blur( 10px )',
                boxShadow: 'none'
            } }>
            <Box onClick={ handleDrawerToggle } sx={ { textAlign: 'left', width: '300px', padding: "1rem" } }>
                <Grid container direction="column" justifyContent="space-around" alignItems="start" gap="25px">
                    <Grid item width="100%">
                        <Typography variant='h6' onClick={ () => navigate( '' ) }
                            sx={ { my: 2, cursor: 'pointer', color: `${ ThemePalette.PRIMARY }` } }>
                            EGroup
                        </Typography>
                        <Divider />
                    </Grid>

                    <Grid item width="100%">
                        <Stack direction="column" spacing={ 2 }>
                            <LinksComponent />
                        </Stack>
                    </Grid>

                    <Grid item width="100%" >
                        <Stack direction="column" spacing={ 2 }>
                            <Button variant='contained'>Register</Button>
                            <Button variant='outlined'>Login</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Drawer>
    )
}