import { Button } from "@mui/material"
import { FC } from "react"
import { Link } from "react-router-dom"


export const LinksComponent: FC = () => {
    return (
        <>
            <a href='/#home'>
                <Button variant='text'>Inicio</Button>
            </a>
            <Link to='/company'>
                <Button variant='text'>Nosotros</Button>
            </Link>
            <Link to='/products'>
                <Button variant='text'>Productos</Button>
            </Link>
            <a href='/#contact'>
                <Button variant='text'>Contacto</Button>
            </a>
        </>
    )
}