import React, { useState, useMemo, useCallback } from "react";
import CheckoutButton from "./components/ShoppingCart/CheckoutButton/CheckoutButton";

const heavyArray = Array.from({ length: 10000 }, (_, index) => index + 1);

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const evenNumbersCount = useMemo(() => {
    console.log("Đang chạy vòng lặp 10,000 lần...");
    return heavyArray.filter((num) => num % 2 === 0).length;
  }, []);
  const handleCheckout = useCallback(() => {
    alert(`Đã thanh toán thành công! Tổng số hàng: ${cartCount}`);
  }, [cartCount]);

  return (
    <div>
      <h2>Thực hành Tối ưu hoá React</h2>

      <div>
        <label>Tìm kiếm:</label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Gõ keyword vào đây..."
        />
        <p>Keyword hiện tại: {keyword}</p>
      </div>
      <div className="cart-section">
        <p>
          Số lượng trong giỏ: <strong>{cartCount}</strong>
        </p>
        <button className="add-btn" onClick={() => setCartCount(cartCount + 1)}>
          Thêm vào giỏ
        </button>
      </div>
      <div className="result-section">
        <p>
          Số lượng số chẵn tìm thấy trong 10,000 phần tử:{" "}
          <strong>{evenNumbersCount}</strong>
        </p>
      </div>
      <CheckoutButton onCheckout={handleCheckout} />
    </div>
  );
}
