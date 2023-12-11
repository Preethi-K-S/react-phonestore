import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from "../logo.svg";
import { ButtonContainer } from './Button';
export default class Navbar extends Component {
   
    render() { 
        return (
            <NavWrapper className='navbar navbar-expand-lg  navbar-dark px-sm-5'>
                <Link to='/'>
                    <img src={logo} alt='store' className='navbar-brand'/>
                </Link>
                <ul className='navbar-nav align-items-center'>
                <li className='nav-item me-5'>
                 <Link to="/" className='nav-link'>Products</Link>
                </li>
                </ul>
                 <Link to="/cart" className='ms-auto'>
                    <ButtonContainer>
                        <span className='mr-2'>
                        <i className='fas fa-cart-plus'/></span>
                        my cart
                    </ButtonContainer>
                 </Link>
            </NavWrapper>
        );
    }
}
const NavWrapper= styled.nav`
background:rgb(79, 77, 248);
border:2px solid gold;
font-size:1.3rem;
text-transform:capitalized !important;

`

