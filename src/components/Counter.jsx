import { Button, Space } from "antd";
import { PlusOutlined, MinusOutlined, ReloadOutlined } from "@ant-design/icons";

const Counter = ({ count, setCount }) => {
  return (
    <div className="section-count">
      <span className="count">{count}</span>
      <Space>
        <Button onClick={() => setCount(count - 1)} icon={<MinusOutlined />} />
        <Button onClick={() => setCount(count + 1)} icon={<PlusOutlined />} />
        <Button onClick={() => setCount(0)} icon={<ReloadOutlined />} />
      </Space>
    </div>
  );
};

export default Counter;
