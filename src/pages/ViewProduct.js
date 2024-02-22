import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import API from '../connection/connection';

import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

import SidebarDashboard from '../components/SidebarDashboard';
export default function ViewProduct() {
    const navigate =useNavigate();
    const[productDetails,setProductDetails]=useState();
    useEffect(() =>{
        async function fetchdata(){
        const token = localStorage.getItem("token");
            if(!token)
          {
            navigate('/signin')
          }
         
          const response = await axios.get(`${API}/product/viewproduct`, {
           headers: {
             Authorization: token,
           },
         });
        
          if(response.status!=200)
          {
            navigate('/signin')
          
        }
        console.log(response.data);
          console.log(response.data.ProdDet);
         setProductDetails(response.data.ProdDet)

       }
       fetchdata();
      },[])
      
      
      
    //  console.log(productDetails+ "product details")
      
  return (
    <>
    <Header/>

    {productDetails?.map((product) => (
        <div >
            <p>Product Name: {product.category}</p>
            <p>Price: {product.productname}</p>
            {/* Add other fields as needed */}
        </div>
    ))}
    </>
  )
}
