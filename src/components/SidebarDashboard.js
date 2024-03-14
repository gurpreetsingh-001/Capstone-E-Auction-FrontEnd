import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, Navigate, Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import API from '../connection/connection';
import axios from 'axios';

export default function SidebarDashboard() {
  const navigate = useNavigate();

  //const userCtx= useContext(UserContext)
  const [userDetails, setuserDetails] = useState({})
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    async function fetchdata() {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate('/signin')

      } else {
        const response = await axios.get(`${API}/dashboard/`, {
          headers: { "Authorization": token }
        })
        if (response.status != 200) {
          navigate('/signin')
        }
        setuserDetails(response.data.user)
        // console.log(response.data.user + "Check profile pic")
      }
    }
    fetchdata();
  }, [])

  
  async function handlefile(event) {
    
    console.log("abc");
    const token = localStorage.getItem("token");

    const formdata = new FormData();

    formdata.append("profilepic", event.target.files[0])

    console.log(formdata)

    let windowresponse = window.confirm("Do you want to update the profile pic?")
    if (windowresponse) {


      const response = await axios.post(`${API}/user/updateprofilepic`, formdata, {
        headers: {
          Authorization: token,
          'Content-Type': 'multipart/form-data',
        }
      });
      if (response.status != 200) {
        navigate('/signin')
      }

      window.location.reload()
    }
  }
  return (
    <>
      <div className="col-sm-10 col-md-7 col-lg-4">
        <div className="dashboard-widget mb-30 mb-lg-0 sticky-menu">
          <div className="user">
            <div className="thumb-area">
              <div className="thumb">
                <img src={`http://localhost:5000/profile/${userDetails.profilepic}`} alt="user" />
              </div>

              <label htmlFor="profile-pic" className="profile-pic-edit"><i className="flaticon-pencil"></i></label>
              <input type="file" id="profile-pic" className="d-none" name="profilepic" onChange={handlefile} />
            </div>
            <div className="content">
              <h5 className="title"><Link to="#0">{userDetails.username}</Link></h5>
              <span className="username">{userDetails.email}</span>
            </div>
          </div>
          <ul className="dashboard-menu">
            <li>

              <Link to="/dashboard" className="active"><i className="flaticon-dashboard"></i>Dashboard</Link>
            </li>
            <li>
              <Link to="/profile"><i className="flaticon-settings"></i>Personal Profile </Link>
            </li>
            <li>
              <Link to="/addproduct"><i className="flaticon-auction"></i>Add Auction Product</Link>
            </li>
            <li>
              <Link to="/viewproduct"><i className="flaticon-best-seller"></i>View Product</Link>
            </li>
            <li>
              <Link to="/auctiondetails"><i className="flaticon-alarm"></i>Auction Details</Link>
            </li>
            {/* <li>
              <Link to="my-favorites.html"><i className="flaticon-star"></i>My Favorites</Link>
            </li>
            <li>
              <Link to="referral.html"><i className="flaticon-shake-hand"></i>Referrals</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  )
}
