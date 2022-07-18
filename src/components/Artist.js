import React from 'react'
import './Artist.css';
import flow from '../assets/flow.png';
import {Link} from 'react-router-dom'


export default function Artist() {
  return (
    <div id='div1'>

       <div className='rightdiv'>
                <h1>Automated</h1>
                <h1>Music Websites</h1>
                <p>Build in minutes With 3 Simple Steps .Let Your<br></br> Website automatically update for you When You<br></br>release music,videos,tours,and news!</p>
                <Link to='/contact'><button className='btn'>GET EARLY ACCESS</button></Link>
                <Link to='/contact'><button className='btn'>BOOK A DEMO</button></Link>
            </div>
          <div className='leftdiv'>  
               <img src={flow} className="rounded float-left" alt="not found"></img>
          </div>


    </div>
  )
}
