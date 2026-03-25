import React, { useState } from "react";

export const Count = () => {
  const [useState, setUseState] = useState(0);
  function handle() {
    setUseState(useState + 1);
  }
  return (
    <div>
      <button onClick={handle()}>Click me {useState}</button>
    </div>
  );
};
