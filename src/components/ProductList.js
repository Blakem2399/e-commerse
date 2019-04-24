import React, {Component} from 'react';
import Product from './Product'
import Title from './Title'

class ProductList extends Component {
    state = {
        products: []
    };

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name='The' title='Comics'/>
                        <div className="row">

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;
