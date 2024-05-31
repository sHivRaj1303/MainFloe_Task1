import React from 'react'
import './Home.css'
import { useEffect } from 'react'


const Home = () => {
    useEffect(() => {
      console.log("user visited to home page");
    }, [])
    
    return (
        <>
            <div className='div'>

                <video autoPlay loop muted src="src\assets\car1.mp4"></video>

            </div>
            <h1>Welcome to Our Website</h1>
            

            <div className="button">
                <button>Get Started</button>
                <button>Lern more</button>
            </div>

        </>
    )
}

export default Home
