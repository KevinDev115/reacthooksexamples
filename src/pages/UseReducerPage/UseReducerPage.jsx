import React, { useEffect, useReducer } from "react";
import { Button, Form, Input, List } from "antd";
import { ADD_ITEM, DELETE_ITEM, SET_ITEMS } from "./constants";
import reactReducer from "./reactReducer";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";

const { Search } = Input;
const { useForm } = Form;

const data = [
  {
    _id: "1",
    name: "Pepe",
  },
  {
    _id: "2",
    name: "Pepa",
  },
];

const UseReducerPage = () => {
  const [form] = useForm();
  const [state, dispatch] = useReducer(reactReducer, {
    items: [],
  });

  useEffect(() => {
    setItems(data);
  }, []);

  const setItems = (items) => {
    dispatch({
      type: SET_ITEMS,
      items,
    });
  };

  const addItem = ({ name }) => {
    if (name) {
      dispatch({
        type: ADD_ITEM,
        item: {
          _id: uuidv4(),
          name,
        },
      });

      form.resetFields();
    }
  };

  const deleteItem = (data) => {
    dispatch({
      type: DELETE_ITEM,
      data,
    });
  };

  return (
    <div className="site-layout-content">
      <h2 className="title-page">UseReducer</h2>

      <div className="input-reducer-item">
        <Form form={form} onFinish={addItem} layout="horizontal">
          <Form.Item name="name">
            <Input style={{ width: "calc(100% - 200px)" }} />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form>
      </div>

      <List
        bordered
        itemLayout="horizontal"
        dataSource={state.items}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type="text"
                onClick={() => deleteItem(item)}
                icon={<DeleteOutlined />}
                key="list-loadmore-delete"
              />,
            ]}
          >
            <List.Item.Meta title={item.name} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default UseReducerPage;
