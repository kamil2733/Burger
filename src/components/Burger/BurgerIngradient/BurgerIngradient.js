import React from 'react';
import PropTypes from 'prop-types';
import './BurgerIngradient.css';

const burgerIngradient = (props) => {
let ingradient = null;

switch (props.type){
    case ('bread-bottom'):
        ingradient = <div className="BreadBottom"></div>;
        break;
    case ('bread-top'):
        ingradient = (
           <div className="BreadTop">
               <div className="Seeds1"></div>
               <div className="Seeds2"></div>
           </div>  
           ); 
           break;
    case ('meat'):
        ingradient = <div className="Meat"></div>;
        break;
    case ('salad'): 
        ingradietn = <div className="Salad"></div>;  
        break;
    case ('cheese'): 
        ingradient = <div className="Cheese"></div>
        break;
    case ('bacon'):
        ingradient = <div className="Bacon"></div>
        break;
        default:
            ingradient = null;   
}
return ingradient;
};

export default burgerIngradient;