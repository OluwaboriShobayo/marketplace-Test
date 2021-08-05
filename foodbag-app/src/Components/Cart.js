import React, {Component} from 'react';
import {Link } from "react-router-dom";
import KFC from './IMAGES/KFC.svg';
import plus from './IMAGES/plus.svg';
import Minus from './IMAGES/Minus.svg';

class Cart extends Component {
    constructor(props){
        super(props);

        this.state = {
            count:1,
            price:5000,
            totalPrice:0
        }
    }

increaseOrder = () => {
        this.setState((prevState ) => ({count: prevState.count + 1}));
}
decreaseOrder = () => {
    this.setState((prevState ) => ({count: prevState.count - 1}));
}
calculateProductPrice = () =>{
   this.setState((price) => ({price: price * this.count}))

}

    render(){
    return(
        <div>
            <h2>Cart</h2>
            <div className="KFC">
                <p>X</p>
               <img src={KFC} />
                    <h3>KFC- King Bucket</h3>
                   <span >{this.state.price}</span>
                   <button onClick={this.increaseOrder}><img src={plus} /></button>
                   <span id ='quantity'  >{this.state.count}
                   </span>
                   <span></span>
                   <button onClick={this.decreaseOrder}
                   onChange = {this.calculateProductPrice} 
                   ><img src={Minus} /></button>

            </div>
        </div>
    )
}
}

export default Cart;