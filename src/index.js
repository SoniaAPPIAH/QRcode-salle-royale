import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import CartelsES from './pages/cartelsES.jsx'
import CartelsZH from './pages/cartelsZH.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/ES" element={<CartelsES />} />
                <Route exact path="/ZH" element={<CartelsZH />} />
            </Routes>
        </Router>
    </React.StrictMode>
);