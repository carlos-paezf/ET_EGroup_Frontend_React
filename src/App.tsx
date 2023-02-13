import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './common/NavBar/NavBar'


export const App = () => {
    return (
        <>
            <NavBar />
            <Container maxWidth="xl" sx={ { marginTop: "2rem", width: '100%' } }>
                <Outlet />
            </Container>
        </>
    )
}