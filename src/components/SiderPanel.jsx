import React from "react";
import { Button, Icon } from 'antd';
import Toc from "./Toc";
import '../css/SidebarPanel.css';



class SiderPanel extends React.Component {
  state = {
    visible: false,
  };

  onMenuClick = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {

    return (
      <div className="sidebar">
        { this.state.visible && 
          <div className="sidebar-panel">
            <Icon 
              className="sidebar-close-btn" 
              type="caret-left"
              onClick={this.onMenuClick} />
            <Toc />
          </div>
        }
        { !this.state.visible && 
        <Button 
          icon="menu" 
          className="sidebar__open-btn"
          onClick={this.onMenuClick} />
        }
      </div>
    );
  }
};

export default SiderPanel;