import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material'
import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetcherGetTopProducts } from "../../api/functions-fetcher"
import { useTopProducts } from '../../hooks/useTopProducts'
import type { ProductType } from "../../types"
import { HeaderComponent } from "../Header"
import { CardProductComponent } from './CardProduct'


export const ProductsCarouselComponent: FC = () => {
    /* 
    const [ products, setProducts ] = useState<ProductType[] | null>( null )
    const [ isLoading, setIsLoading ] = useState<boolean>( true )
    useEffect( () => {
            setIsLoading( true )
            fetcherGetTopProducts()
            .then( data => {
                setProducts( data )
            } )
            .catch( err => console.error( err ) )
            .finally( () => setIsLoading( false ) )
    }, [] ) 
    */


    const { topProducts: { data, isLoading } } = useTopProducts()

    return (
        <section id="products">
            <HeaderComponent title="Productos principales" description="Productos mejor calificados" />
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={ 2 }>
                <Grid item width="100%">
                    <Grid container spacing={ 2 } sx={ {
                        direction: 'row',
                        justifyContent: 'start',
                        alignItems: 'center',
                        flexWrap: 'nowrap',
                        overflow: 'auto',
                        with: '100%',
                        px: { sm: 0, md: 5 }
                    } }>
                        {
                            isLoading && <Box sx={ { display: "flex", justifyContent: "center", mt: 5 } }>
                                <CircularProgress variant='indeterminate' />
                            </Box>
                        }
                        {
                            !data
                                ? <Typography>No hay productos para mostrar</Typography>
                                : data.map( product => (
                                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 } xl={ 3 } key={ product.id } sx={ { display: "flex", justifyContent: "center", alignItems: "center" } }>
                                        <CardProductComponent { ...product } key={ product.slug } />
                                    </Grid>
                                ) )
                        }
                    </Grid>
                </Grid>

                <Grid item width="100%">
                    <Link to="/products">
                        <Button variant="contained">Click aquí para ver el catálogo</Button>
                    </Link>
                </Grid>
            </Grid>
        </section >
    )
}