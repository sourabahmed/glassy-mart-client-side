import React from 'react';
import './Exceptional.css'

const Exceptional = () => {
    return (
        <div>
            <h2>Why we are <br /> Exceptional</h2>
            <div className="exceptional">
                <div className="exception">
                    <i className="fas fa-truck fs-1"></i>
                    <h4>On time <br /> Delivery</h4>
                </div>
                <div className="exception">
                    <i className="fas fa-hand-holding-usd fs-1"></i>
                    <h4>Cash On <br /> Delivery</h4>
                </div>
                <div className="exception">
                    <i className="fas fa-money-bill-alt fs-1"></i>
                    <h4>100% Cash <br /> Back</h4>
                </div>
                <div className="exception">
                    <i className="fas fa-exchange-alt fs-1"></i>
                    <h4>Exchange <br /> Available</h4>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;