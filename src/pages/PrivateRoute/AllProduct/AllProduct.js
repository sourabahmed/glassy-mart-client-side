import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Products from './Products/Products';

const AllProduct = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Products></Products>
            <h2>This is all product</h2>
        </div>
    );
};

export default AllProduct;