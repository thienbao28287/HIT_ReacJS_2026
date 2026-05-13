import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "./Store/action";

function App() {
  // Lấy count từ store. State ở đây chính là object { count: X } từ reducer
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}
    >
      <h1>Redux Counter App</h1>
      <div style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Giá trị: <strong>{count}</strong>
      </div>

      <button onClick={() => dispatch(incrementCounter())} style={btnStyle}>
        Tăng +
      </button>
      <button onClick={() => dispatch(decrementCounter())} style={btnStyle}>
        Giảm -
      </button>
    </div>
  );
}

const btnStyle = {
  padding: "10px 20px",
  fontSize: "1rem",
  margin: "0 10px",
  cursor: "pointer",
};

export default App;
