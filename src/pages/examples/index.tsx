import ButtonExample from 'components/ui/Button/Button.example'
import DefaultLayout from 'layouts/default'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const ExamplesPage = () => {
    return (
        <DefaultLayout>
            <Helmet>
                <title>Examples</title>
            </Helmet>
            <h1>Examples</h1>
            <ul>
                <li>
                    <Link to={'/examples/button'}>Button</Link>
                </li>
                <li>
                    <Link to={'/examples/card'}>Card</Link>
                </li>
            </ul>
            <hr />
        </DefaultLayout>
    )
}

export default ExamplesPage
