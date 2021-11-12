import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Products from './Products/Products';

const AllProduct = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default AllProduct;