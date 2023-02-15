import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material"
import { FC, useState } from "react"
import { useCatalogProducts } from "../../hooks/useCatalogProducts"
import { ProductType } from "../../types"
import { CardProductComponent } from "./CardProduct"


export const ProductList: FC = () => {
    const [ page, setPage ] = useState<number>( 1 )

    const { products: { data, isLoading, isFetching, fetchNextPage, hasNextPage } } = useCatalogProducts()

    if ( isLoading )
        return <Box sx={ { display: "flex", justifyContent: "center", mt: 5 } }>
            <CircularProgress variant='indeterminate' />
        </Box>

    if ( !data || !data.pages.flat().length )
        return <h1>No hay productos para listar</h1>

    return (
        <Grid container spacing={ 2 } direction="row" sx={ { my: 3 } }>
            {
                data.pages.flat().map( product => (
                    <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 } xl={ 3 } key={ product.id } sx={ { display: "flex", justifyContent: "center", alignItems: "center" } }>
                        <CardProductComponent { ...product } key={ product.slug } />
                    </Grid>
                ) )
            }

            <Box sx={ { width: "100%", display: "flex", justifyContent: "center", alignItems: "center", my: 5 } }>
                {
                    hasNextPage
                        ? <Button variant="outlined" onClick={ () => fetchNextPage() } disabled={ isFetching }>Mostrar más productos</Button>
                        : <Typography variant="h6">Has llegado al final de los productos</Typography>
                }
            </Box>
        </Grid>
    )
}