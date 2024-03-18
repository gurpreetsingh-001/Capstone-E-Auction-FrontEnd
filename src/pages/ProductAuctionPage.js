import React, { useEffect, useState } from 'react'
import API from '../connection/connection';
import axios from 'axios';
import Header from '../components/Header'
import moment from 'moment/moment';
import { Link, useNavigate, useLocation, useParams, useAsyncError } from 'react-router-dom'
import io from 'socket.io-client';
const socket = io('http://localhost:5000')

export default function ProductAuctionPage() {
    let location = useLocation();
    const { id } = useParams();
  //  console.log(id)
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const [productdetail, setProductDetail] = useState([])
    const [AuctionBiddata, setAuctionBiddata] = useState([]);
    const [userauctiondetails, setuserAuctionDetails] = useState([]);
    const [displaydatas, setDisplayData] = useState({});
    const[updated,setUpdated]=useState(false);
    const[msg,setmsg]=useState("");
    useEffect(() => {
        async function fetchdata() {
            const token = localStorage.getItem("token");
            if (!token) {
                console.log(location.pathname);
                navigate('/signin', { replace: true, state: { redirecturl: location.pathname } })
                // state ->location path, is user is not logged in

            } else {


                const response = await axios.get(`${API}/product/viewproductbyid/${id}`, {
                    headers: { "Authorization": token }
                })
                if (response.status === 401 || response.status === 404) {
                    navigate('/signin', { replace: true, state: { redirecturl: location.pathname } })
                }

                //console.log(response.data.ResProductviewbyID)
                setProductDetail(response.data.ResProductviewbyID[0])

            }

        }
        fetchdata();
    }, [])



    function handleChange(event) {

        setAuctionBiddata((prev) => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }
    // console.log(AuctionBiddata)
    // console.log(id)

    //console.log(productdetail.productname)
    async function submitBid(event) {
        event.preventDefault()
      //  console.log(`${API}/auction/${id}`);

      console.log(AuctionBiddata.bidAmount);
      console.log(productdetail.minbid);
      if(AuctionBiddata.bidAmount < productdetail.minbid)
      {
        alert("Entered Amount is less then min bid amount");
        return
      }
        const response = await axios.post(`${API}/auction/${id}`, AuctionBiddata, {
            headers: {
                Authorization: token,
            }
        })
      //  console.log(response);
        setmsg(response.data.message)
       // console.log();
        if (response.status === 201) {

            //window.alert("Bid Successfully Submitted")
            socket.emit("BidAdded")
            
            // console.log("workingfine")
            //navigate('/')
        }
    }

    
    useEffect(() => {
        async function fetchdata1() {
            const token = localStorage.getItem("token");
           // console.log(id + "IDadasdas");

            if (!token) {
                navigate('/signin', { replace: true, state: { redirecturl: location.pathname } })

            } else {
                const response = await axios.get(`${API}/auction/details/${id}`, {
                    headers: { "Authorization": token }
                })
                //  console.log(response);
                if (response.status === 401 || response.status === 404) {
                    navigate('/signin', { replace: true, state: { redirecturl: location.pathname } })
                }

                console.log("Data UPDATED")
                setuserAuctionDetails(response.data.usersDetails)
                setDisplayData(response.data.displaydata)
                console.log(response.data.displaydata);
               

            }

        }
        fetchdata1();
    }, [id,updated]) // component update

    //console.log(userauctiondetails);


    //console.log(productdetail.productname)
    socket.on("BidInserted",(msg)=>{
        setUpdated(true)
    })

    return (
        <>
            <Header />

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
                            <span> Product Auction  </span>
                        </li>
                    </ul>
                </div>

                <div className=" bg_img hero-bg bottom_center ccc" style={{ zIndex: -550 }} ></div>
            </div>
            <section className="product-details padding-bottom mt--440 mt-lg--440 ">
                <div className="container">
                    <img src={`http://localhost:5000/products/${productdetail.prdimg}`} alt="product" style={{ width: '100%' }} />

                    {/* <div className="product-details-slider-top-wrapper">
                <div className="product-details-slider" id="sync1">
                    <div className="slide-top-item">
                        <div className="slide-inner">
                            <img src="http://localhost:5000/assets/images/product/product1.png" alt="product"/>
                        </div>
                    </div>
                   
                </div>
            </div>  */}

                    <div className="row mt-40-60-80">
                        <div className="col-lg-8">
                            <div className="product-details-content">
                                <div className="product-details-header">
                                    <h2 className="title">{productdetail.productname}</h2>
                                    <ul>
                                        <li>Category: {productdetail.category}</li>

                                    </ul>
                                </div>
                                <ul className="price-table mb-30">
                                    <li className="header">
                                        <h5 className="current">Min Bid Price</h5>
                                        <h3 className="price">₹ {productdetail.minbid}</h3>
                                    </li>
                                    <li>
                                        <span className="details">Start Date</span>
                                        <h5 className="info">{new Date(productdetail.startdate).toLocaleDateString('en-GB')}</h5>
                                    </li>

                                    <li>
                                        <span className="details">End Date</span>
                                        <h5 className="info">{new Date(productdetail.enddate).toLocaleDateString('en-GB')}</h5>
                                    </li>
                                </ul>
                                <div className="product-bid-area">
                                    <form className="product-bid-form">
                                        <div className="search-icon">
                                            <img src="http://localhost:5000/assets/images/product/search-icon.png" alt="product" />
                                        </div>
                                        <input type="text" name="bidAmount" placeholder="Enter you bid amount" onChange={handleChange} />
                                        <button type="submit" className="custom-button" onClick={submitBid}>Submit a bid</button>
                                    </form>

                                    <span>{msg}</span>


                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="product-sidebar-area">
                                <div className="product-single-sidebar mb-3">
                                    <h6 className="title">This Auction Ends in:</h6>
                                    <div className="countdown">
                                        {/* <div id="bid_counter1"></div> */}
                                    </div>
                                    <div className="side-counter-area">
                                        <div className="side-counter-item">
                                            <div className="thumb">
                                                <img src="http://localhost:5000/assets/images/product/icon1.png" alt="product" />
                                            </div>
                                            <div className="content">
                                                <h3 className="count-title1"><span className="counter1">{displaydatas.highest}</span></h3>
                                                <p>Highest Bid</p>
                                            </div>
                                        </div>
                                        
                                        <div className="side-counter-item">
                                            <div className="thumb">
                                                <img src="http://localhost:5000/assets/images/product/icon3.png" alt="product" />
                                            </div>
                                            <div className="content">
                                                <h3 className="count-title1"><span className="counter1">{displaydatas.count}</span></h3>
                                                <p>Total Bids</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#0" className="cart-link">View Shipping, Payment & Auction Policies</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-tab-menu-area mb-40-60 mt-70-100">
                    <div className="container">
                        <ul className="product-tab-menu nav nav-tabs">

                            <li>
                                <a href="#delevery" data-toggle="tab">
                                    <div className="thumb">
                                        <img src="http://localhost:5000/assets/images/product/tab2.png" alt="product" />
                                    </div>
                                    <div className="content">Delivery Options</div>
                                </a>
                            </li>
                            <li>
                                <a href="#history" className="active" data-toggle="tab">
                                    <div className="thumb">
                                        <img src="http://localhost:5000/assets/images/product/tab3.png" alt="product" />
                                    </div>
                                    <div className="content">Bid History (36)</div>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="tab-content">

                        <div className="tab-pane fade show" id="delevery">
                            <div className="shipping-wrapper">
                                <div className="item">
                                    <h5 className="title">shipping</h5>
                                    <div className="table-wrapper">
                                        <table className="shipping-table">
                                            <thead>
                                                <tr>
                                                    <th>Available delivery methods </th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Customer Pick-up (within 10 days)</td>
                                                    <td>$0.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Standard Shipping (5-7 business days)</td>
                                                    <td>Not Applicable</td>
                                                </tr>
                                                <tr>
                                                    <td>Expedited Shipping (2-4 business days)</td>
                                                    <td>Not Applicable</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="item">
                                    <h5 className="title">Notes</h5>
                                    <p>Please carefully review our shipping and returns policy before committing to a bid.
                                        From time to time, and at its sole discretion, Sbidu may change the prevailing fee structure for shipping and handling.</p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show active" id="history">
                            <div className="history-wrapper">
                                <div className="item">
                                    <h5 className="title">Bid History</h5>
                                    <div className="history-table-area">
                                        <table className="history-table">
                                            <thead>
                                                <tr>
                                                    <th>Bidder</th>
                                                    <th>date</th>
                                                    <th>time</th>
                                                    <th>unit price</th>
                                                </tr>
                                            </thead>

                                            <tbody >
                                            {userauctiondetails?.map((ele) => (

                                                
                                                    <tr key={ele.userId} >
                                                        <td data-history="bidder">
                                                            <div className="user-info">
                                                                <div className="thumb">
                                                                    <img src="http://localhost:5000/assets/images/history/01.png" alt="history" />
                                                                </div>
                                                                <div className="content">
                                                                    {ele.userName}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td data-history="date">{moment(ele.bidDateTime).format("MMM Do YYYY")} </td>
                                                        <td data-history="time">{moment(ele.bidDateTime).format('LTS')}</td>
                                                        <td data-history="unit price">{ele.bidAmount}</td>
                                                    </tr>
                                               
                                            ))
                                            }
 </tbody>
                                        </table>
                                        <div className="text-center mb-3 mt-4">
                                            <a href="#0" className="button-3">Load More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade show" id="questions">
                            <h5 className="faq-head-title">Frequently Asked Questions</h5>
                            <div className="faq-wrapper">
                                <div className="faq-item">
                                    <div className="faq-title">
                                        <img src="http://localhost:5000/assets/css/img/faq.png" alt="css" /><span className="title">How to start bidding?</span><span className="right-icon"></span>
                                    </div>
                                    <div className="faq-content">
                                        <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                    </div>
                                </div>
                                <div className="faq-item">
                                    <div className="faq-title">
                                        <img src="http://localhost:5000/assets/css/img/faq.png" alt="css" /><span className="title">Security Deposit / Bidding Power </span><span className="right-icon"></span>
                                    </div>
                                    <div className="faq-content">
                                        <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                    </div>
                                </div>
                                <div className="faq-item">
                                    <div className="faq-title">
                                        <img src="http://localhost:5000/assets/css/img/faq.png" alt="css" /><span className="title">Delivery time to the destination port </span><span className="right-icon"></span>
                                    </div>
                                    <div className="faq-content">
                                        <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                    </div>
                                </div>
                                <div className="faq-item">
                                    <div className="faq-title">
                                        <img src="http://localhost:5000/assets/css/img/faq.png" alt="css" /><span className="title">How to register to bid in an auction?</span><span className="right-icon"></span>
                                    </div>
                                    <div className="faq-content">
                                        <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                    </div>
                                </div>
                                <div className="faq-item open active">
                                    <div className="faq-title">
                                        <img src="http://localhost:5000/assets/css/img/faq.png" alt="css" /><span className="title">How will I know if my bid was successful?</span><span className="right-icon"></span>
                                    </div>
                                    <div className="faq-content">
                                        <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                    </div>
                                </div>
                                <div className="faq-item">
                                    <div className="faq-title">
                                        <img src="http://localhost:5000/assets/css/img/faq.png" alt="css" /><span className="title">What happens if I bid on the wrong lot?</span><span className="right-icon"></span>
                                    </div>
                                    <div className="faq-content">
                                        <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
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

