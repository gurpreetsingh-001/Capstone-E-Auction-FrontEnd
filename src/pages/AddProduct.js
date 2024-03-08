import React, { useState } from 'react'
import Header from '../components/Header'
import {useNavigate,useLocation,Link  } from 'react-router-dom';
import SidebarDashboard from '../components/SidebarDashboard';
import API from '../connection/connection'
import axios from "axios"


export default function AddProduct() {
  const[productData,setProductData]=useState({});
  const[imageData,setImageData]=useState(null);
  const navigate =useNavigate();
  function handleChange(event){
    setProductData((prev)=>(
       {
           ...prev,
           [event.target.name]:event.target.value
       }
    ))
   }
   function handlefile(event){
    const imgfile = event.target.files[0];
    setImageData(imgfile)
   }
   async function PopulatetoDB(event){
    event.preventDefault()
     const token = localStorage.getItem("token");
     
             if(!token)
           {
             navigate('/signin')
           }
          const formdata = new FormData();
       //   console.log(productData + "prodt data");
          formdata.append("prdimg",imageData)
          Object.entries(productData)  //similar to map
          .forEach(([key,value])=>{
        //    console.log(key,value)
            formdata.append(key,value)
          })
        // formdata.append("category",productData.category)
        //   formdata.append("formproductname",productData.formproductname)
        //   formdata.append("minbid",productData.minbid)
        //   formdata.append("startdate",productData.startdate)
        //   formdata.append("enddate",productData.enddate)
       //   console.log(formdata + "formdata");
           const response = await axios.post(`${API}/product/addproduct`, formdata, {
            headers: {
              Authorization: token,
              'Content-Type': 'multipart/form-data',
            }
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
                    <span>Add Product  </span>
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
                    <div className="account-wrapper ">
                        <div className="col-12">

                        <div className="section-header" >
                        <h2 className="title mt-20">Add Product</h2>
                        <p>We're happy you're here!</p>
                    </div>
                        <form className="login-form" onSubmit={PopulatetoDB}>
                    <div className="form-group mb-30">
                            <label htmlFor="category"><i className="far fa-user"></i></label>
                            <input type="text" id="category" required name="category" placeholder="Enter Category" onChange={handleChange} />
                        </div>
                        <div className="form-group mb-30">
                            <label htmlFor="productname"><i className="far fa-user"></i></label>
                            <input type="text" id="productname" required name="productname" placeholder="Enter Product Name" onChange={handleChange} />
                        </div>
                        <div className="form-group mb-30">
                            <label htmlFor="minbid"><i className="far fa-user"></i></label>
                            <input type="text" id="minbid" required name="minbid" placeholder="Enter Minimum Bid" onChange={handleChange} />
                        </div>
                        <div className="form-group mb-30">
                            Enter Start Date
                            <label htmlFor="startdate"><i className="far fa-user"></i></label>
                            <input type="date" id="startdate" required name="startdate" placeholder="Enter Start Date" onChange={handleChange} />
                        </div>
                        <div className="form-group mb-30">
                        Enter End Date
                            <label htmlFor="enddate"><i className="far fa-envelope"></i></label>
                            <input type="date" id="enddate" required name ="enddate" placeholder="Enter End Date" onChange={handleChange} />
                        </div>
                        <div className="form-group mb-30">
                            <label htmlFor="prdimg"><i className="fas fa-lock"></i></label>
                            <input type="file" id="prdimg" name="prdimg" required  placeholder="Enter Product Image" onChange={handlefile} />
                            
                        </div>
                        {/* <div className="form-group checkgroup mb-30">
                            <input type="checkbox" name="terms" id="check" /><label htmlFor="check">I agree with Terms of Use</label>
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
