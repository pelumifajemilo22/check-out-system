import React, { Component } from 'react';
import { storeProduct, details } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    details: details,
    cart: [],
    modalOpen: false,
    modalProduct: details,
    cartSubTotal: 10,
    cartTotal: 20,
  };

//   componentDidMount() {
//     this.setProducts();
//     this.setState({
//       cart: !localStorage.getItem('myCart')
//         ? []
//         : JSON.parse(localStorage.getItem('myCart')),
//     });
//   }
componentDidMount = () =>{
    this.setProducts();
    const cart = localStorage.getItem('myCart')
    this.setState({cart:JSON.parse(cart)? JSON.parse(cart):[]}, this.addTotals) 
}



  setProducts = () => {
    let tempProducts = [];
    storeProduct.forEach((item) => {    
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  addToCart = (id) => {
    const tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id)); 
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1; 
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
         localStorage.setItem('myCart', JSON.stringify(this.state.cart));
      }
    );
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        details: product,
      };
    });
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = Math.round(product.count * product.price * 10 )/10;
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
       
      }
    );
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total =Math.round(product.count * product.price* 10)/10
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
          
        }
      );
    }
  };
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProducts],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => {
      subTotal += item.total;
    });
  

    const total = subTotal
    this.setState(() => {
      return {
        
        cartTotal: Math.round(total*10) / 10,

      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          handleDetail: this.handleDetail,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
