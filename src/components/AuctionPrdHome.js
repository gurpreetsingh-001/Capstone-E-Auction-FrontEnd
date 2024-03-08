import React, { useEffect, useState } from 'react'

import API from '../connection/connection';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import AuctionProductCard from './AuctionProductCard';

export default function AuctionPrdHome() {
    const navigate =useNavigate();
    const[productDetails,setProductDetails]=useState();
    useEffect(() =>{
        async function fetchdata(){
        
         
          const response = await axios.get(`${API}/product/viewallproducts`);
        console.log(response.data)
         setProductDetails(response.data.ProdDet)

       }
       fetchdata();
      },[])
      
    
  return (
   <>
    <section className="car-auction-section padding-bottom padding-top pos-rel oh">
            <div className="car-bg"><img src="http://localhost:5000/assets/images/auction/car/car-bg.png" alt="car" /></div>
            <div className="container">
                <div className="section-header-3">
                    <div className="left">
                        <div className="thumb">
                            <img src="http://localhost:5000/assets/images/header-icons/car-1.png" alt="header-icons" />
                        </div>
                        <div className="title-area">
                            <h2 className="title">Auction Products</h2>
                            <p>Live Auction Products</p>
                        </div>
                    </div>
                    {/* <Link to="#0" className="normal-button">View All</Link> */}
                </div>
                <div className="row justify-content-center mb-30-none">
                   
                {productDetails?.map((product) => (
                    
                    
                     <div className="col-sm-10 col-md-6 col-lg-4" key={product._id}>
                        <div className="auction-item-2" >
                            <div className="auction-thumb">
                                <Link to={`/productauction/${product._id}`}><img src={`http://localhost:5000/products/${product.prdimg}`} alt="car" /></Link>
                                <Link to={`/productauction/${product._id}`} className="rating"><i className="far fa-star"></i></Link>
                                <Link to={`/productauction/${product._id}`} className="bid"><i className="flaticon-auction"></i></Link>
                            </div>
                            <div className="auction-content">
                                <h6 className="title">
                                    <Link to="./product-details.html">{product.productname} / {product.category}</Link>
                                </h6>
                                <div className="bid-area">
                                    <div className="bid-amount">
                                        <div className="icon">
                                            <i className="flaticon-auction"></i>
                                        </div>
                                        <div className="amount-content">
                                            <div className="current">Min Bid</div>
                                            <div className="amount">₹ {product.minbid}</div>
                                        </div>
                                    </div>
                                    <div className="bid-amount">
                                    Start Date: &nbsp;{new Date(product.startdate).toLocaleDateString('en-GB')}<br/>
                                                   End Date: &nbsp;{new Date(product.enddate).toLocaleDateString('en-GB')}
                                        {/* <div className="icon">
                                            <i className="flaticon-money"></i>
                                        </div> */}
                                        {/* <div className="amount-content">
                                            <div className="current">Buy Now</div>
                                            <div className="amount">$5,00.00</div>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <div className="countdown-area">
                                    <div className="countdown">
                                        <div id="bid_counter27"></div>
                                    </div>
                                    <span className="total-bids">30 Bids</span>
                                </div> */}
                                <div className="text-center">
                                <Link to={`/productauction/${product._id}`} className="custom-button">Submit a bid</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    ))}
                    
                </div>
            </div>
        </section>
   </>
  )
}
