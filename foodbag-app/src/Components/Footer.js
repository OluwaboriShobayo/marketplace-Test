import React from 'react';
import twitter from './IMAGES/twitter.svg';
import youtube from './IMAGES/youtube.svg';
import facebook from './IMAGES/facebook.svg';

const footer = () => {
    return (
            <div>
                <div className="contactUs">
                    <p>Contact Us</p>
                    <div className="social-media">
                        <a href="#"><img src={twitter} /></a>
                        <a href="#"><img src={youtube} /></a>
                        <a href="#"><img src={facebook} /></a>
                    </div>
                   <div className="footer-left">
                        <div>
                          <a href="#">Terms & Conditions  .</a>
                          <a href="#">Privacy Policy</a>
                          </div>
                        <h3> &#169; Copyright 2021 FoodBag is a registered Company</h3>
                   </div>
                   {/* <span> &#169; Copyright 2021 FoodBag is a registered Company</span> */}
                </div>
            </div>
    )
}

export default footer;