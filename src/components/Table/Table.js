import React from 'react'
import styles from './Table.module.scss'
import {
    BsFillArrowRightCircleFill,
} from 'react-icons/bs'

function TableRow({ titleNumber, tenure, propertyAddress, header }) {
    return (
        <div className={styles.row} role="row">
            <span role="cell" className={styles.tableCell}>
                {titleNumber}
                {!header && (
                    <a href={`/property/${titleNumber}`}>
                        <BsFillArrowRightCircleFill className={styles.arrow} />
                     </a>
                )}
            </span>

            <span role="cell" className={styles.tableCell}>
                {tenure}
            </span>

            <span role="cell" className={styles.propertyAddress}>
                {propertyAddress}
            </span>
        </div>
    )
}
export default function Table({ items }) {
    return (
        <div className="table">
            <TableRow
                titleNumber="Title Number"
                tenure="Tenure"
                propertyAddress="Property Address"
                header
            />
            {items.map((item, i) => {
                return (
                    <TableRow
                        titleNumber={item['Title Number']}
                        tenure={item['Tenure']}
                        propertyAddress={item['Property Address']}
                        key={i}
                    />
                )
            })}
        </div>
    )
}
