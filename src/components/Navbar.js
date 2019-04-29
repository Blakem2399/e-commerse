import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from "./Button";
import {ProductConsumer} from "../context";

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                <Link to='/'>
                    <img src={logo} alt='spades' height='50' className='navbar-brand'/> </Link>
                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>Products</Link>
                    </li>
                </ul>

                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>


                        <span><i className='fas fa-cart-plus'/></span> my cart
                        <ProductConsumer>
                            {value => {
                                const {cart} = value;
                                if (cart.length > 0) {
                                    return <span> ({cart.length})</span>
                                }
                            }}</ProductConsumer>
                    </ButtonContainer>

                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background: var(--mainTan);
.nav-link{
color:var(--mainWhite) !important;
font-size:1.3rem;
text-transform: capitalize;
}
`;

export default Navbar;
