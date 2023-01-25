import ButtonExample from 'components/ui/Button/Button.example'
import { Helmet } from 'react-helmet'

const ExampleUiPage = () => {
    return (
        <>
            <Helmet>
                <title>Button</title>
            </Helmet>
            <h2>Button</h2>
            <ButtonExample />
        </>
    )
}

export default ExampleUiPage
