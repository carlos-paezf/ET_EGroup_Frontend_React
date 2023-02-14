import { Container } from '@mui/material'
import { FC } from "react"
import { ProductsComponent, SliderComponent, UsComponent } from "../../components"
import { ContactComponent } from '../../components/Contact/index'


export const HomePage: FC = () => {
    return (
        <Container maxWidth="xl" sx={ { py: 1, width: "100%" } }>
            <SliderComponent />
            <UsComponent />
            <ProductsComponent />
            <ContactComponent />
        </Container>
    )
}