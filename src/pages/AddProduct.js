import React, { useState } from 'react'
import Header from '../components/Header'
import {useNavigate,useLocation,Link  } from 'react-router-dom';
import SidebarDashboard from '../components/SidebarDashboard';
import API from '../connection/connection'
import axios from "axios"


export default function AddProduct() {
  const[productData,setProductData]=useState({});
  const navigate =useNavigate();
  function handleChange(event){
    setProductData((prev)=>(
       {
           ...prev,
           [event.target.name]:event.target.value
       }
    ))
   }
   async function PopulatetoDB(event){
    event.preventDefault()
     const token = localStorage.getItem("token");
     
             if(!token)
           {
             navigate('/signin')
           }
          
           const response = await axios.post(`${API}/product/addproduct`, productData, {
            headers: {
              Authorization: token,
            },
          });
         
           if(response.status!=200)
           {
             navigate('/signin')
           }
           navigate('/dashboard')
           //setuserDetails(response.data.user)
       }
       
    
   
 
  return (
    <>
    <Header/>
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
                    <span>Add Product  </span>
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
                    <div className="account-wrapper ">
                        <div class="col-12">

                        <div className="section-header" >
                        <h2 className="title mt-20">Add Product</h2>
                        <p>We're happy you're here!</p>
                    </div>
                        <form className="login-form" onSubmit={PopulatetoDB}>
                    <div className="form-group mb-30">
                            <label for="category"><i className="far fa-user"></i></label>
                            <input type="text" id="category" required name="category" placeholder="Enter Category" onChange={handleChange} />
                        </div>
                        <div className="form-group mb-30">
                            <label for="productname"><i className="far fa-user"></i></label>
                            <input type="text" id="productname" required name="productname" placeholder="Enter Product Name" onChange={handleChange} />
                        </div>
                        <div className="form-group mb-30">
                            <label for="minbid"><i className="far fa-user"></i></label>
                            <input type="text" id="minbid" required name="minbid" placeholder="Enter Minimum Bid" onChange={handleChange} />
                        </div>
                        <div className="form-group mb-30">
                            Enter Start Date
                            <label for="startdate"><i className="far fa-user"></i></label>
                            <input type="date" id="startdate" required name="startdate" placeholder="Enter Start Date" onChange={handleChange} />
                        </div>
                        <div className="form-group mb-30">
                        Enter End Date
                            <label for="enddate"><i className="far fa-envelope"></i></label>
                            <input type="date" id="enddate" required name ="enddate" placeholder="Enter End Date" onChange={handleChange} />
                        </div>
                        <div className="form-group mb-30">
                            <label for="prdimg"><i className="fas fa-lock"></i></label>
                            <input type="text" id="prdimg" required name="prdimg" placeholder="Enter Product Image" onChange={handleChange} />
                            
                        </div>
                        {/* <div className="form-group checkgroup mb-30">
                            <input type="checkbox" name="terms" id="check" /><label for="check">I agree with Terms of Use</label>
                        </div> */}
                        <div className="form-group mb-0">
                            <button type="submit" className="custom-button mb-40" >Submit</button>
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