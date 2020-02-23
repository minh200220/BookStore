import React, { Component } from "react";

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);

    let Cart = localStorage.getItem("cart");

    if (Cart === undefined) {
      localStorage.setItem("cart", "[]");
    }

    this.state = {
      cartItems: JSON.parse(Cart) || []
    };

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(product) {
    console.log("Adding to cart", product);
    this.setState({
      cartItems: this.state.cartItems.concat(product)
    });
  }

  removeFromCart(product) {
    var arr = [...this.state.cartItems];
    var index = arr.indexOf(product);
    if (index !== -1) {
      arr.splice(index, 1);
      this.setState({ cartItems: arr });
    }
  }

  render() {
    localStorage.cart = JSON.stringify(this.state.cartItems);
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
