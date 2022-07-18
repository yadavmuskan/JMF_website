import React from 'react'
import './FooterStyles.css'
// import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
       
            {/* <div className='footer-container'> */}
          <h1 className='footer-head'>Save Time & Money!</h1><br></br>
           <button className='btn-footer' onClick={"https://calendly.com/camgibson/jamfeed-artist-demo?month=2022-07"}>AMFEED FOR ARTISTS</button>  
            {/* </div> */}
         <hr></hr>
         <pre>      © 2022 JamFeed, Inc.</pre>  

        </div>
    )
}

export default Footer
