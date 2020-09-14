import React from "react";
import "./ProductPage.scss";
import Product from "./Product";
function HomeAndKitchen() {
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
                        title="kitchen"
                        author="Robert T. Kiyosaki"
                        releaseDate="11 Apr 2017"
                        price={29.99}
                        image="/assets/kitchen/steamers.png"
                        rating={2}
                    />
                    <Product
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                        author="Eric Ries"
                        releaseDate="6 Oct 2011"
                        price={10.31}
                        image="/assets/kitchen/cooker.png"
                        rating={4}
                    />
                    <Product
                        title="Eloquent Javascript, 3rd Edition: A Modern Introduction to Programming"
                        author="Marijn Haverbeke"
                        releaseDate="14 Dec. 2018"
                        price={22.93}
                        image="/assets/kitchen/kettle.png"
                        rating={4}
                    />
                </div>
                <div className="ProductPage__row">
                    <Product
                        title="Eloquent Javascript, 3rd Edition: A Modern Introduction to Programming"
                        author="Marijn Haverbeke"
                        releaseDate="14 Dec. 2018"
                        price={22.93}
                        image="/assets/kitchen/coffee.png"
                        rating={4}
                    />
                    <Product
                        title="This is Your Brain on Music: Understanding a Human Obsession"
                        author="Daniel Levitin"
                        releaseDate="14 Dec. 2018"
                        price={22.93}
                        image="/assets/kitchen/washing-machine.png"
                        rating={4}
                    />
                    <Product
                        title="Start With Why: How Great Leaders Inspire Everyone To Take Action"
                        author="Simon Sinek"
                        releaseDate="6 Oct 2011"
                        price={7.38}
                        image="/assets/kitchen/washing-machine.png"
                        rating={4}
                    />
                </div>
                <div className="ProductPage__row">
                    <Product
                        title="elon musk"
                        author="Eric Ries"
                        releaseDate="6 Oct 2011"
                        price={10.31}
                        image="/assets/kitchen/imac-mini.png"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeAndKitchen;
