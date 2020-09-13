import React from 'react'
import './ProductPage.scss'
import Product from './Product'
function Books() {
    return (
        <div className='ProductPage'>
            <div className="hero__container">
                <img
                    className='ProductPage__hero'
                    src='/assets/amazon-hero.jpg'
                    alt='hero'
                />
            </div>
            <div className="ProductPage__container">


                <div className="ProductPage__row">
                    <Product
                        title='Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!'
                        author='Robert T. Kiyosaki'
                        releaseDate='11 Apr 2017'
                        price={29.99}
                        image='/assets/books/rich-dad-poor-dad.webp'
                        rating={2}
                    />
                    <Product
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
                        author='Eric Ries'
                        releaseDate='6 Oct 2011'
                        price={10.31}
                        image='/assets/books/the-lean-startup.jpg'
                        rating={4}
                    />
                    <Product
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
                        author='Eric Ries'
                        releaseDate='6 Oct 2011'
                        price={10.31}
                        image='/assets/books/the-lean-startup.jpg'
                        rating={4}
                    />
                </div>
                <div className="ProductPage__row">
                    <Product
                        title='Life After Google: The Fall of Big Data and the Rise of the Blockchain'
                        author='George Gilder '
                        releaseDate='2 Aug 2018'
                        price={17.59}
                        image='/assets/books/life-after-google.jpg'
                        rating={4}
                    />
                    <Product
                        title='Eloquent Javascript, 3rd Edition: A Modern Introduction to Programming'
                        author='Marijn Haverbeke'
                        releaseDate='14 Dec. 2018'
                        price={22.93}
                        image='/assets/books/eloquent-js.png'
                        rating={4}
                    />
                    <Product
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
                        author='Eric Ries'
                        releaseDate='6 Oct 2011'
                        price={10.31}
                        image='/assets/books/the-lean-startup.jpg'
                        rating={4}
                    />
                </div>
                <div className="ProductPage__row">
                    <Product
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses'
                        author='Eric Ries'
                        releaseDate='6 Oct 2011'
                        price={10.31}
                        image='/assets/books/the-lean-startup.jpg'
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Books
