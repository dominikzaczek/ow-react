import Layout from '../components/Layout/Layout'

export default function Error({ text }) {
    return (
        <Layout>
            <div>
                <h1>Error</h1>
                <p>{text}</p>
            </div>
        </Layout>
    )
}
