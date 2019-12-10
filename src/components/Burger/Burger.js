import React from 'react';
import './Burger.css';
import BurgerIngradient from './BurgerIngradient/BurgerIngradient'



const burger = (props) => {
    let transformedIngradients = Object.keys(props.ingradients)
    .map(igKey => {
        return [...Array(props.ingradients[igKey])].map((_,i) => {
           return <BurgerIngradient key={igKey + i} type={igKey}/>;
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)}, []);
        if (transformedIngradients.length === 0) {
            transformedIngradients = <p>Proszę zacząć dodawać składniki!</p>
        }
    
console.log(transformedIngradients);


return (
    <div className="Burger">
    <BurgerIngradient type="bread-top" />
    {transformedIngradients}
    <BurgerIngradient type="bread-bottom" />
    </div>
);
};

export default burger;