import React from 'react';
import fastFood from './IMAGES/fastFood.svg';
import VegDrinks from './IMAGES/VegDrinks.svg';
import DrinksCocktails from './IMAGES/DrinksCocktails.svg';
import restaurant from './IMAGES/restaurant.svg';


const Categories = () => {
    return(
        <div className="selection">
            <h2>Pick an interest</h2>
            <section className="categories">
                <div>
                    <img src={fastFood} />
                    <p>Fast food</p>
                    <p>All sorrows are less with bread</p>
                </div>
                <div>
                    <img src={VegDrinks} />
                    <p>Vegetables & Fruits</p>
                    <p>May not want it, but good for you</p>
                </div>
                <div>
                    <img src={DrinksCocktails} />
                    <p>Drinks & Cocktails</p>
                    <p>I feel sad for those who don't drink</p>
                </div>
                <div>
                    <img src={restaurant} />
                    <p>Restaurants</p>
                    <p>All sorrows are less with bread</p>
                </div>
        </section>
        <hr />
        </div>
       
    )
}

export default Categories;
        