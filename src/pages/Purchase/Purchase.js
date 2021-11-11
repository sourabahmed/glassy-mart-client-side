import React from 'react';
import { useParams } from 'react-router';
import Navigation from '../Shared/Navigation/Navigation';

const Purchase = () => {
    const {purchaseId} = useParams();
    return (
        <div>
            <Navigation></Navigation>
            <h2>This is Purchase {purchaseId}</h2>
        </div>
    );
};

export default Purchase;