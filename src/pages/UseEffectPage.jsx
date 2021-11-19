import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import Counter from "../components/Counter";

const UseEffectPage = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(9);
  }, []);

  useEffect(() => {
    if (count === 10) {
      Modal.info({
        title: "Good job! you made it to 10, try again!",
        onOk() {
          setCount(0);
        },
      });
    }
  }, [count]);

  return (
    <div className="site-layout-content">
      <h2 className="title-page">UseEffect</h2>
      <Counter count={count} setCount={setCount} />
    </div>
  );
};

export default UseEffectPage;
