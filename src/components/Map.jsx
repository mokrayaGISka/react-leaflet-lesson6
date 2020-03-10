import React from "react";
import L from 'leaflet';
import { Map, 
  TileLayer, 
  Marker, 
  Popup, 
  ZoomControl,
  VideoOverlay } from "react-leaflet";
import Basemap from './Basemaps';
import GeojsonLayer from '../layers/GeojsonLayerFunc';
import VelocityLayer from "../layers/VelocityLayer";
import '../css/Map.css';
import { connect } from "react-redux";

// указываем путь к файлам marker
L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapComponent extends React.Component {
  state = {
    lat: 55.702868,
    lng: 37.530865,
    zoom: 3,
    basemap: 'dark',
  };

  onBMChange = (bm) => {
    this.setState({
      basemap: bm
    });
  }

  render() {
    // console.log(this.props);
    const layersTypes = {
      'geojson': GeojsonLayer,
      'velocityLayer': VelocityLayer,
      'videoOverlay': VideoOverlay
    }
    let center = [this.state.lat, this.state.lng];

    const basemapsDict = {
      osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
      cycle: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
    }

    return (
        <Map
          zoomControl={false}
          zoom={this.state.zoom}
          center={center}
          minZoom={2}
          className="map">
            
          <ZoomControl position={'bottomright'} />
          
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={basemapsDict[this.state.basemap]}
          />
          <Basemap basemap={this.state.basemap} onChange={this.onBMChange} />

          {this.props.layers.map( l => {
            if (l.visible) {
              let LayerComp = layersTypes[l.type];
              return (
                <LayerComp key={l.id} {...l.options}/>
              )
            }
          })}

        
          <Marker position={center}>
            <Popup><div>Выбрана тема {this.state.basemap}</div></Popup>
          </Marker>
        </Map>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    layers: state.layers
  };
};

export default connect(mapStateToProps)(MapComponent);