import React from 'react';
import { Button, Row, Col } from 'antd';
import '../css/Basemaps.css';

class Basemap extends React.Component {
  state = {
    basemapsOpen: false,
    activeBm: 'dark'
  }

  onBmClick = (bm) => {
    this.setState({activeBm: bm});
    this.props.onChange(bm);
  }
  
  onBmBtnClick = () => {
    this.setState({basemapsOpen: !this.state.basemapsOpen});
  }

  render() {
    return (
      <div className="basemaps-container">
        <Button 
          icon="appstore" 
          className="basemap-open-btn"
          onClick={this.onBmBtnClick} />
        {this.state.basemapsOpen && 
          <div className="basemaps-select">
            <div className="basemaps-title">Базовые карты</div>
            <Row>
              <Col span={12} onClick={() => {this.onBmClick("osm")}}>
                <img 
                  src="/images/osm.png" 
                  className={this.state.activeBm==='osm' ? "active" : ""} 
                  alt="osm"
                />
                <p className="basemaps-image-title">OSM</p>
              </Col>
              <Col span={12} onClick={() => {this.onBmClick("hot")}}>
                <img 
                  src="/images/hot.png" 
                  className={this.state.activeBm==='hot' ? "active" : ""}
                  alt="hot" 
                />
                <p className="basemaps-image-title">HOT</p>
              </Col>
            </Row>
            <Row>
              <Col span={12} onClick={() => {this.onBmClick("dark")}}>
                <img 
                  src="/images/dark.png" 
                  className={this.state.activeBm==='dark' ? "active" : ""} 
                  alt="dark"
                />
                <p className="basemaps-image-title">DARK</p>
              </Col>
              <Col span={12} onClick={() => {this.onBmClick("cycle")}}>
                <img 
                  src="/images/cycle.png" 
                  className={this.state.activeBm==='cycle' ? "active" : ""}
                  alt="cycle" 
                />
                <p className="basemaps-image-title">CYCLE</p>
              </Col>
            </Row>
          </div>
        }
      </div>
    );
  }
};

export default Basemap;