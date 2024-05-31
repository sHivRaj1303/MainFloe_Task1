import React from 'react'
import "./style.css"
import { useEffect } from 'react'

const Services = () => {
  useEffect(() => {
    console.log("user visited to Services page");
  }, [])
  return (
    <div className='container'>
    <h1>Services Page</h1>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum recusandae quis odit facilis dignissimos sit illo ut maiores eius! Rerum soluta ut iusto ipsam quod obcaecati unde veniam excepturi pariatur consequuntur nesciunt fuga ipsa deserunt distinctio accusantium sit ex, fugiat explicabo officia nam maiores? Voluptates et repudiandae eos libero alias!</div>
  </div>
  )
}

export default Services
