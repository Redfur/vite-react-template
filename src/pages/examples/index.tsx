import ButtonExample from 'components/ui/Button/Button.example'
import DefaultLayout from 'layouts/default'
import { Helmet } from 'react-helmet'

const ExamplesPage = () => {
    return (
        <DefaultLayout>
            <Helmet>
                <title>Examples</title>
            </Helmet>
            <h1>Examples</h1>
            <ButtonExample />
        </DefaultLayout>
    )
}

export default ExamplesPage
