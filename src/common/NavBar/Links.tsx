import { Button } from "@mui/material"
import { FC } from "react"


export const LinksComponent: FC = () => {
    return (
        <>
            <a href='/#home'>
                <Button variant='text'>Inicio</Button>
            </a>
            <a href='/#us'>
                <Button variant='text'>Nosotros</Button>
            </a>
            <a href='/#products'>
                <Button variant='text'>Productos</Button>
            </a>
            <a href='/#contact'>
                <Button variant='text'>Contacto</Button>
            </a>
        </>
    )
}