import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { commerce } from "./lib/commerce";
import {
  Products,
  ProductPage,
  Navbar,
  Cart,
  Checkout,
  Hero,
  About,
  Newsletter,
  Footer,
  FooterInfo,
} from "./components";

import { CssBaseline } from "@material-ui/core";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    //response:
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    //response:
    const cart = await commerce.cart.retrieve();

    setCart(cart);
    //or setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    // const item = await commerce.cart.add(productId, quantity);
    // setCart(item.cart);
    // same thing as:
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    // const response = await commerce.cart.update(productId, { quantity });
    // setCart(response.cart)
    // same thing as:
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <CssBaseline />
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Newsletter />
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
          <Route exact path="/products">
            <ProductPage products={products} onAddToCart={handleAddToCart} />
          </Route>
        </Switch>
        <FooterInfo />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
