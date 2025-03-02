import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {IoSearch} from 'react-icons/io5'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {FaShoppingCart} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="navbar">
        <Link to={"/"}>
          <img 
          src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg'
          alt='logo'
          className='navbar-logo'
          />
        </Link>

        <div className="navbar-search">
          <input type="text" placeholder='Search for Products, brands and more' className='navbar-searchbox' />
          <button className='searchbtn'>
            <IoSearch/>
          </button>

          <button className='navbar-btn'>Login</button>

          <div className="navbar-bcs">
            <h3>Beacame a seller</h3>
          </div>

          <div className="navbar-more">
            <h3>
              More <i className="moredown">
                <MdKeyboardArrowDown />
                </i>
            </h3>
          </div>

          <div className="navbar-cart">
            <div className="cart-item">
              <FaShoppingCart />
            </div>
            <Link to={'/cart'} className='cart'>Cart</Link>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar