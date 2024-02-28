import React from 'react'
import { Link,Routes, Route, Navigate, useNavigate,useLocation  } from "react-router-dom"

export default function Header() {
    let location = useLocation();
    const navigate = useNavigate();
    console.log(location)
    function handleLogout(){
        localStorage.removeItem("token");
        navigate('/signin')
    }
  return (
   <>
   <header>
        <div className={` ${location.pathname=="/dashboard"?" header-top":"header-top"} `}>
            <div className="container">
                <div className="header-top-wrapper">
                    <ul className="customer-support">
                        <li className="cmn-support-text">
                            <a href="#0" className="mr-3"><i className="fas fa-phone-alt"></i><span className="ml-2 d-none d-sm-inline-block">Customer Support</span></a>
                        </li>
                        <li className="customer-cupport-lang">
                            <i className="fas fa-globe"></i>
                            <select name="language" className="select-bar">
                                <option value="en">En</option>
                                <option value="Bn">Bn</option>
                                <option value="Rs">Rs</option>
                                <option value="Us">Us</option>
                                <option value="Pk">Pk</option>
                                <option value="Arg">Arg</option>
                            </select>
                        </li>
                    </ul>
                    <ul className="cart-button-area">
                        <li>
                            <Link to="#0" className="cart-button"><i className="flaticon-shopping-basket"></i><span className="amount">08</span></Link>
                        </li>                        
                        <li>
                            <Link to="/signin" className="user-button"><i className="flaticon-user"></i></Link>
                        </li>                        
                    </ul>
                </div>
            </div>
        </div>
        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo">
                        <Link to="/">
                            <img src="./assets/images/logo/logo.png" alt="logo" />
                        </Link>
                    </div>
                    <ul className="menu ml-auto">
                        <li>
                            <Link to="/">Home</Link>
                            
                        </li>
                        {
                            location.pathname == "/"?
                            <>
                        <li>
                            <Link to="/signin">Signin</Link>
                        
                            
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        
                            
                        </li>
                        </> : 
                        <li>

                        <button onClick={handleLogout}>Logout</button>    
                    </li>
                        }
                        
                        {/* <li>
                            <a href="./product.html">Auction</a>
                        </li>
                        <li>
                            <a href="#0">Pages</a>
                            <ul className="submenu">
                                <li>
                                    <a href="#0">Product</a>
                                    <ul className="submenu">
                                        <li>
                                            <a href="./product.html">Product Page 1</a>
                                        </li>
                                        <li>
                                            <a href="./product-2.html">Product Page 2</a>
                                        </li>
                                        <li>
                                            <a href="./product-details.html">Product Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#0">My Account</a>
                                    <ul className="submenu">
                                        <li>
                                            <a href="./sign-up.html">Sign Up</a>
                                        </li>
                                        <li>
                                            <a href="./sign-in.html">Sign In</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#0">Dashboard</a>
                                    <ul className="submenu">
                                        <li>
                                            <a href="./dashboard.html">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="./profile.html">Personal Profile</a>
                                        </li>
                                        <li>
                                            <a href="./my-bid.html">My Bids</a>
                                        </li>
                                        <li>
                                            <a href="./winning-bids.html">Winning Bids</a>
                                        </li>
                                        <li>
                                            <a href="./notifications.html">My Alert</a>
                                        </li>
                                        <li>
                                            <a href="./my-favorites.html">My Favorites</a>
                                        </li>
                                        <li>
                                            <a href="./referral.html">Referrals</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="./about.html">About Us</a>
                                </li>
                                <li>
                                    <a href="./faqs.html">Faqs</a>
                                </li>
                                <li>
                                    <a href="./error.html">404 Error</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="./contact.html">Contact</a>
                        </li> */}
                    </ul>
                    <form className="search-form">
                        <input type="text" placeholder="Search for brand, model...."/>
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                    <div className="search-bar d-md-none">
                        <Link to="/"><i className="fas fa-search"></i></Link>
                    </div>
                    <div className="header-bar d-lg-none">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </header>
   </>
  )
}
