import React, { lazy, Suspense } from 'react'
import Skeleton from 'react-loading-skeleton'

export const lazyLoadRoute = (routeName: string, fallback?: JSX.Element) => {
    const Component = lazy(() => import(`/src/pages/${routeName}.tsx`))

    return (
        <Suspense fallback={fallback ? fallback : <Skeleton />}>
            <Component />
        </Suspense>
    )
}
