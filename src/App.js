import { Layout, Menu, Breadcrumb } from "antd";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import CustomHookPage from "./pages/CustomHookPage";
import UseContextPage from "./pages/UseContextPage";
import UseEffectPage from "./pages/UseEffectPage";
import UseReducerPage from "./pages/UseReducerPage/UseReducerPage";
import UseStatePage from "./pages/UseStatePage";
import "antd/dist/antd.css";
import "./assets/app.css";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout" style={{ height: "100vh" }}>
        <NavBar />
        <Content style={{ padding: "0 50px" }} className="container-app">
          <Routes>
            <Route path="/" element={<UseStatePage />} />
            <Route path="/use-state" element={<UseStatePage />} />
            <Route path="/use-effect" element={<UseEffectPage />} />
            <Route path="/use-context" element={<UseContextPage />} />
            <Route path="/use-reducer" element={<UseReducerPage />} />
            <Route path="/custom-hook" element={<CustomHookPage />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          We are all the best team ©2021 Created by FrontEnd Team
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
