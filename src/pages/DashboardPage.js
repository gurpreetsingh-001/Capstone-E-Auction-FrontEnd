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
 
//  useEffect( async() => {
//   const token = localStorage.getItem("token");
  
//   if(!token)
//   {
//     navigate('/signin')
//   }

//   const response  =await axios.get(`${API}/dashboard/`,{
//     headers:{"Authorization":token}
//   })
//   if(response.status!=200)
//   {
//     navigate('/signin')
//   }
//   setuserDetails(response.data.user)
//   return () => {}
//   }, [])
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
                                        <h2 className="title"><span className="counter">80</span></h2>
                                        <h6 className="info">Active Bids</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="dashboard-item">
                                    <div className="thumb">
                                        <img src="http://localhost:5000/assets/images/dashboard/02.png" alt="dashboard" />
                                    </div>
                                    <div className="content">
                                        <h2 className="title"><span className="counter">15</span></h2>
                                        <h6 className="info">Items Won</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="dashboard-item">
                                    <div className="thumb">
                                        <img src="http://localhost:5000/assets/images/dashboard/03.png" alt="dashboard" />
                                    </div>
                                    <div className="content">
                                        <h2 className="title"><span className="counter">115</span></h2>
                                        <h6 className="info">Favorites</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-widget">
                        <h5 className="title mb-10">Purchasing</h5>
                        <div className="dashboard-purchasing-tabs">
                            <ul className="nav-tabs nav">
                                <li>
                                    <Link to="#current" className="active" data-toggle="tab">Current</Link>
                                </li>
                                <li>
                                    <Link to="#pending" data-toggle="tab">Pending</Link>
                                </li>
                                <li>
                                    <Link to="#history" data-toggle="tab">History</Link>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane show active fade" id="current">
                                    <table className="purchasing-table">
                                        <thead>
                                            <tr>
                                            <th>Item</th>
                                            <th>Bid Price</th>
                                            <th>Highest Bid</th>
                                            <th>Lowest Bid</th>
                                            <th>Expires</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-purchase="item">2018 Hyundai Sonata</td>
                                                <td data-purchase="bid price">$1,775.00</td>
                                                <td data-purchase="highest bid">$1,775.00</td>
                                                <td data-purchase="lowest bid">$1,400.00</td>
                                                <td data-purchase="expires">7/2/2024</td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                                <div className="tab-pane show fade" id="pending">
                                    <table className="purchasing-table">
                                        <thead>
                                            <tr>
                                            <th>Item</th>
                                            <th>Bid Price</th>
                                            <th>Highest Bid</th>
                                            <th>Lowest Bid</th>
                                            <th>Expires</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-purchase="item">2018 Hyundai Sonata</td>
                                                <td data-purchase="bid price">$1,775.00</td>
                                                <td data-purchase="highest bid">$1,775.00</td>
                                                <td data-purchase="lowest bid">$1,400.00</td>
                                                <td data-purchase="expires">7/2/2024</td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                                <div className="tab-pane show fade" id="history">
                                    <table className="purchasing-table">
                                        <thead>
                                            <tr>
                                            <th>Item</th>
                                            <th>Bid Price</th>
                                            <th>Highest Bid</th>
                                            <th>Lowest Bid</th>
                                            <th>Expires</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-purchase="item">2018 Hyundai Sonata</td>
                                                <td data-purchase="bid price">$1,775.00</td>
                                                <td data-purchase="highest bid">$1,775.00</td>
                                                <td data-purchase="lowest bid">$1,400.00</td>
                                                <td data-purchase="expires">7/2/2024</td>
                                            </tr>
                                          
                                        </tbody>
                                    </table>
                                </div>
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
