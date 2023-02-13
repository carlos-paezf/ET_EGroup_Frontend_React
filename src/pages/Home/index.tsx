import { Container } from '@mui/material'
import { FC } from "react"
import { HeroComponent, ProductsComponent, UsComponent } from "../../components"
import { ContactComponent } from '../../components/Contact/index'


export const HomePage: FC = () => {
    return (
        <Container maxWidth="xl" sx={ { py: 1, width: "100%" } }>
            <HeroComponent />
            <UsComponent />
            <ProductsComponent />
            <ContactComponent />
        </Container>
    )
}