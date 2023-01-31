import './App.scss'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import getProperties from './services/getProperties'

import Home from './components/Home/Home'
import Property from './components/Property/Property'
import Error from './Error/Error'

function App() {
    const [items, setItems] = useState([])

    useEffect(() => {
        async function fetchJson() {
            setItems(await getProperties())
        }

        fetchJson()
    }, [])

    // Check if error
    if (items === null) {
        return <Error text="There was an error when initialising the app" />
    }
    if (items.length === 0) return 'Loading'

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home items={items} />} />
                <Route
                    path="/:uri"
                    element={<Error text="This page does not exist" />}
                />
                <Route
                    path="/property/:id"
                    element={<Property items={items} />}
                />
            </Routes>
        </Router>
    )
}

export default App
