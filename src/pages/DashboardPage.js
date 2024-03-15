import React, { useContext,useEffect, useState } from 'react'
import Header from '../components/Header'
import API from '../connection/connection';
import UserContext from '../contexts/UserContext'

import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

import SidebarDashboard from '../components/SidebarDashboard';

export default function DashboardPage() {
 const navigate= useNavigate();
 const Uctx=useContext(UserContext)

 const [userDetails, setuserDetails] = useState({})
 const [alldetails, setallDetails] = useState({})
 

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
     setallDetails(response.data)
      setuserDetails(response.data.user)
      Uctx.setUsername(response.data.user);
    }
      
  }
  fetchdata();
 },[])
 
 
  return (
   <>

<Header/>
{/* <Dashboard user={userDetails}/> */}
<div className="hero-section style-2 pb-lg-400">
        <div className="container">
            <ul className="breadcrumb">
                <li>
                    <Link to="/">Home</Link>
                </li>
                
                <li>
                    <span>Dashboard </span>
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
                    <div className="dashboard-widget mb-40">
                        <div className="dashboard-title mb-30">
                            <h5 className="title">My Activity</h5>
                        </div>
                        <div className="row justify-content-center mb-30-none">
                            <div className="col-md-4 col-sm-6">
                                <div className="dashboard-item">
                                    <div className="thumb">
                                        <img src="http://localhost:5000/assets/images/dashboard/01.png" alt="dashboard" />
                                    </div>
                                    <div className="content">
                                        <h2 className="title">{alldetails.ActiveBids}</h2>
                                        <h6 className="info">Bids Placed</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="dashboard-item">
                                    <div className="thumb">
                                        <img src="http://localhost:5000/assets/images/dashboard/02.png" alt="dashboard" />
                                    </div>
                                    <div className="content">
                                        <h2 className="title">{alldetails.Wonbids}</h2>
                                        <h6 className="info">Won Bids</h6>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-4 col-sm-6">
                                <div className="dashboard-item">
                                    <div className="thumb">
                                        <img src="http://localhost:5000/assets/images/dashboard/03.png" alt="dashboard" />
                                    </div>
                                    <div className="content">
                                        <h2 className="title"><span className="counter">115</span></h2>
                                        <h6 className="info">Favorites</h6>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
 


   </>
  )
}
