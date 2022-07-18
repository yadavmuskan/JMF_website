import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import home from '../assets/home.jpg';
// import spaceVideo from '../assets/space.mp4'
import jamlogo from '../assets/jamlogo.jfif';
const Home = () => {
    return (
        <div>
        <div className='hero' >
        <img id ='img-home' src={home}  alt="not found"/>
            <div className='content'>
            <img src={ jamlogo} id='home-logo' alt='not found'/>
            <h3 className = 'brand-name'><span>Jam</span>Feed</h3>
			<h2 className='head-1'>Never Miss A Beat</h2>
			<p className = 'brand-description mb-3 ' id='home-p'>Get real-time updates on new music,videos,tours,news,and more!</p>
                <div>
                    <Link to='/training' className='btn'>AMFEED FOR ARTISTS</Link>
                    <Link to='/contact' className='btn '>JAMFEED FOR FUNS</Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;
