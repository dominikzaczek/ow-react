import './App.scss'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import getProperties from './services/getProperties'

import Home from './components/Home/Home'
import Property from './components/Property/Property'

function EM(){
    return <p>No, no</p>
}
function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function fetchJson() {
        setItems(await getProperties())
    }

    fetchJson()
}, [])

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home items={items} />} errorElement={EM}/>
                <Route path="/property/:id" element={<Property items={items}/>} />
            </Routes>
        </Router>
    )
}




export default App
