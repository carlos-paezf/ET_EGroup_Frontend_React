import { Button } from "@mui/material"
import { FC } from "react"


export const LinksComponent: FC = () => {
    return (
        <>
            <a href='/home#home'>
                <Button variant='text'>Inicio</Button>
            </a>
            <a href='/home#us'>
                <Button variant='text'>Nosotros</Button>
            </a>
            <a href='/home#products'>
                <Button variant='text'>Productos</Button>
            </a>
            <a href='/home#contact'>
                <Button variant='text'>Contacto</Button>
            </a>
        </>
    )
}