import React from 'react'
import './Subtotal.scss'
import CurrencyFormat from 'react-currency-format'
function Subtotal() {
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" />T his order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'£'}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
