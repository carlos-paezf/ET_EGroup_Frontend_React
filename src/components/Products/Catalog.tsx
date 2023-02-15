import { OpenInNew as OpenInNewIcon } from '@mui/icons-material'
import { Button, Container } from "@mui/material"
import { FC } from "react"
import product from '../../assets/products.svg'
import { HeaderComponent } from "../Header"
import { ProductList } from './ProductList'


export const CatalogList: FC = () => {
    return (
        <Container maxWidth="xl" sx={ { py: 1, height: '100%' } }>
            <img src={ product } alt="product" height="350px" />

            <HeaderComponent title='Catálogo de Productos' description='Listado de productos ofrecidos por nuestros clientes' element={
                <a href="https://github.com/carlos-paezf/ET_EGroup_Backend_Django" target="_blank" rel="noopener noreferrer">
                    <Button variant='contained' sx={ { gap: "10px" } } fullWidth>
                        Consultar Backend en GitHub
                        <OpenInNewIcon />
                    </Button>
                </a>
            } />

            <ProductList />
        </Container>
    )
}