import Card from 'components/ui/Card'

const CardExample = () => (
    <>
        <div>
            <p>default</p>
            <div
                style={{
                    display: 'grid',
                    alignItems: 'start',
                    gap: '1rem',
                    gridTemplateColumns: '1fr 1fr 1fr',
                }}
            >
                <Card
                    title="Card title 123"
                    image="http://place-hold.it/500x500"
                    description="Renowned professor of physics. He discovered the molecular interaction of gases with the nose. Established a mathematical relationship between the size of the ass and nails."
                    link={{
                        href: 'https://professorslist.com',
                        text: 'Page on Professorslist.com',
                        external: true,
                    }}
                />
                <Card
                    title="Card title 456"
                    image="http://place-hold.it/500x500"
                    description="Renowned professor of physics. He discovered the molecular interaction of gases with the nose. Established a mathematical relationship between the size of the ass and nails."
                />
                <Card
                    title="Card title 456"
                    description="Renowned professor of physics. He discovered the molecular interaction of gases with the nose. Established a mathematical relationship between the size of the ass and nails."
                />
            </div>
        </div>
    </>
)

export default CardExample
