import React from 'react';

import Map from 'devextreme-react/map';




class Mp extends React.Component {
  constructor(props) {
    super(props);
    
    this.keys = {
      // Specify your API keys for each map provider:
      bing: "Ao7qArQm_vYspdR7WdHjhlW68uQMd-51Hv2Y6bW3JF9rgBOHT4mHdFDq15ENmsk4",
      // google: "YOUR_GOOGLE_MAPS_API_KEY",
      // googleStatic: "YOUR_GOOGLE_STATIC_MAPS_API_KEY"
    };
    

    
  }

  

  render() {
    return (
      <div>
        <Map
          defaultCenter="galle,srilanka"
          defaultZoom={14}
          apiKey={this.keys}
          height={330}
          width="110%"
          provider="bing"
          onClick={(e) => {
            console.log("latitude = ", e.latLng.lat());
            console.log("longtitude = ", e.latLng.lng());
          }}
          >
        </Map>

        
        
      </div>
    );
  }
}
export default Mp;
