import DefaultLayout from 'layouts/default'
import { Helmet } from 'react-helmet'

const RootPage = () => {
    return (
        <DefaultLayout>
            <Helmet>
                <title>Main page</title>
            </Helmet>
            <h1>Main page</h1>
        </DefaultLayout>
    )
}

export default RootPage
