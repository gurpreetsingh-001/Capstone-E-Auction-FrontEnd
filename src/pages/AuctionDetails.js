import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import API from '../connection/connection';
import UserContext from '../contexts/UserContext'
import moment from 'moment/moment';
import { loadStripe } from "@stripe/stripe-js";

import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import SidebarDashboard from '../components/SidebarDashboard';

export default function AuctionDetails() {
    const navigate = useNavigate();
    const Uctx = useContext(UserContext)

    const [allAuctions, setAllAuctions] = useState([]);
    const [wonAuctions, setWonAuctions] = useState([]);


    const [userDetails, setuserDetails] = useState({})
    const token = localStorage.getItem("token");
    useEffect(() => {
        async function fetchdata() {

            if (!token) {
                navigate('/signin')

            } else {
                const response = await axios.get(`${API}/dashboard/`, {
                    headers: { "Authorization": token }
                })
                if (response.status != 200) {
                    navigate('/signin')
                }
                setAllAuctions(response.data.UserAuctionDetails)
                setWonAuctions(response.data.WonAuctions)

                setuserDetails(response.data.user);




            }

        }
        fetchdata();
    }, [])

    //console.log(wonAuctions);

    async function handlePay(amount, id, product) {
        const stripe = await loadStripe(
            "pk_test_51Oool4SIiKMrNAex7ioOIyx1ahoCol5DJr6SLitld717QDOafCIBEcQZiEFNpXbNloPuoVUYaHPObV1VrlajDpnG000WYrr8jJ"
        );
        const body = {
            id, //product id
            amount, // amount
            product,
        }
        console.log(body);
        const headers = {
            "Content-type": "application/json",
            "Authorization": token
        }
        const response = await fetch(
            "http://localhost:5000/api/place-order-session", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        }
        );
        const session = await response.json(); // api call jab success hoga to session milega

        const result = stripe.redirectToCheckout({
            sessionId: session.id
        })
        // if (result.error) {
        //     console.log(result.error);
        // }
        // else {
        //     console.log("payment success")
        //     // api call to a controller that will mark your payment success particular auction winner ka for product
        // }
    }

    return (
        <>

            <Header />
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
                        <SidebarDashboard />
                        <div className="col-lg-8">

                            <div className="dashboard-widget">
                                <h5 className="title mb-10">Won Auction</h5>
                                <div className="dashboard-purchasing-tabs">

                                    <div className="tab-content">
                                        <div className="tab-pane show active fade">
                                            <table className="purchasing-table">
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Bid Amount</th>
                                                        <th>Bid Date</th>
                                                        <th>Bid Time</th>
                                                        <th>Pay Now</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {wonAuctions?.map((ele) => (
                                                        <tr>


                                                            <td data-purchase="item">{ele.productid.productname}</td>
                                                            <td data-purchase="bid price">₹ {ele.bids[0].bidAmount}</td>
                                                            <td data-purchase="bid price">{moment(ele.bids[0].bidDateTime).format("MMM Do YYYY")} </td>

                                                            <td data-purchase="bid price">{moment(ele.bids[0].bidDateTime).format('LTS')}</td>

                                                            <td data-purchase="expires" >
                                                                {ele.payment ? (
                                                                    <span>Paid</span>
                                                                ) : (
                                                                    <button className='custom-button' onClick={() => handlePay(ele.bids[0].bidAmount, ele._id, ele.productid.productname)}>Pay Now</button>
                                                                )}
                                                            </td>
                                                            {/* <td data-purchase="expires" onClick={() => handlePay(ele.bids[0].bidAmount, ele._id,ele.productid.productname)}><button>PayNow</button></td> */}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dashboard-widget" style={{ marginTop: "40px" }}>
                                <h5 className="title mb-10">Participated Auction</h5>
                                <div className="dashboard-purchasing-tabs">

                                    <div className="tab-content">
                                        <div className="tab-pane show active fade">
                                            <table className="purchasing-table">
                                                <thead>
                                                    <tr>
                                                        <th>Product Name</th>
                                                        <th>Bid Amount</th>
                                                        <th>Bid Date</th>
                                                        <th>Bid Time</th>
                                                        <th>Bid Won Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {allAuctions?.map((ele) => (
                                                        <>
                                                            {console.log(ele)}
                                                            <tr>
                                                                <td >{ele.productid.productname}</td>
                                                                <td >₹ {ele.bids.find((bid) => bid.userId == userDetails._id).bidAmount}</td>
                                                                <td >{moment(ele.bids.find((bid) => bid.userId == userDetails._id).bidDateTime).format("MMM Do YYYY")} </td>
                                                                <td >{moment(ele.bids.find((bid) => bid.userId == userDetails._id).bidDateTime).format('LTS')}</td>
                                                                <td > {ele.status ? "True" : "False"}</td>

                                                            </tr>
                                                        </>
                                                    ))}
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