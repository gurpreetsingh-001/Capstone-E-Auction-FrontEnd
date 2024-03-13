import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import API from '../connection/connection';
import {useNavigate,useLocation,Link  } from 'react-router-dom';
import axios from 'axios';
import SidebarDashboard from '../components/SidebarDashboard';

export default function PasswordUpdate() {
    const navigate= useNavigate();
    const [userDetails, setuserDetails] = useState({})
  
   const token = localStorage.getItem("token");
    useEffect(() =>{
     async function fetchdata(){
      const token = localStorage.getItem("token");
          if(!token)
        {
          navigate('/signin')
          
        }else{
          const response  =await axios.get(`${API}/dashboard/`,{
          headers:{"Authorization":token}
        })
        if(response.status!=200)
        {
          navigate('/signin')
        }
        setuserDetails(response.data.user)
       }
    }
    fetchdata();
   },[])
   

    
   function handleChange(event){
     
     
     setuserDetails((prev)=>(
        {
            ...prev,
            [event.target.name]:event.target.value
        }
     ))
    }
    async function UpdatePassword(event){
     event.preventDefault()
   //  console.log(userDetails);
     const response =await axios.post(`${API}/user/update`,userDetails, {
       headers: {
         Authorization: token,
       },
     });
     //console.log(response);
     if(response.status===200){
         
        navigate('/profile')
        alert("Profile Updated Successfully")
     }
   }
  return (
    <>

<Header/>
{/* <Profile user={userDetails}/> */}
<div className="hero-section style-2 pb-lg-400">
        <div className="container">
            <ul className="breadcrumb">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <span> Password Update  </span>
                </li>
            </ul>
        </div>
        <div className=" bg_img hero-bg bottom_center ccc" ></div>
    </div>

    <section className="dashboard-section padding-bottom mt--240 mt-lg--325 pos-rel">
        <div className="container">
            <div className="row justify-content-center">
                <SidebarDashboard/>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-12">
                            <div className="dash-pro-item mb-30 dashboard-widget">
                                <div className="header">
                                    <h4 className="title">Password Update</h4>
                                  
                                </div>
                               
                                <form className="login-form">
                    <div className="form-group mb-30">
                            <label htmlFor="password"><i className="far fa-user"></i></label>
                            <input type="password" id="password" name="password" placeholder="Enter New Password"  onChange={handleChange} />
                        </div>
                        
                        <div className="form-group mb-0">
                            <button type="submit" className="custom-button" onClick={UpdatePassword}>Update</button>
                        </div>
                    </form>
                                   
                            </div>
                        </div>
                        
                        
                        </div>
                        </div>
            </div>
        </div>
    </section>




   </>

  )
}
