import React, {Component} from 'react';
import Title from '../Title'
import CartColumns from './CartColumns'
import {ProductConsumer} from "../../context";

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {

                    }}
                </ProductConsumer>
                <Title name='View' title='Cart'/>
                <CartColumns/>

            </section>
        );
    }
}

export default Cart;
