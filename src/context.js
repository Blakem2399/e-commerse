import React, {Component} from 'react';
import {storeProducts, detailProduct} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    };
    componentDidMount() {
        this.setProduct();
    }

    setProduct = () =>{
        let tempProducts = [];
        storeProducts.forEach(item => {
            const oneItem = {...item};
            tempProducts = [...tempProducts,oneItem];
        });
        this.setState(()=>{
            return {products:tempProducts}
        })
    };
    handleDetail = () => {
        console.log('this is detail')
    };
    addToCart = (id) => {
        console.log(`adding ${id} to cart`)
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
