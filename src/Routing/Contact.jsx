import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const Contact = () => {
  let navigate=useNavigate();

let gottoprevious=()=>{
      navigate(-1);
}
  return (
    <>
    <NavBar/>
    <form>
      <label>Email: 
      <input type="email" placeholder='Enter your email'/></label>
      <label>Issues:<textarea placeholder='Enter your Issues Here'></textarea></label>
      <input type="submit"/>
    </form>
    <hr></hr>
    <footer id="contact-footer">
      <h4>Email-us:abc@gmail.com</h4>
      <h4>Contact-us:1234567890</h4>
      <button onClick={gottoprevious}> Go-Back</button>
    
    </footer>
    
    </>
  )
}

export default Contact