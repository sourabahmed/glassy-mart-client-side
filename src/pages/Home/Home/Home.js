import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Services from '../Services/Services'

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Services></Services>
            <h2>This is home</h2>
            <Footer></Footer>
        </div>
    );
};

export default Home;