import React from 'react'
import Header from '../components/Header'
import { Link, useParams} from 'react-router-dom'
export default function Temp() {
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
                        <span> Product Auction  </span>
                    </li>
                </ul>
            </div>
            <div className=" bg_img hero-bg bottom_center ccc" ></div>
        </div>
        <section className="product-details padding-bottom mt--440 mt-lg--440 ">
            <div className="container">
                <div className="product-details-slider-top-wrapper">
                    <div className="product-details-slider owl-theme owl-carousel" id="sync1">
                        <div className="slide-top-item">
                            <div className="slide-inner">
                                <img src="http://localhost:5000/assets/images/product/product1.png" alt="product"/>
                            </div>
                        </div>
                       
                    </div>
                </div>
                
                <div className="row mt-40-60-80">
                    <div className="col-lg-8">
                        <div className="product-details-content">
                            <div className="product-details-header">
                                <h2 className="title">The Breeze Zodiac IX</h2>
                                <ul>
                                    <li>Listing ID: 14076242</li>
                                    <li>Item #: 7300-3356862</li>
                                </ul>
                            </div>
                            <ul className="price-table mb-30">
                                <li className="header">
                                    <h5 className="current">Current Price</h5>
                                    <h3 className="price">US $700.00</h3>
                                </li>
                                <li>
                                    <span className="details">Buyer's Premium</span>
                                    <h5 className="info">10.00%</h5>
                                </li>
                                <li>
                                    <span className="details">Bid Increment (US)</span>
                                    <h5 className="info">$50.00</h5>
                                </li>
                            </ul>
                            <div className="product-bid-area">
                                <form className="product-bid-form">
                                    <div className="search-icon">
                                        <img src="http://localhost:5000/assets/images/product/search-icon.png" alt="product"/>
                                    </div>
                                    <input type="text" placeholder="Enter you bid amount"/>
                                    <button type="submit" className="custom-button">Submit a bid</button>
                                </form>
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
                                            <img src="http://localhost:5000/assets/images/product/icon1.png" alt="product"/>
                                        </div>
                                        <div className="content">
                                            <h3 className="count-title1"><span className="counter1">61</span></h3>
                                            <p>Active Bidders</p>
                                        </div>
                                    </div>
                                    <div className="side-counter-item">
                                        <div className="thumb">
                                            <img src="http://localhost:5000/assets/images/product/icon2.png" alt="product"/>
                                        </div>
                                        <div className="content">
                                            <h3 className="count-title1"><span className="counter1">203</span></h3>
                                            <p>Watching</p>
                                        </div>
                                    </div>
                                    <div className="side-counter-item">
                                        <div className="thumb">
                                            <img src="http://localhost:5000/assets/images/product/icon3.png" alt="product"/>
                                        </div>
                                        <div className="content">
                                            <h3 className="count-title1"><span className="counter1">82</span></h3>
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
                            <a href="#delevery"  data-toggle="tab">
                                <div className="thumb">
                                    <img src="http://localhost:5000/assets/images/product/tab2.png" alt="product"/>
                                </div>
                                <div className="content">Delivery Options</div>
                            </a>
                        </li>
                        <li>
                            <a href="#history"  className="active"  data-toggle="tab">
                                <div className="thumb">
                                    <img src="http://localhost:5000/assets/images/product/tab3.png" alt="product"/>
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
                                        <tbody>
                                            <tr>
                                                <td data-history="bidder">
                                                    <div className="user-info">
                                                        <div className="thumb">
                                                            <img src="http://localhost:5000/assets/images/history/01.png" alt="history"/>
                                                        </div>
                                                        <div className="content">
                                                            Moses Watts
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-history="date">06/16/2024</td>
                                                <td data-history="time">02:45:25 PM</td>
                                                <td data-history="unit price">$900.00</td>
                                            </tr>
                                            <tr>
                                                <td data-history="bidder">
                                                    <div className="user-info">
                                                        <div className="thumb">
                                                            <img src="http://localhost:5000/assets/images/history/01.png" alt="history"/>
                                                        </div>
                                                        <div className="content">
                                                            Pat Powell
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-history="date">06/16/2024</td>
                                                <td data-history="time">02:45:25 PM</td>
                                                <td data-history="unit price">$900.00</td>
                                            </tr>
                                      
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
                                        <img src="http://localhost:5000/assets/css/img/faq.png" alt="css"/><span className="title">How to start bidding?</span><span className="right-icon"></span>
                                    </div>
                                    <div className="faq-content">
                                        <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                    </div>
                                </div>
                                <div className="faq-item">
                                    <div className="faq-title">
                                        <img src="http://localhost:5000/assets/css/img/faq.png" alt="css"/><span className="title">Security Deposit / Bidding Power </span><span className="right-icon"></span>
                                    </div>
                                    <div className="faq-content">
                                        <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                    </div>
                                </div>
                                <div className="faq-item">
                                    <div className="faq-title">
                                        <img src="http://localhost:5000/assets/css/img/faq.png" alt="css"/><span className="title">Delivery time to the destination port </span><span className="right-icon"></span>
                                    </div>
                                    <div className="faq-content">
                                        <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                    </div>
                                </div>
                                <div className="faq-item">
                                    <div className="faq-title">
                                        <img src="http://localhost:5000/assets/css/img/faq.png" alt="css"/><span className="title">How to register to bid in an auction?</span><span className="right-icon"></span>
                                    </div>
                                    <div className="faq-content">
                                        <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                    </div>
                                </div>
                                <div className="faq-item open active">
                                    <div className="faq-title">
                                        <img src="http://localhost:5000/assets/css/img/faq.png" alt="css"/><span className="title">How will I know if my bid was successful?</span><span className="right-icon"></span>
                                    </div>
                                    <div className="faq-content">
                                        <p>All successful bidders can confirm their winning bid by checking the “Sbidu”. In addition, all successful bidders will receive an email notifying them of their winning bid after the auction closes.</p>
                                    </div>
                                </div>
                                <div className="faq-item">
                                    <div className="faq-title">
                                        <img src="http://localhost:5000/assets/css/img/faq.png" alt="css"/><span className="title">What happens if I bid on the wrong lot?</span><span className="right-icon"></span>
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
