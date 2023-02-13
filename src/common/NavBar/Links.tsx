import { Button } from "@mui/material"
import { FC } from "react"
import { Link } from "react-router-dom"


export const LinksComponent: FC = () => {
    return (
        <>
            <Link to='/home#home'>
                <Button variant='text'>Inicio</Button>
            </Link>
            <Link to='/home#us'>
                <Button variant='text'>Nosotros</Button>
            </Link>
            <Link to='/home#products'>
                <Button variant='text'>Productos</Button>
            </Link>
            <Link to='/home#contact'>
                <Button variant='text'>Contacto</Button>
            </Link>
        </>
    )
}