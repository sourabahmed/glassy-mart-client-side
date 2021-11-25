import React, {useState} from 'react';
import { Spinner } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Exceptional from '../Exceptional/Exceptional';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services'

const Home = () => {
    const [loader, setLoader] = useState(true);

    setTimeout(() => {
        setLoader(false)
    }, 2000)
    return (
        <div>
            {
                loader ? <Spinner className="m-5" animation="grow" />:
                    <div>
                        <Navigation></Navigation>
                        <Banner></Banner>
                        <Services></Services>
                        <Exceptional></Exceptional>
                        <Reviews></Reviews>
                        <Footer></Footer>
                    </div>
            }
        </div>
    );
};

export default Home;