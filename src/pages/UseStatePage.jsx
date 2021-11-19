import React, { useState } from "react";
import Counter from "../components/Counter";

const UseStatePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="site-layout-content">
      <h2 className="title-page">UseState</h2>

      <Counter count={count} setCount={setCount} />
    </div>
  );
};

export default UseStatePage;
