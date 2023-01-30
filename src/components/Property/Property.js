import * as React from 'react'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { Link, useParams, useNavigate } from 'react-router-dom'

import Layout from '../Layout/Layout'

import styles from './Property.module.scss'

function Property404({ id }) {
    return (
        <div>
            <h1>404</h1>

            <p>
                Property with id <b>{id}</b> does not exist.
            </p>
            <Link to="/">Go back</Link>
        </div>
    )
}

function PropertyLayout({ property }) {
    return (
        <div className={styles.container}>
            <div>
                <Link to="/">
                    <BsFillArrowLeftCircleFill className={styles.arrow} />
                </Link>

                <div className={styles.propertyMeta}>
                    <h2>{property['Title Number']}</h2>{' '}
                    <span className={styles.tenure}>{property['Tenure']}</span>
                </div>
                <p className={styles.propertyAddress}>
                    {property['Property Address']}
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec vel fermentum magna. Praesent condimentum lacus sit
                    amet congue tristique. Cras aliquet nisi neque, id ornare
                    orci euismod ut. Fusce vitae tortor id dolor congue luctus.
                    Proin bibendum dui vel convallis congue. Fusce consequat
                    lectus justo, eu auctor dui feugiat non. Nulla eget ipsum
                    sit amet sapien ultrices mattis. Orci varius natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. In lectus odio, consectetur a velit nec,
                    vehicula molestie nisi.
                </p>
            </div>
            <div>
                <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDu-7v84ZijTSVqJ5Ba1R7rJxYKDiiT4zo&q=${property['Y']}, ${property['X']}`}
                ></iframe>
            </div>
        </div>
    )
}
export default function Property({ items }) {
    if (items.length === 0) return 'Loading'

    const { id } = useParams()
    const navigate = useNavigate()
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

;<div style="width: 100%">
    <iframe
        width="100%"
        height="600"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=53.2734,%20-7.77832031+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    >
        <a href="https://www.maps.ie/distance-area-calculator.html">
            distance maps
        </a>
    </iframe>
</div>
