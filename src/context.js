import React, {Component} from 'react';
import {detailProduct, storeProducts} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart:[],
        cartSubTotal:0,
        cartTax:0.6,

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
    getItem = id =>{
        return this.state.products.find(item => item.id === id)
    };

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(()=>{
            return{detailProduct:product}
        })
    };
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = product.count * product.price;
        this.setState(()=>{
            return{products:tempProducts, cart:[...this.state.cart,product]};
        },()=>{console.log(this.state)});
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
