import React, { useEffect,useState } from 'react'
import { Link,Routes, Route, Navigate, useNavigate,useLocation  } from "react-router-dom"
import axios from "axios"
import API from '../connection/connection';

export default function Header() {
    let location = useLocation();
    const[isloggedin,setIsLoggedIn]=useState(false)
    const navigate = useNavigate();
   // console.log(location)
    useEffect(() =>{
        async function fetchdata(){
            const token = localStorage.getItem("token");
            
            if(!token)
            {
                return; // Skip redirect if no token
            }
        
            try {
                const response = await axios.get(`${API}/isloggedin/`, {
                    headers: {"Authorization": token}
                });
        
                if(response.status === 200)
                {
                    setIsLoggedIn(true)
                }
            } catch (error) {
                console.log(error);
            }
        }
        
        fetchdata();
        
      },[])

    function handleLogout(){
        localStorage.removeItem("token");
        navigate('/signin')
    }
  return (
   <>
   <header>
        <div className={` ${location.pathname=="/dashboard"?" header-top":"header-top"} `}>
            <div className="container">
                {/* <div className="header-top-wrapper">
                    <ul className="customer-support">
                        <li className="cmn-support-text">
                            <a href="#0" className="mr-3"><i className="fas fa-phone-alt"></i><span className="ml-2 d-none d-sm-inline-block">Customer Support</span></a>
                        </li>
                      
                    </ul>
                   
                </div> */}
            </div>
        </div>
        <div className="header-bottom">
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo">
                        <Link to="/">
                            <img src="http://localhost:5000/assets/images/logo/logo.png" alt="logo" />
                        </Link>
                    </div>
                    <ul className="menu ml-auto">
                        <li>
                            <Link to="/">Home</Link>
                            
                        </li>
                        {
                             !isloggedin ?
                            <>
                        <li>
                            <Link to="/signin">Signin</Link>
                        
                            
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        
                            
                        </li>
                        </> : 
                       <> <li>
                            
                            <Link to="/dashboard">My Account</Link>
                        
                            
                        </li>
                                 <li>
                        <span className='logout' onClick={handleLogout}>Logout</span>    
                    </li></>
                        }
                        
                      
                    </ul>
                    <form className="search-form">
                        {/* <input type="text" placeholder="Search for brand, model...."/>
                        <button type="submit"><i className="fas fa-search"></i></button> */}
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
