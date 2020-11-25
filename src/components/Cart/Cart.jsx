import React, { Component } from 'react';
import Title from '../Title/Title';
import Cartcolumns from './Cartcolumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './Cartlist';
import CartTotal from './CartTotal';
class Cart extends Component {
  state = {};
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name='your' title='cart' />
                  <Cartcolumns />
                  <CartList value={value}/>
                  <CartTotal value={value} history={this.props.history}/>
                </React.Fragment>
              );
            }
            else {
                return <EmptyCart />
            }
          }}
        </ProductConsumer>

        
      </section>
    );
  }
}

export default Cart;
