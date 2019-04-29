import React, {Component} from 'react';
import Title from '../Title'
import CartColumns from './CartColumns'
import {ProductConsumer} from "../../context";
import CartList from './CartList'

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        return (
                            <React.Fragment>
                                <Title name='View' title='Cart'/>
                                <CartColumns/>
                                <CartList value ={value}/>
                            </React.Fragment>
                        )

                    }}
                </ProductConsumer>


            </section>
        );
    }
}

export default Cart;
