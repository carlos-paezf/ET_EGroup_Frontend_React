import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeConfig } from './config/theme.config'
import './index.css'
import { router } from './router'


ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement ).render(
    <React.StrictMode>
        <ThemeConfig>
            <RouterProvider router={ router } />
        </ThemeConfig>
    </React.StrictMode>,
)
