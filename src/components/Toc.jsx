import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import '../css/Toc.css';
import { Typography, Switch, List } from 'antd';
import { toggleLayer } from "../actions/index";

const { Title } = Typography;



class Toc extends React.Component {
  state = {
    data: []
  }

  componentDidMount () {
    let data = this.props.layers.filter( l => {
      return (l.toggleable)
    });
    this.setState({data: data});
  };

  onChange = (id) => {
    let lyr = this.props.layers.filter( l => {
      return (l.id === id)
    })[0];
    this.props.switchLayer(lyr);
  };


  render() {

    return (
      <div className="toc">
        <Title level={3}>Группы слоев</Title>
        <List
          itemLayout="horizontal"
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.name}
                description={item.description}
              />
              <Switch defaultChecked={item.visible} onChange={() => {this.onChange(item.id)}} />
            </List.Item>
          )}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    layers: state.layers
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({switchLayer: toggleLayer}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Toc);