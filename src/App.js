import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";

import { Products, Navbar, Cart } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

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
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleAddToCart} />
      <Cart cart={cart} />
    </div>
  );
};

export default App;
