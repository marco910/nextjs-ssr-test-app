export default function IsrDemoPage({ date }) {
    return (
        <div>
            <h1>ISR Demo</h1>
            <p>
                The content of this page is revalidated every 60 seconds.
            </p>
            <p>
                Current time: {new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" })}
            </p>
            <p>
                ISR Value: {new Date(date).toLocaleString("de-DE", { timeZone: "Europe/Berlin" })}
            </p>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            date: new Date().toISOString()
        },
        revalidate: 60
    }
}