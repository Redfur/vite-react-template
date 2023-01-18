import Button from 'components/ui/Button'
import ButtonGroup from 'components/ui/Button/ButtonGroup'

const ButtonExample = () => (
    <>
        <div>
            <p>default</p>
            <Button content="default" />
        </div>
        <div>
            <p>primary</p>
            <Button content="primary" variant="primary" />
        </div>
        <div>
            <p>success</p>
            <Button content="success" variant="success" />
        </div>
        <div>
            <p>danger</p>
            <Button content="danger" variant="danger" />
        </div>
        <div>
            <p>button group</p>
            <ButtonGroup>
                <Button content="first" />
                <Button content="second" />
                <Button content="third" />
                <Button content="last" />
            </ButtonGroup>
        </div>
        <div>
            <p>button group fluid</p>
            <ButtonGroup fluid>
                <Button content="first" />
                <Button content="second" />
                <Button content="third" />
                <Button content="last" />
            </ButtonGroup>
        </div>
        <div>
            <p>button group vertical</p>
            <ButtonGroup direction="vertical">
                <Button content="first" />
                <Button content="second" />
                <Button content="third" />
                <Button content="last" />
            </ButtonGroup>
        </div>
    </>
)

export default ButtonExample
