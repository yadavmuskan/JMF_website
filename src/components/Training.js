import React from 'react'
import './TrainingStyles.css';
import flow from '../assets/flow.png';
import {Link} from 'react-router-dom'


export default function Training() {
  return (
    <div id='div1'>

       <div className='rightdiv'>
                <h1 className='tra-head'>Automated</h1>
                <h1 className='tra-head'>Music Websites</h1>
        
                <p className='tra-p'>Build in minutes With 3 Simple Steps .Let Your<br></br> Website automatically update for you When You<br></br>release music,videos,tours,and news!</p>
                <Link to='/https://form.typeform.com/to/jM8IOwFr?typeform-source=www.jamfeed.com'><button className='btn-tra'>GET EARLY ACCESS</button></Link>
                <Link to='/https://calendly.com/camgibson/jamfeed-artist-demo?month=2022-07'><button className='btn-tra1' >BOOK A DEMO</button></Link>
            </div>
          <div className='leftdiv'>  
               <img src={flow} className="rounded float-left" alt="not found"></img>
          </div>


    </div>
  )
}
