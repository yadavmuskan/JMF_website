import React, { Component } from 'react'
import './HeroImageStyles.css'
import { Link } from 'react-router-dom'
import logo from '../assets/jamlogo.jfif';

class HeroImage extends Component {
    render() {
        return (
            <div className='hero-img'>
                <div className='heading'>
                <img src={logo} id='hero-logo' alt='not found'/>
                <h1 id='hero-head'>Jam<span>Feed</span></h1>
               
                    <h1 id='hero-mainhead'>Be the First to Know</h1>
                    <p className='hero-p'>Get Push notifications for new music,videos,tours,and other breaking news<br></br> from your favorite artists and festivals.</p>
                    <Link to='/training'><button id='hero-button1'>GET THE APP</button></Link>
                </div>
            </div>
        )
    }
}

export default HeroImage
