import React from 'react'
import './Checkout.scss'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img
                    className='checkout-ad'
                    src="/assets/checkout-ad.png"
                    alt="ad"
                />
                <h1 className='checkout__title '>shopping basket</h1>

            </div>
            <div className="checkout__right">
            <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
