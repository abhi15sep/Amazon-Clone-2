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
                        <p>deliver&nbsp;to</p>
                        <p>united&nbsp;kingdom</p>
                    </div>
                </div>
                <div className="navbar__nav">
                    <div className="navbar__option">
                    <Link to='/home'>today's&nbsp;deals</Link>
                    </div>
                    <div className="navbar__option">
                        <Link to='/books'>books</Link>
                    </div>
                    <div className="navbar__option">
                        <a href="">clothing</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">computers&nbsp;&&nbsp;accessories</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">home&nbsp;&&nbsp;kitchen</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">garden&nbsp;&&nbsp;outdoor</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">baby&nbsp;products</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">grocery</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">health&nbsp;&&nbsp;personal&nbsp;care</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">luggage</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">shoes&nbsp;&&nbsp;bags</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">sports&nbsp;&&nbsp;outdoor</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">stationairy&nbsp;&&nbsp;office</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">toys&nbsp;&&nbsp;games</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">watches</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">lighting</a>
                    </div>
                    <div className="navbar__option">
                        <a href="">dvd&nbsp;&&nbsp;blu&#8209;ray</a>
                    </div>

                </div>
                <div className="navbar__prime">
                    <PlayCircleFilledWhiteIcon classname='playButton' />
                    <div className="playButtonInner"></div>
                    <p>amazon&nbsp;prime&nbsp;<span>|&nbsp;30&#8209;day&nbsp;<span>free&nbsp;trial</span></span></p>

                    <div class="tri"></div>
                </div>
            </div>
        </>
    )
}

export default Header
