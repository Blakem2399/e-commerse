import React from 'react';
import {Link} from 'react-router-dom'
import {ButtonContainer} from '../Button'
export default function CartTotals({value}) {
    const {cartSubTotal,cartTax,cartTotal,removeAll} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to='/'>
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type='button' onClick={()=>removeAll()}>
                                Clear Cart
                            </button>
                        </Link>
                        <h5>
                            <span className="title">
                                Subtotal:
                            </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="title">
                                Tax:
                            </span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="title">
                                Total:
                            </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                        <Link to='/'>
                            <ButtonContainer cart onClick={()=>removeAll()}>
                                Checkout
                            </ButtonContainer>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}
