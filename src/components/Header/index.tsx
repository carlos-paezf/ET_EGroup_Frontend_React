import { Box, Divider, Grid, Typography } from '@mui/material'
import { FC, ReactNode } from "react"


type HeaderProps = {
    title: string
    description: string
    element?: ReactNode
}


export const HeaderComponent: FC<HeaderProps> = ( { title, description, element } ) => {
    return (
        <>
            <Divider sx={ { my: 7 } } />

            <Box sx={ { width: "100%", height: "auto", mb: 3 } }>
                <Grid container direction="row"
                    justifyContent="center" alignItems="center" sx={ { height: "100%", width: "100%" } }>
                    <Grid item xs={ 12 }>
                        <Grid container direction="column"
                            justifyContent="center" alignItems="center" sx={ { height: "100%", width: "100%" } }>
                            <Grid item>
                                <Typography variant='h3' align='center'>{ title }</Typography>
                            </Grid>

                            <Grid item sx={ { mt: 2 } }>
                                <Typography align='center'>{ description }</Typography>
                            </Grid>

                            {
                                !!element && <Grid item sx={ { mt: 4, width: "100%" } }>{ element }</Grid>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}