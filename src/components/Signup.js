import React, { useState } from 'react'
import { Link ,useNavigate} from "react-router-dom"
import API from '../connection/connection'
import axios from "axios"


export default function Signup() {
    const[registerdata,setRegisterData]=useState({});
  const navigate =useNavigate();
  function handleChange(event){
    setRegisterData((prev)=>(
       {
           ...prev,
           [event.target.name]:event.target.value
       }
    ))
   }
   async function PopulatetoDB(event){
    event.preventDefault()
    const response =await axios.post(`${API}/user/register`,registerdata)
    console.log(response);
    if(response.status===200){
        
       navigate('/')
    }
 }
  return (
    <>
    {/* <section className="account-section padding-bottom"> */}
    <section className="account-section">
        <div className="container">
            {/* <div className="account-wrapper mt--100 mt-lg--440"> */}
            <div className="account-wrapper ">
                <div className="left-side">
                    {/* <div className="section-header" data-aos="zoom-out-down" data-aos-duration="1200"> */}
                    <div className="section-header" >
                        <h2 className="title">SIGN UP</h2>
                        <p>We're happy you're here!</p>
                    </div>
                   
                    <form className="login-form">
                    <div className="form-group mb-30">
                            <label htmlFor="login-username"><i className="far fa-user"></i></label>
                            <input type="text" id="username" name="username" placeholder="Username" onChange={handleChange} />
                        </div>
                        <div className="form-group mb-30">
                            <label htmlFor="login-mobile"><i className="far fa-phone"></i></label>
                            <input type="text" id="mobile" name="mobile" placeholder="Mobile" onChange={handleChange} />
                        </div>
                        <div className="form-group mb-30">
                            <label htmlFor="login-email"><i className="far fa-envelope"></i></label>
                            <input type="text" id="email" name ="email" placeholder="Email Address" onChange={handleChange} />
                        </div>
                        <div className="form-group mb-30">
                            <label htmlFor="login-pass"><i className="fas fa-lock"></i></label>
                            <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} />
                            <span className="pass-type"><i className="fas fa-eye"></i></span>
                        </div>
                        {/* <div className="form-group checkgroup mb-30">
                            <input type="checkbox" name="terms" id="check" /><label htmlFor="check">I agree with Terms of Use</label>
                        </div> */}
                        <div className="form-group mb-0">
                            <button type="submit" className="custom-button" onClick={PopulatetoDB}>Register</button>
                        </div>
                    </form>
                </div>
                <div className="right-side cl-white">
                    <div className="section-header mb-0">
                        <h3 className="title mt-0">ALREADY HAVE AN ACCOUNT?</h3>
                        <p>Log in and go to your Dashboard.</p>
                        <Link to ="/signin" className="custom-button transparent">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}
