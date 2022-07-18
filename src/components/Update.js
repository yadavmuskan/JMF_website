import React from 'react'
import './Update.css';
import computer from '../assets/computer.jpeg';
// import update from '../assets/update.jfif';
export default function Update() {
  return (
    <div>  
    <div className='upmain-div1'>
        <div className='upleft-div'>
          {/* <img src={update}  className='upleft-img' alt="not found" /> */}
          <img src={computer} class="card-img-top" className='upright-img' alt="not found" />

          <h2 className='updiv-text1 '><span id='up-span1'><br></br>SAVE TIME WITH AUTOMATED<br></br> WEBSITE UPDATES</span><br></br><br></br>JamFeed gives you the ability to <br></br>always have your website<br></br> up to date without having to worry about updating <br></br>it every time you release new content. Enjoy our<br></br> quick and easy setup<br></br> and automated updates so you can focus <br></br>on your music.</h2>
        </div>
        <div className='upright-div'>
          <img src={computer} class="card-img-top" className='upright-img' alt="not found" />

          <h2 className='updiv-text2 '><span id='up-span2'>GET STREAMING AND SOCIAL MEDIA <br></br>ANALYTICS IN ONE PLACE</span><br></br><br></br>No more jumping around from platform to<br></br> platform! We make it<br></br> easy to view all of your fan analytics in one place. <br></br>This allows you to save time <br></br>and easily understand how <br></br>your music business is doing.</h2>
        </div>
      </div>
    </div>
  )
}
