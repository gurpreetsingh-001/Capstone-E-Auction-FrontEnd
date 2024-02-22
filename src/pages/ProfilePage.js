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
<div class="hero-section style-2 pb-lg-400">
        <div class="container">
            <ul class="breadcrumb">
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
        <div class=" bg_img hero-bg bottom_center ccc" ></div>
    </div>

    <section class="dashboard-section padding-bottom mt--240 mt-lg--325 pos-rel">
        <div class="container">
            <div class="row justify-content-center">
                <SidebarDashboard/>
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-12">
                            <div class="dash-pro-item mb-30 dashboard-widget">
                                <div class="header">
                                    <h4 class="title">Personal Details</h4>
                                    <span class="edit"><i class="flaticon-edit"></i> Edit</span>
                                </div>
                                <ul class="dash-pro-body">
                                    <li>
                                        <div class="info-name">Name</div>
                                        <div class="info-value">{userDetails.username}</div>
                                    </li>
                                    <li>
                                        <div class="info-name">Email</div>
                                        <div class="info-value">{userDetails.email}</div>
                                    </li>
                                    <li>
                                        <div class="info-name">Mobile</div>
                                        <div class="info-value">{userDetails.mobile}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-12">
                            <div class="dash-pro-item dashboard-widget">
                                <div class="header">
                                    <h4 class="title">Security</h4>
                                    <span class="edit"><i class="flaticon-edit"></i> Edit</span>
                                </div>
                                <ul class="dash-pro-body">
                                    <li>
                                        <div class="info-name">Password</div>
                                        <div class="info-value">xxxxxxxxxxxxxxxx</div>
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
