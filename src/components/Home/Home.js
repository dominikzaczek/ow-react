import React, { useState, useEffect } from 'react'
import Controls from '../Controls/Controls'
import Table from '../Table/Table'
import Layout from '../Layout/Layout'

export default function Home({ items }) {
    const [perPage, setPerPage] = useState(5)
    const [page, setPage] = useState(0)
    const [itemsToDisplay, setItemsToDisplay] = useState([])
    const [reverse, setReverse] = useState(false)

    useEffect(() => {
        const properties = reverse ? items.reverse() : items
        setItemsToDisplay(
            properties.slice(page * perPage, page * perPage + perPage)
        )
    }, [items, page, perPage, reverse])

    function handleUpdateItemsPerPage(value) {
        setPerPage(value)
    }

    function handleChangePage(value) {
        if (value === 'next') {
            setPage((page) => page + 1)
        } else {
            setPage((page) => page - 1)
        }
    }

    function handleChangeReverse(value) {
        setReverse(value)
    }

    return (
        <Layout>
            <select onChange={(e) => handleChangeReverse(e.target.value)}>
                <option disabled unselectable>
                    Sort by
                </option>
                <option value={false}>Title (asc)</option>
                <option value={true}>Title (desc)</option>
            </select>
            <Table items={itemsToDisplay} />
            <Controls
                total={items.length}
                showNext={(page + 1) * perPage < items.length}
                showPrevious={page !== 0}
                onChangePage={handleChangePage}
                onChangeItemsPerPage={handleUpdateItemsPerPage}
            />
        </Layout>
    )
}
