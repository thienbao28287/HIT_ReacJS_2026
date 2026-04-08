import React from "react";
import "./ShoppingCart.css";

export const ShoppingCart = (props) => {
  let { cart, updateQuantity, removeItem, total } = props;

  return (
    <div className="cart-container">
      <h2>Giỏ hàng của bạn: </h2>

      <div className="cart-list">
        {cart.length === 0 ? (
          <p>Giỏ hàng đang trống. Hãy thêm vài món đồ nhé!</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-info">
                <h4>{item.title}</h4>
                <p>${item.price}</p>

                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>

              <button
                className="btn-delete"
                onClick={() => removeItem(item.id)}
              >
                Xóa
              </button>
            </div>
          ))
        )}
      </div>

      <div className="cart-footer">
        <div className="cart-summary">
          <span>Tổng tiền:</span>
          <span>${total}</span>
        </div>

        <button
          className="btn-checkout"
          onClick={() => {
            alert("Thanh Toan Thanh Cong!");
          }}
        >
          THANH TOÁN NGAY
        </button>
      </div>
    </div>
  );
};
