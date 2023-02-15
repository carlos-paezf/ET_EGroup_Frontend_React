import { createBrowserRouter, Navigate } from 'react-router-dom'
import { App } from '../App'
import { CatalogList } from '../components/Products/Catalog'
import { IndividualProduct } from '../components/Products/IndividualProduct'
import { CompanyPage } from '../pages/Company'
import { HomePage } from '../pages/Home'
import { NotFoundPage } from '../pages/NotFound'
import { ProductCatalogPage } from '../pages/ProductCatalog'


export const router = createBrowserRouter(
    [
        {
            path: '',
            element: <App />,
            children: [
                { path: '', element: <HomePage /> },
                {
                    path: 'products',
                    element: <ProductCatalogPage />,
                    children: [
                        { path: '', element: <CatalogList /> },
                        { path: ':slug', element: <IndividualProduct /> },
                        { path: '*', element: <Navigate to="list" /> }
                    ]
                },
                { path: 'company', element: <CompanyPage /> },
                { path: '*', element: <NotFoundPage /> },
            ]
        },
        {
            path: '/',
            element: <Navigate to="" />
        },
        {
            path: '*',
            element: <Navigate to="" />
        }
    ]
)