import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Home from '../pages/Home'

const Routess = () => {
    return (
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/catalog/:slug' element={<Product />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export default Routess