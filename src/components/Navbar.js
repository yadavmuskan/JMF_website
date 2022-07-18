import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'
import Jamlogo from '../assets/logo_name.png';

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
        const changeColor =() => {
            if(window.scrollY >= 100) {
                setColor(true)
            } else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
         <img src={Jamlogo}  className='nav-img' alt="not found"/>
           {/* <Link to='/'> <h6 className='nav-head'><span>Jam</span>Feed</h6></Link> t 
            */}
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li>
                   Sign In
               </li>
              
           </ul>
          
        </div>
    )
}

export default Navbar;
