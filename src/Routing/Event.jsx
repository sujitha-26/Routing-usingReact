import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const Event = () => {
  let navigate=useNavigate();

  const gotocontact=()=>{
    navigate("/contact")
  }

  const gotocourse=()=>{
    navigate("/course")
  }
  return (
    <>
   <NavBar/>
   <div className="event-page">
        <h1>Spring Music Festival 2024</h1>
        <h2>Date: May 18th - May 20th, 2024</h2>
        <h2>Location: Riverside Park, Springfield, IL</h2>
        
        <p>Welcome to the most awaited musical extravaganza of the season! Join us at Riverside Park for three days of non-stop music, fun, and memories. The Spring Music Festival 2024 promises to be bigger and better than ever before.</p>
        
        <h3>Highlights:</h3>
        <ul>
          <li>Live Performances</li>
          <li>Food Trucks</li>
          <li>Artisan Market</li>
          <li>Family-Friendly Activities</li>
          <li>Beer Garden</li>
        </ul>
        
        <h3>Ticket Information:</h3>
        <p>Early Bird Tickets available until April 30th, 2024</p>
        <p>General Admission and VIP Passes available</p>
        
        <h3>Stay Connected:</h3>
        <p>Follow us on social media for updates and announcements leading up to the event. Don't miss out on this incredible weekend of music and entertainment!</p>
      </div>
      <hr className='hr'></hr>
      <div className='Event-footer'><button onClick={gotocontact} >Go-to-Contact</button>
    <button onClick={gotocourse} >Go-To-Course</button></div>
    
    
    </>
  )
}

export default Event