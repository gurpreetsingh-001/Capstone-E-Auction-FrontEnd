import React, {useContext, useEffect, useState } from 'react'
import { useNavigate,Navigate,Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import API from '../connection/connection';
import axios from 'axios';

export default function SidebarDashboard() {
    const navigate= useNavigate();
    
    //const userCtx= useContext(UserContext)
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
    <div class="col-sm-10 col-md-7 col-lg-4">
                    <div class="dashboard-widget mb-30 mb-lg-0 sticky-menu">
                        <div class="user">
                            <div class="thumb-area">
                                <div class="thumb">
                                    <img src="./assets/images/dashboard/user.png" alt="user" />
                                </div>
                                <label for="profile-pic" class="profile-pic-edit"><i class="flaticon-pencil"></i></label>
                                <input type="file" id="profile-pic" class="d-none" />
                            </div>
                            <div class="content">
                                <h5 class="title"><Link to="#0">{userDetails.username}</Link></h5>
                                <span class="username">{userDetails.email}</span>
                            </div>
                        </div>
                        <ul class="dashboard-menu">
                            <li>
                            
                                <Link to="/dashboard" class="active"><i class="flaticon-dashboard"></i>Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/profile"><i class="flaticon-settings"></i>Personal Profile </Link>
                            </li>
                            <li>
                                <Link to="/addproduct"><i class="flaticon-auction"></i>Add Auction Product</Link>
                            </li>
                            <li>
                                <Link to="/viewproduct"><i class="flaticon-best-seller"></i>View Product</Link>
                            </li>
                            <li>
                                <Link to="notifications.html"><i class="flaticon-alarm"></i>My Alerts</Link>
                            </li>
                            <li>
                                <Link to="my-favorites.html"><i class="flaticon-star"></i>My Favorites</Link>
                            </li>
                            <li>
                                <Link to="referral.html"><i class="flaticon-shake-hand"></i>Referrals</Link>
                            </li>
                        </ul>
                    </div>
                </div>
    </>
  )
}
