import { DefaultLayoutFallback } from 'layouts/default'
import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'

const RootPage = lazy(() => import('pages/root'))
const ExamplesPage = lazy(() => import('pages/examples'))

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <DefaultLayoutFallback>
                <RootPage />
            </DefaultLayoutFallback>
        ),
    },
    {
        path: '/examples',
        element: (
            <DefaultLayoutFallback>
                <ExamplesPage />
            </DefaultLayoutFallback>
        ),
    },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
