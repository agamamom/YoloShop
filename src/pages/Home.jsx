import React from 'react'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'

const Home = () => {
    return (
        <Helmet title='Trang chủ'>
            <HeroSlider />
        </Helmet>
    )
}

export default Home