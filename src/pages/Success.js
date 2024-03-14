import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Success() {
  const navigate = useNavigate()
  setTimeout(()=>{
    navigate('/auctiondetails')
  },3000)

  return (
    <div>Thanks for making a payment!! Your Bid is successful</div>


    )
}
