import React from 'react'
import Navbar from '../components/Navbar';
import TrainingSection from '../components/Training'

import Profile_page from '../components/Profile_page'
import Cards from '../components/Cards'
import Update from '../components/Update'
// import Bands from '../components/Bands'
import Faqs from '../components/Faqs'
import Footer from '../components/Footer'

const Training = () => {
    return (
        <div>
            <Navbar />
            <TrainingSection />
            {/* <Bands/> */}
            <Profile_page/>
            <Cards/>
            <Update/>
            <Faqs/>
        
            <Footer />
        </div>
    )
}

export default Training;
