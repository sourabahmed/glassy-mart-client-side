import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/K2XM0yL/sunglasses-sale-banner-summer-saleout-260nw-1777384475-1.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Glassy Mart</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/d6z8nnT/summer-accessories-concept-sunglasses-straw-260nw-1362009176.png"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Glassy Mart</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/xCDvc0f/a0d6a0650926a301d493aa205d6301cb.png"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Glassy Mart</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;