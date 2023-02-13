import { FC } from "react"
import { Container } from '@mui/material'
import { HeaderComponent, HeroComponent } from "../../components"


export const HomePage: FC = () => {
    return (
        <Container maxWidth="xl" sx={ { py: 1, width: "100%" } }>
            <HeroComponent />
            <HeaderComponent title="Productos principales" description="Productos mejor calificados" />
            <HeaderComponent title="Contacto" description="Comunícate con nosotros" />
        </Container>
    )
}