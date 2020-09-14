import React from 'react'
import './Product.scss'
function Product({ id, title = 'default', author, releaseDate, image = 'loading', price = 0, rating = 0 }) {

let  authorCheck 

if(!author) {
    authorCheck = 'seller'
} else {
    authorCheck = 'by'
}




    return (
        <div className='product'>
            <div className="product__info">
                <p className='product__infoTitle'>{title}</p>
                <p className='product__infoAuthor'><small>{authorCheck}</small> {author}<span> | {releaseDate}</span></p>
                <p className="product__price">
                    <small>£</small>
                    <strong>{price}</strong>
                    
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (<p>⭐️</p>))}
                </div>
            </div>
            <img
                src={image}
                alt="item"
            />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
