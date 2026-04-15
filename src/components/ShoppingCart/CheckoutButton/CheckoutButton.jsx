import React, { memo } from "react";
import "./CheckoutButton.css";
const CheckoutButton = memo(({ onCheckout }) => {
  // Lệnh này chỉ chạy khi component bị khởi tạo hoặc re-render
  console.log("🛒 Nút Thanh Toán vừa bị re-render!");

  return <button onClick={onCheckout}>Thanh Toán</button>;
});

export default CheckoutButton;
