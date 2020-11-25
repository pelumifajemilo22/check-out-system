import React, { Component } from 'react'
import Title from '../Title/Title'
import Products from './Products'
import {ProductConsumer} from '../../context'
export default class ProductList extends Component {
 
    render() {
        return (
           <>
          <div className="py-5">
              <div className="container">
                  <Title name="our" title = "products"/>

                <div className="row">
                    <ProductConsumer>
                        {(value)=>{
                           return value.products.map(product=>{
                               return <Products key={product.id} product={product}/>
                           })
                        }}
                    </ProductConsumer>
                </div>
              </div>
          </div>
           </>
            
        );
    }
}
