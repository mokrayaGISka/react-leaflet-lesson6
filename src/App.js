import React from 'react';
import { Layout } from 'antd';
import MapComponent from "./components/Map.jsx";
import SiderPanel from "./components/SiderPanel";
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <div className="main" >
      <Layout className="main-app" >
        <SiderPanel />
        <Layout>
          {/* <Header style={{ background: '#fff', width: "100vw" }} /> */}
          <Content className="main-map">
            <MapComponent />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
