import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Home from '../pages/Home'

const Layout = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/catalog/:slug' element={<Product />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
            <Footer />
        </BrowserRouter>

    )
}

export default Layout