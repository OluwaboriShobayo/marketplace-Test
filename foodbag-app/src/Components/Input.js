import React from 'react';
import dropdown from './IMAGES/dropdown.svg';

const input = () => {
return(
    <div className="datalist">
        <label htmlFor="location">Where are you?</label><br />
        <div>
            <input list="location-types" 
                id="location" 
                placeholder="Enter your delivery Address">
            </input>
            <img src={dropdown} id="img"/>
        </div>
        <datalist id="location-types">
            <option>Bodija</option>
            <option>Akobo</option>
            <option>UI</option>
        </datalist>
    </div>
)
}
export default input;