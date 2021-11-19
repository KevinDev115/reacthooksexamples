import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const { Header } = Layout;
const { Item } = Menu;

const NavBar = () => {
  return (
    <Header>
      <div className="auth-header">
        <Link to="/">
          <img src={logo} alt="Brand logo" className="app-logo" />
        </Link>
        <div className="auth-header-menu">
          <Menu theme="dark" mode="horizontal" disabledOverflow>
            <Item>
              <Link to={"/use-state"}>
                <span>Use state</span>
              </Link>
            </Item>
            <Item>
              <Link to={"/use-effect"}>
                <span>Use effect</span>
              </Link>
            </Item>
            <Item>
              <Link to={"/use-context"}>
                <span>Use Context</span>
              </Link>
            </Item>
            <Item>
              <Link to={"/use-reducer"}>
                <span>Use Reducer</span>
              </Link>
            </Item>
            <Item>
              <Link to={"/custom-hook"}>
                <span>Custom Hook</span>
              </Link>
            </Item>
          </Menu>
        </div>
      </div>
    </Header>
  );
};

export default NavBar;
