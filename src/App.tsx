import { ThemeContextPovider } from 'contexts/themeContext'
import DefaultLayout, { DefaultLayoutFallback } from 'layouts/default'
import { lazy, Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'

const RootPage = lazy(() => import('pages/root'))
const ExamplesPage = lazy(() => import('pages/examples'))
const ExampleButtonPage = lazy(() => import('pages/examples/button'))
const ExampleCardPage = lazy(() => import('pages/examples/card'))

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '',
                element: (
                    <DefaultLayoutFallback>
                        <RootPage />
                    </DefaultLayoutFallback>
                ),
            },
            {
                path: 'examples',
                element: (
                    <DefaultLayoutFallback>
                        <ExamplesPage />
                    </DefaultLayoutFallback>
                ),
                children: [
                    {
                        path: 'button',
                        element: (
                            <Suspense fallback={<Skeleton />}>
                                <ExampleButtonPage />
                            </Suspense>
                        ),
                    },
                    {
                        path: 'card',
                        element: (
                            <Suspense fallback={<Skeleton />}>
                                <ExampleCardPage />
                            </Suspense>
                        ),
                    },
                ],
            },
        ],
    },
])

export const App = () => {
    return (
        <ThemeContextPovider>
            <RouterProvider router={router} />
        </ThemeContextPovider>
    )
}
