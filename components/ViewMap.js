import React, { useState } from 'react'
import Map from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";

function ViewMap() {
    const [viewport, setViewport] = useState({
        latitude: 40.7506128964624,
        longitude: -74.02916420628654,
        zoom: 11
    })

  return (
    <Map
        initialViewState={viewport}
        style={{ width: "100%", height: "100%" }}
        mapStyle='mapbox://styles/nicogarbaccio/cled14w2n002x01o3dmlvav7t'
        mapboxAccessToken={process.env.mapbox_token}
    />
  )
}

export default ViewMap