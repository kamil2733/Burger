import React, {
    Component
} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGRADIENT_PRICES = {
     salad: 0.5,
     cheese: 0.4,
     meat: 1.3,
     bacon: 0.7,
};
class BurgerBuilder extends Component {
    state = {
        ingradients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
}

updatePurchaseState (ingradients) {
  
    const sum = Object.keys(ingradients)
       .map(igKey => {
           return ingradients[igKey];
       })
       .reduce ((sum, el) => {
           return sum + el;
       },0);
       this.setState({purchasable: sum > 0});
}

    addIngradientHandler = (type) => {
        const oldCount = this.state.ingradients[type];
        const updatedCount = oldCount + 1;
        const updateIngradients = {
            ...this.state.ingradients
        };
        updateIngradients[type] = updatedCount;
        const priceAddition = INGRADIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingradients: updateIngradients});
        this.updatePurchaseState(updateIngradients);
    }

    removeIngradientHandler =(type) => {
        const oldCount = this.state.ingradients[type];
        if (oldCount <= 0) {
           return; 
        }
        const updatedCount = oldCount - 1;
        const updateIngradients = {
            ...this.state.ingradients
        };
        updateIngradients[type] = updatedCount;
        const priceDeduction = INGRADIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingradients: updateIngradients});
        this.updatePurchaseState(updateIngradients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You continue?');
    }

    render() {
        const disabledInfo = {
            ...this.state.ingradients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return ( 
            <Aux >
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingradients={this.state.ingradients} 
                    price={this.state.totalPrice}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}/>
                </Modal >
                <Burger ingradients = {this.state.ingradients} /> 
                <BuildControls
                   ingradientAdded={this.addIngradientHandler} 
                   ingradientRemoved={this.removeIngradientHandler}
                   disabled={disabledInfo} 
                   purchasable={this.state.purchasable}
                   ordered={this.purchaseHandler}
                   price={this.state.totalPrice} /> 
            </Aux>
        );
    }
}

export default BurgerBuilder;