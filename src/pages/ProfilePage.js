import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import API from '../connection/connection';
import {useNavigate,useLocation,Link  } from 'react-router-dom';
import axios from 'axios';

import SidebarDashboard from '../components/SidebarDashboard';

export default function ProfilePage() {
 const navigate= useNavigate();
 const [userDetails, setuserDetails] = useState({})
 
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
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <span> Profile  </span>
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
                                    <h4 className="title">Personal Details</h4>
                                   <Link to ="/profileupdate"> <span className="edit"><i className="flaticon-edit"></i> Edit</span></Link>
                                </div>
                                <ul className="dash-pro-body">
                                    <li>
                                        <div className="info-name">Name</div>
                                        <div className="info-value">{userDetails.username}</div>
                                    </li>
                                    <li>
                                        <div className="info-name">Email</div>
                                        <div className="info-value">{userDetails.email}</div>
                                    </li>
                                    <li>
                                        <div className="info-name">Mobile</div>
                                        <div className="info-value">{userDetails.mobile}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-12">
                            <div className="dash-pro-item dashboard-widget">
                                <div className="header">
                                    <h4 className="title">Security</h4>
                                    <Link to ="/passwordupdate"> <span className="edit"><i className="flaticon-edit"></i> Edit</span></Link>
                                </div>
                                <ul className="dash-pro-body">
                                    <li>
                                        <div className="info-name">Password</div>
                                        <div className="info-value">xxxxxxxxxxxxxxxx</div>
                                    </li>
                                </ul>
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
