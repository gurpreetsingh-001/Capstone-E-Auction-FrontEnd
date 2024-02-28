import React, {useContext, useEffect, useState } from 'react'
import { useNavigate,Navigate,Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export default function SidebarDashboard() {
    const navigate= useNavigate();
    
    const userCtx= useContext(UserContext)
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
                                <h5 class="title"><Link to="#0">{userCtx.username.username}</Link></h5>
                                <span class="username">{userCtx.username.email}</span>
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
