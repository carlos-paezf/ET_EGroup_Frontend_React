import { Button, Container, Grid } from "@mui/material"
import { FC } from "react"
import { HeaderComponent } from "../../components"
import { OpenInNew as OpenInNewIcon } from '@mui/icons-material'
import us from '../../assets/us.svg'
import { CardInfoComponent } from "../../components/Us/CardInfo"

export const CompanyPage: FC = () => {
    const arr = [ 1, 2, 3 ]

    return (
        <Container maxWidth="xl" sx={ { py: 1, height: '100%' } }>
            <img src={ us } alt="product" height="350px" />

            <HeaderComponent title='Nuestra empresa' description='Conoce más de nosotros y nuestros servicios' element={
                <a href="https://github.com/carlos-paezf/ET_EGroup_Frontend_React" target="_blank" rel="noopener noreferrer">
                    <Button variant='contained' sx={ { gap: "10px" } } fullWidth>
                        Consultar Frontend en GitHub
                        <OpenInNewIcon />
                    </Button>
                </a>
            } />

            <Grid container spacing={ 2 } direction="row" sx={ { my: 3 } }>
                {
                    arr.map( i => (
                        <Grid item xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 } xl={ 3 } key={ i } sx={ { display: "flex", justifyContent: "center", alignItems: "center" } }>
                            <CardInfoComponent key={ i } />
                        </Grid>
                    ) )
                }
            </Grid>
        </Container>
    )
}