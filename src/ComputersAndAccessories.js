import React from "react";
import "./ProductPage.scss";
import Product from "./Product";
function ComputersAndAccessories() {
    return (
        <div className="ProductPage">
            <div className="hero__container">
                <img
                    className="ProductPage__hero"
                    src="/assets/amazon-hero.jpg"
                    alt="hero"
                />
            </div>
            <div className="ProductPage__container">
                <div className="ProductPage__row">
                    <Product
                        title="New Apple iMac with Retina 5K display (27-inch, 8GB RAM, 512GB SSD Storage)"
                        // author="Robert T. Kiyosaki"
                        releaseDate="11 Apr 2017"
                        price={2200.29}
                        image="/assets/computers-&-accessories/imac.jpg"
                        rating={5}
                    />
                    <Product
                        title="Apple iMac Pro (27-inch with Retina 5K Display, 3.2GHz 8-core Intel Xeon W, 32GB RAM, 1TB SSD - Previous Model)"
                        // author="Eric Ries"
                        releaseDate="6 Oct 2011"
                        price={4101.97}
                        image="/assets/computers-&-accessories/imac-pro.jpg"
                        rating={5}
                    />
                    <Product
                        title="New Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Grey (2nd Generation)"
                        // author="Marijn Haverbeke"
                        releaseDate="14 Dec. 2018"
                        price={1069.00}
                        image="/assets/computers-&-accessories/ipad-pro.jpg"
                        rating={4}
                    />
                </div>
                <div className="ProductPage__row">
                    <Product
                        title="New Apple MacBook Air (13-inch, 1.1GHz dual-core 10th-generation Intel Core i3 processor, 8GB RAM, 256GB) - Silver"
                        // author="Marijn Haverbeke"
                        releaseDate="14 Dec. 2018"
                        price={22.93}
                        image="/assets/computers-&-accessories/macbook-air.jpg"
                        rating={4}
                    />
                    <Product
                        title="Apple MacBook Pro (16-Inch, 16GB RAM, 512GB Storage) - Silver"
                        // author="Daniel Levitin"
                        releaseDate="14 Dec. 2018"
                        price={22.93}
                        image="/assets/computers-&-accessories/macbook-pro.jpg"
                        rating={4}
                    />
                    <Product
                        title="Apple MacBook Pro (16-Inch, 16GB RAM, 512GB Storage) - Silver"
                        // author="Simon Sinek"
                        releaseDate="6 Oct 2011"
                        price={7.38}
                        image="/assets/computers-&-accessories/macbook-16-inch.jpg"
                        rating={4}
                    />
                </div>
                <div className="ProductPage__row">
                    <Product
                        title="imac mini"
                        author="Eric Ries"
                        releaseDate="6 Oct 2011"
                        price={10.31}
                        image="/assets/computers-&-accessories/imac-mini.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    );
}

export default ComputersAndAccessories;
