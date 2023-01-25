import CardExample from 'components/ui/Card/Card.example'
import { Helmet } from 'react-helmet'

const ExampleCardPage = () => {
    return (
        <>
            <Helmet>
                <title>Card</title>
            </Helmet>
            <h2>Card</h2>
            <CardExample />
        </>
    )
}

export default ExampleCardPage
