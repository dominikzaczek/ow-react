import * as React from 'react'
import { useParams } from 'react-router-dom'

import Layout from '../Layout/Layout'
import Property404 from './Property404'

import PropertyLayout from './PropertyLayout'

export default function Property({ items }) {
    const { id } = useParams()

    if (items.length === 0) return 'Loading'

    const property = items.find((x) => x['Title Number'] === id)

    return (
        <Layout>
            {property ? (
                <PropertyLayout property={property} />
            ) : (
                <Property404 id={id} />
            )}
        </Layout>
    )
}
