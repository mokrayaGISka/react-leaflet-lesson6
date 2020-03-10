import { MapLayer } from 'react-leaflet';
import 'leaflet-velocity';
import L from 'leaflet';

export default class VelocityLayer extends MapLayer {
  createLeafletElement (props) {
    let velocityLayer = L.velocityLayer({
      displayValues: false,
      displayOptions: {
        velocityType: 'Global Wind',
        position: 'bottomleft',
        emptyString: 'No velocity data',
        angleConvention: 'bearingCW',
        displayPosition: 'bottomleft',
        displayEmptyString: 'No velocity data',
        speedUnit: 'kt'
      },

      // OPTIONAL
      minVelocity: 0,          // used to align color scale
      maxVelocity: 10,         // used to align color scale
      velocityScale: 0.01,    // modifier for particle animations, arbitrarily defaults to 0.005
      //colorScale: []       // define your own array of hex/rgb colors
    });

    this.leafletElement = velocityLayer;

    this.loadData(props.url);

    return this.leafletElement;
  }

  loadData (url) {
    let request = fetch(url);

    request
    .then(r => r.json())
    .then(data => {
      if (this.leafletElement) {
        this.leafletElement.setData(data);
      }
    });
  }
}
