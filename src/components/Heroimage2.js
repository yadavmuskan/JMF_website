import React from 'react'
import mobile from '../assets/mobile.jfif';
import './Heroimage2.css';
import news from '../assets/newfeed.jfif';
import push from '../assets/push.jfif';
import concert from '../assets/concert.jpg';
import spotify1 from '../assets/spotify1.png';
import contact from '../assets/contact.jfif';
import customer from '../assets/customer.jfif';

export default function Heroimage2() {
  return (
    <div id="mobilediv">
    <h1 id ="mobilehead">Mobile App Features</h1>
    <div class="row row-cols- row-cols-md-6 g-4">
        <div class="col-row">
          <div class="card" id='mobilediv1'>
            {/* <img src="" class="card-img-top" alt="..."/> */}
            <div class="card-body">
           <img src={news} class="card-img-top" id='news-img' alt="not found"/> 
              <h5 claasName='mob-head'>Customized <br></br>News Feed</h5>
           <h6 claasName='mobile-p'>Create a feed that is curated just for you based on your music preferences and<br></br>tasks.</h6>
            </div>
            <br></br>
            <div class="card-body" >
            <img src={push} class="card-img-top" id='push-img' alt="not found"/> 
                <h5 claasName='mob-head'>Push<br></br>Notifications</h5>
             <h6 claasName='mobile-p'>Get real-time<br></br>updates for music,videos,tours,merch,<br></br>festival news </h6>
            </div>
            <div class="card-body" >
            <img src={concert} class="card-img-top" id='concert-img' alt="not found"/> 
                <h5 claasName='mob-head'>Find Local<br></br> Concerts</h5>
             <h6 claasName='mobile-p'>Knowsyour favorite artists are coming to town and <br></br>browse local<br></br> concerts every day.</h6>
            </div>
         </div>
      </div>
      </div> 
         
      <div  id="mobilediv-img">
            <img src={mobile} class="card-img-top" id='mob-img' alt="not found"/>
      </div>
      
      <div class="row row-cols-1 row-cols-md-1 g-4">
        <div class="col">
          <div class="card" id="mobilediv2">
            {/* <img src="..." class="card-img-top" alt="..."/> */}
            <div class="card-body">
            <img src={spotify1} class="card-img-top" id='spotify-img' alt="not found"/> 
              <h5 claasName='mob-head'>Sync Your <br></br> Music</h5>
           <h6 claasName='mobile-p'> Connect Your Spotify or Apple <br></br>Music permium accounts <br></br> to sync Your favorite artists.</h6>
            </div>
            <br></br>
            <div class="card-body">
            <img src={contact} class="card-img-top" id='contact-img' alt="not found"/>
                <h5 claasName='mob-head'>Discover<br></br> Artists</h5>
              <h6 claasName='mobile-p' >Find new artists and<br></br> new content and <br></br>keep up with<br></br> everything in one<br></br> place.</h6>
            </div>
            <div class="card-body" >
            <img src={customer} class="card-img-top" id='customer-img' alt="not found"/>
                <h5 claasName='mob-head'>Customer <br></br>Support</h5>
             <h6 claasName='mobile-p'>We always want to<br></br>hear from our users <br></br>and fans about how<br></br> we can make<br></br> JamFeed better.</h6>
            </div>
        </div>
      </div>
      </div>
      </div>
      
  );
}
