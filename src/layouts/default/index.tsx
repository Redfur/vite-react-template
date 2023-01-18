import css from 'layouts/default/DefaultLayout.module.css'
import { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'

const DefaultLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className={css.root}>
            <div className={css.header}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/examples">Examples</NavLink>
            </div>
            <div className={css.content}>{children}</div>
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
                    <h1>Loading...</h1>
                </DefaultLayout>
            }
        >
            {children}
        </Suspense>
    )
}

export default DefaultLayout
