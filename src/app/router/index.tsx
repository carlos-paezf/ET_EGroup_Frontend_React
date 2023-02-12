import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../../App'


export const router = createBrowserRouter( [
    {
        path: '',
        element: <App />,
        children: [

        ]
    },
    {
        path: '*',
        element: <h1>Not Found</h1>
    }
] )

/* 
export const router = createBrowserRouter( [
    {
        path: '/issues',
        element: <GitApp />,
        children: [
            { path: 'list', element: <ListView /> },
            { path: 'issue/:id', element: <IssueView /> },
            { path: '*', element: <Navigate to="list" /> }
        ]
    },
    {
        path: '/',
        element: <Navigate to="issues/list" />
    },
    {
        path: '*',
        element: <h1>Not Found</h1>
    }
] )
*/