import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import API from '../connection/connection';

import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import SidebarDashboard from '../components/SidebarDashboard';
import AuctionProductCard from '../components/AuctionProductCard';
export default function ViewProduct() {
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState(null);
    const[apiresponse,setapiresponse]=useState();
    useEffect(() => {
        async function fetchdata() {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate('/signin')
            }

            const response = await axios.get(`${API}/product/viewproduct`, {
                headers: {
                    Authorization: token,
                },
            });

            if (response.status != 200) {
                navigate('/signin')

            }
            else
            {
               setProductDetails(response.data.ProdDet)
              // console.log(response);
              //  setapiresponse(response)
                
            }

            

        }
        fetchdata();
    }, [])

    // useEffect(() => {
    //     console.log(apiresponse);
    //     setProductDetails(prev=>prev.data.ProdDet)
      
    // }, [apiresponse])
    


    //  console.log(productDetails+ "product details")

    return (
        <>{ productDetails &&
            <>
            <Header />
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
                        <SidebarDashboard />
                        <div className="col-lg-8">
                            <div className="col-lg-12">
                                <div className="dash-bid-item dashboard-widget mb-4">
                                    <div className="header">
                                        <h4 className="title">View Products</h4>
                                        {/* <span className="notify"><i className="flaticon-alarm"></i> Manage Notifications</span> */}
                                    </div>

                                </div>

                                {
                                    
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="upcoming">
                                            <div className="row mb-30-none justify-content-center">
                                                {productDetails?.map((product) => (

                                                    <AuctionProductCard product={product} key={product._id} />
                                                ))}


                                            </div>
                                        </div>

                                    </div>
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </section>



</>
}  </>
    )
}
