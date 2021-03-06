import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // console.log(igKey);
            return [...Array(props.ingredients[igKey])].map((_ , i) => {
                // console.log("_ ",i);
                return <BurgerIngredient key={igKey + i} type ={igKey} />;  // [ , ]
            });
        })
        .reduce((arr, el ) =>{
            // console.log(arr+" "+el);
            return arr.concat(el)
        }, []);
    if(transformedIngredients <= 0 ){
        transformedIngredients = <p> Please start adding ingredients </p>
    }
    // console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type = "bread-top"/>
            {transformedIngredients}
            {/*<BurgerIngredient type = "cheese"/>*/}
            {/*<BurgerIngredient type = "meat"/>*/}
            <BurgerIngredient type = "bread-bottom"/>
        </div>
    );
};

export default burger ;
