import React from 'react'
import NavBar from './NavBar'
const Course = () => {
  return (
  <>
  <NavBar/>
  <section id="Course-Container">
    <a href="" className='cards'>
      <h1 >Java</h1>
      <h3>5000</h3>
      <p>Java is a widely used programming language.</p>
    </a>
    <a href="" className='cards'>
      <h1>Python</h1>
      <h3>5000</h3>
      <p>Python is a versatile programming language.</p>
    </a>
    <a href="" className='cards'>
      <h1>Reactjs</h1>
      <h3>5000</h3>
      <p>ReactJS is a JavaScript library for building user interfaces.</p>
    </a>
    <a href="" className='cards'>
      <h1>Web-Technology</h1>
      <h3>5000</h3>
      <p>Web Technology covers various aspects of web development.</p>
    </a>
  </section>
  </>
  )
}

export default Course