import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import API from '../connection/connection';

export default function AuctionProductCard({product}) {
    
    // const [imageUrl,setImageUrl]=useState("");
   
  
  return (
 <>
    {console.log(product.productname)}
    
    
    
    <div  className="col-sm-10 col-md-6">
                                    <div className="auction-item-2" data-aos="zoom-out-up" data-aos-duration="1000">
                                        <div className="auction-thumb">
                                            <img src={`http://localhost:5000/products/${product.prdimg}`} alt="car" />
                                            <Link to="#0" className="rating"><i className="far fa-star"></i></Link>
                                            <Link to="#0" className="bid"><i className="flaticon-auction"></i></Link>
                                        </div>
                                        <div className="auction-content">
                                            <h6 className="title">
                                                <Link to="#0">{product.productname} / {product.category}</Link>
                                            </h6>
                                            <div className="bid-area">
                                                <div className="bid-amount">
                                                    <div className="icon">
                                                        <i className="flaticon-auction"></i>
                                                    </div>
                                                    <div className="amount-content">
                                                        <div className="current">Min Bid</div>
                                                        <div className="amount">{product.minbid}</div>
                                                    </div>
                                                </div>
                                                <div className="bid-amount">
                                                   Start Date:{product.startdate}<br/>
                                                   End Date:{product.enddate}
                                                    
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                               
                                </>
   
  )
}
