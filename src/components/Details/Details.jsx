import React, { Component } from 'react'
import {ProductConsumer} from '../../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from '../Button/Button'

class Details extends Component {
    state = {};
    render() {
      return (
        <ProductConsumer>
          {(value) => {
            const {
              id,
              category,
              description,
              price,
              inCart,
              title,
              image,
            } = value.details;
            return (
              <div className='container p-5' >
                {/*Title  */}
                <div className='row'>
                  <div className='col10 x-auto text-center text-slanted text-blue my-5'>
                    <h1>{title}</h1>
                  </div>
                </div>
                {/*End of Title  */}
                {/* product info */}
                <div className='row'>
                  <div className='col-10 mx-auto col-md-6 my-3'>
                    <img src={image} alt='product' className='img-fluid w-50' />
                  </div>
                  {/* product text */}
  
                  <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                    <h2>category : {category}</h2>
                   
                    <h4 className='text-blue'>
                      <strong>
                        price : <span>${price}</span>
                      </strong>
                    </h4>
                    <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                      some info about product:
                    </p>
                    <p className='text-muted lead'>{description}</p>
  
                    <div>
                      <Link to='/'>
                        <ButtonContainer>Back to Products</ButtonContainer>
                      </Link>
                      <ButtonContainer
                      cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id)
                        }}
                      >
                        {inCart ? 'inCart' : 'add to cart'}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      );
    }
  }
  
  export default Details;