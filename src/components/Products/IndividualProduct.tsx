import { Grid, Rating, Stack, Typography } from '@mui/material'
import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetcherGetProductBy } from '../../api/functions-fetcher'
import withoutImage from '../../assets/without-image.svg'
import { useProductBy } from '../../hooks/useProductBy'
import { ProductType } from "../../types"


export const IndividualProduct: FC = () => {
    const { slug = '' } = useParams()

    /* 
    const [ product, setProduct ] = useState<ProductType | null>( null )
    const [ isLoading, setIsLoading ] = useState<boolean>( true )

    useEffect( () => {
        setIsLoading( true )
        fetcherGetProductBy( slug )
            .then( data => {
                setProduct( data )
            } )
            .catch( err => console.error( err ) )
            .finally( () => setIsLoading( false ) )
    }, [ slug ] ) 
    */

    const { product: { data, isLoading } } = useProductBy( slug )

    if ( isLoading ) return <h1>Loading</h1>

    if ( !data ) return <h1>No hay resultados para la búsqueda</h1>

    const { title, description, rating, price, stock, image } = data

    return (
        <Grid container direction='row' spacing={ 2 } height="100%">
            <Grid item xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }>
                <Stack direction="column" spacing={ 3 } justifyContent="center" height="100%" textAlign="right" alignItems="flex-end">
                    <Typography component="div" variant="h4">
                        { title }
                    </Typography>

                    <Rating name="read-only" value={ rating } precision={ 0.5 } readOnly />

                    <Typography component="div" variant="subtitle1">
                        Precio {
                            Intl.NumberFormat( 'es-CO', { style: 'currency', currency: 'COP' } )
                                .format( price )
                        } COP
                    </Typography>

                    <Typography component="div" variant="subtitle1">
                        { description }
                    </Typography>

                    <Typography component="div" variant="subtitle1">
                        Cantidad Disponible: { Intl.NumberFormat( 'es-CO' ).format( stock ) }
                    </Typography>
                </Stack>
            </Grid>

            <Grid item xs={ 12 } sm={ 12 } md={ 12 } lg={ 6 } xl={ 6 }>
                <img src={ ( !image || image?.length < 20 ) ? withoutImage : image } alt="" />
            </Grid>
        </Grid>
    )
}