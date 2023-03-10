import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeConfig } from './config/theme.config'
import './index.css'
import { router } from './router'


const queryClient = new QueryClient()


ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement ).render(
    <React.StrictMode>
        <QueryClientProvider client={ queryClient }>
            <ThemeConfig>
                <RouterProvider router={ router } />
            </ThemeConfig>
            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>,
)
