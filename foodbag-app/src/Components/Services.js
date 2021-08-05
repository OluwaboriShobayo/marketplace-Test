import React from 'react';
import location from './IMAGES/location.svg';
import need from './IMAGES/need.svg';
import delivery from './IMAGES/delivery.svg';

const Services = () => {
        return (
            <div className="options">
                <h2>How we serve you</h2>
                <section className="services">
                <div>
                    <img src={location} />
                    <h3>Tell us where you are</h3>
                    <p>Select the location where you want us to deliver</p>
                </div>
                <div>
                    <img src={need} />
                    <h3>Tell us what you want</h3>
                    <p>Browse the type of food that interest you</p>
                </div>
                <div>
                    <img src={delivery} />
                    <h3>We'll come running</h3>
                    <p>Your order will be dlivered to you in no time</p>
                </div>
                </section>
                <hr />
            </div>
           
        )


}

export default Services;