import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from 'react-router-dom';
import {ButtonContainer} from "./Button";

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                    const {id,author,img,info,price,title,inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">

                            <div className="row">
                                <div className="col-10 mx-auto text-center my-5 mainText">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} alt={title} className="img-fluid"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2 className='text-center'>{title}</h2>
                                    <h4 className='text-center text-uppercase text-muted mt-3 mb-2'>{author}</h4>
                                    <h4 className="mainText"><strong>Price: <span>${price}</span></strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        comic description:</p>
                                    <p className="text-muted lead">
                                    {info}
                                </p>
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>All Comics</ButtonContainer>
                                        </Link>
                                        <ButtonContainer disabled={!!inCart} onClick={()=> value.addToCart(id)}>
                                            {inCart ? 'In Cart': 'add to cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;
