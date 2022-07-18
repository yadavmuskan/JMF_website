import React from 'react'
import './Profile_page.css';

export default function Profile_page() {
  return (
    <div>
    <h1 id='pro-tittle'>Trusted by Artists & Bands</h1>
        <div class="card-group">
  <div  id ='pro-div1'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" class="card-img-top" className='pro-img' alt="..."/>
    <div class="card-body" className='pro-body1'>
      <h5 className='pro-high' >Vincent Antone</h5>
      <a href ="vincentantonemusic.com"></a>
      <h5 className='pro-high' >“Easy to use and effective. I feel better knowing that JamFeed will always make sure my website is up to date with new content for my fans.”</h5>
    </div>
  </div>
  <div  id ='pro-div2'>
    <img src="data:image/jpeg;base64,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" class="card-img-top" className='pro-img'  alt="..."/>
    <div class="card-body" className='pro-body1'>
     <h5 className='pro-high' >Katie Boeck</h5>
     <h5 className='pro-high' >"this literally takes a few seconds to set up and is totally worth having. I love not having to worry about updating my website."</h5>
    </div>
  </div>
  <div id ='pro-div3'>
    <img src="data:image/jpeg;base64,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" class="card-img-top"  className='pro-img' alt="..."/>
    <div class="card-body" className='pro-body1'>
      <h5 className='pro-high' >Jimmy the Human</h5>
      <a href='jimmythehuman.com'></a>
      <h5 className='pro-high' >"I love JamFeed. It allows me to keep my website up to date without having to do any work myself. Every time I drop new music, the site automatically updates and looks exactly how I want it to."</h5>
    </div>
  </div>
  <div  id ='pro-div4'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNc0grqkgnhmXj17ngKGYiVzkHLqhPViItg&usqp=CAU" class="card-img-top" className='pro-img' alt="..."/>
    <div class="card-body" className='pro-body1'>
      <h5 className='pro-high'  >Peterson Brothers</h5>
       <a href="petersonbrothersband.com"></a>
       <h5 className='pro-high' >"We needed something that was super clean, easy to use, and very professional. We’re really excited to have a website that is affordable and very easy to use. Thank you JamFeed!"</h5>
    </div>
  </div>
  {/* <div class="card" id ='pro-div5'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3pcRO1aRe2hb2Jj_xHB9IFELEzhsV8uXew&usqp=CAU" class="card-img-top" className='pro-img' alt="..."/>
    <div class="card-body">
     <h5>Sammy Adams</h5>
     <a href="sammyadamsmusic.com"></a>
    <h5>I moved my website over from Squarespace to JamFeed because their product is specifically for musicians like me and their team helped me set the whole thing up in a few minu</h5>
    </div>
  </div> */}
  {/* <div class="card" id ='pro-div6'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAY5j_2hAi5KXUM4aprWocajMryp5hH8fT3w&usqp=CAU" class="card-img-top" className='pro-img' alt="..."/>
    <div class="card-body">
    <h5></h5>
      <h5>sammyadamsmusic.com</h5>
<h5>"I moved my website over from Squarespace to JamFeed because their product is specifically for musicians like me and their team helped me set the whole thing up in a few minutes."</h5>
    </div>
  </div> */}
</div>
    </div>
  )
}