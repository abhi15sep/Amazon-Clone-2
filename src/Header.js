import React from 'react'
import './Header.scss'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <div className='header'>
                <Link to='/'>
                    <img
                        className='header__logo'
                        src='/assets/amazon.png'
                        alt="logo"
                    />
                </Link>

                <div
                    className='header__search'>
                    <input
                        className='header__searchInput'
                        type="text"
                        placeholder="Search Amazon.co.uk"
                    />
                    <SearchIcon
                        className='header__searchIcon'
                    />

                </div>
                <div className='header__nav'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>
                            hello, guest
                    </span>
                        <span className='header__optionLineTwo'>
                            sign in
                    </span>
                    </div>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>
                            returns
                    </span>
                        <span className='header__optionLineTwo'>
                            & orders
                    </span>
                    </div>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>
                            your
                    </span>
                        <span className='header__optionLineTwo'>
                            prime
                    </span>
                    </div>
                    <Link to='/checkout' >
                        <div className="header__optionBasket">
                            <ShoppingBasketIcon />
                            <span className="header__optionLineTwo header__basketCount">0</span>
                        </div>
                    </Link>
                </div>

            </div>
            <div className="navbar">
                <div className="navbar__delivery">
                    <PersonPinCircleIcon />
                    <div className="navbar__deliveryAddress">
                        <p>deliver to</p>
                        <p>united kingdom</p>
                    </div>
                </div>
                <div className="navbar__nav">
                    <div className="navbar__option">
                        <a href="">best sellers</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">prime video</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">todady's deals</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">customer service</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">books</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">new releases</a>
                    </div>
                </div>
                <div className="navbar__prime">
                    <PlayCircleFilledWhiteIcon classname='playButton' />
                    <div className="playButtonInner"></div>
                    <p>amazon prime <span>| 30-day <span>free trial</span></span></p>

                    <div class="tri"></div>
                </div>
            </div>
        </>
    )
}

export default Header
