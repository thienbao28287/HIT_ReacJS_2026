import React, { useState, useEffect } from "react";
import "./Main_Content.css";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
export const Main_Content = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=9")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error("Lỗi:", error));
  }, []);
  const addToCart = (product) => {
    let newCart = [...cart];
    let isInCart = false;
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === product.id) {
        newCart[i].quantity = newCart[i].quantity + 1;
        isInCart = true;
        break;
      }
    }
    if (!isInCart) {
      newCart.push({ ...product, quantity: 1 });
    }
    setCart(newCart);
  };
  const updateQuantity = (id, delta) => {
    let newCart = [...cart];
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === id) {
        let soLuongMoi = newCart[i].quantity + delta;
        if (soLuongMoi > 0) {
          newCart[i].quantity = soLuongMoi;
        } else {
          newCart[i].quantity = 1;
        }
        break;
      }
    }
    setCart(newCart);
  };
  const removeItem = (id) => {
    let newCart = [];

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id !== id) {
        newCart.push(cart[i]);
      }
    }

    setCart(newCart);
  };
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price * cart[i].quantity;
  }

  return (
    <div className="container">
      <div className="pro">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.thumbnail} />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
      <div className="shoppingCart">
        <ShoppingCart
          cart={cart}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
          total={total}
        />
      </div>
    </div>
  );
};
