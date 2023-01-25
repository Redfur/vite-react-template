import { ThemeToggleButton } from 'contexts/themeContext'
import css from 'layouts/default/DefaultLayout.module.css'
import { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Skeleton from 'react-loading-skeleton'
import { NavLink, Outlet } from 'react-router-dom'

const DefaultLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className={css.root}>
            <div className={css.header}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/examples">Examples</NavLink>
                <ThemeToggleButton />
            </div>
            <div className={css.content}>
                {children}
                <Outlet />
            </div>
        </div>
    )
}

export const DefaultLayoutFallback: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Suspense
            fallback={
                <DefaultLayout>
                    <Helmet>
                        <title>loading</title>
                    </Helmet>
                    <h1>
                        <Skeleton />
                    </h1>
                </DefaultLayout>
            }
        >
            {children}
        </Suspense>
    )
}

export default DefaultLayout
