import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BurgerIngradient.css';

class BurgerIngradient extends Component {
    render () {
        let ingradient = null;

        switch (this.props.type){
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
                ingradient = <div className="Salad"></div>;  
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
    }
} 

BurgerIngradient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngradient;