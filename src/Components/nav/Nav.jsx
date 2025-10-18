import React from 'react'
import { FaShopify } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import "./Nav.css"
import { Link } from 'react-router-dom';


const Nav = () => {
  return (

    <>

    
    <div className="nav">
      <div className="top-nav">
        <div className="logo">
          <span>V-shop</span>
          <FaShopify />
        </div>
        <form className="search-box">
          <input type="text" name="" id="" placeholder="search itmes..." />
          <button>
            <FaSearch />
          </button>
        </form>
        <div className="cart-box">
          <IoCart />
          <span>0</span>
        </div>
      </div>

      <div className="bottom-nav">
        <Link to= "/"> <li>Home</li></Link>
          <Link to= "/Shop"> <li>Shop</li></Link>
          {/* <Link to= "/Card"> <li>Card</li></Link> */}
           <Link to= "/contect"> <li>Contect</li></Link>
      </div>
    </div>

    </>
  );
}

export default Nav