import React from 'react'
import './Home.scss'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                    className='home__hero'
                    src='/assets/amazon-hero.jpg'
                    alt='hero image'
                />
                <div className="home__row">
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}

export default Home
