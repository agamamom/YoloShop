import React from 'react'
import heroSliderData from '../assets/fake-data/hero-slider'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'


const Home = () => {
    return (
        <Helmet title='Trang chủ'>
            <HeroSlider data={heroSliderData} />
        </Helmet>
    )
}

export default Home