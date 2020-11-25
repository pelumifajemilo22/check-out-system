import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStore } from 'react-icons/fa';
import styled from 'styled-components'
import {ButtonContainer} from '../Button/Button'; 
class NavBar extends Component {
    state = {};
    render() {
      return (
        <NavWrapper className='navbar navbar-expand-sm  navbar-dark px-sm-5'>
        
  
          <Link to='/'>
            {/* <img src={FaStore} alt='store' className='navbar-brand' /> */}
            <FaStore/>
          </Link>
          <ul className='navbar-nav align-items-center'>
            <li className='nav-item ml-5'>
              <Link to='/' className='nav-link'>
                products
              </Link>
            </li>
          </ul>
          <Link to='/carts' className='ml-auto'>
            <ButtonContainer>
              <span className='mr-2'>
                <FaShoppingCart className='logo' />
              </span>
              my cart
            </ButtonContainer>
          </Link>
        </NavWrapper>
      );
    }
  }
  
  export default NavBar;
  
  const NavWrapper = styled.nav`
  background : var(--mainGreen);
  .nav-link{
      color:var(--mainwhite) !important;
      font-size:1.3rem;
      text-transform:capitalize;
  }
  `
  
