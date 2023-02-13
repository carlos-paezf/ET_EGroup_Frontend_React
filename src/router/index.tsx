import { createBrowserRouter, Navigate } from 'react-router-dom'
import { App } from '../App'
import { HomePage } from '../pages/Home'
import { NotFoundPage } from '../pages/NotFound'


export const router = createBrowserRouter(
    [
        {
            path: 'home',
            element: <App />,
            children: [
                { path: '', element: <HomePage /> },
                { path: '*', element: <NotFoundPage /> }
            ]
        },
        {
            path: '/',
            element: <Navigate to="home" />
        },
        {
            path: '*',
            element: <Navigate to="home" />
        }
    ]
)