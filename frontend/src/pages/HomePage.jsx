import React from 'react'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import BillBord from '../components/HomePageComponents/BillBord'
import ContactAndWhatWeGive from '../components/HomePageComponents/ContactAndWhatWeGive'
import Theprocess from '../components/HomePageComponents/Theprocess'
import Services from '../components/HomePageComponents/Services'
import Reviews from '../components/HomePageComponents/Reviews'
import FAQ from '../components/HomePageComponents/FAQ'

const HomePage = () => {
    return (
        <div className='homepage'>
            <Header />
            <BillBord />
            <ContactAndWhatWeGive />
            <Theprocess />
            <Services />
            <Reviews />
            <FAQ />
            <Footer />
        </div>
    )
}

export default HomePage