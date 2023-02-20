import { useState } from "react";
import getCenter from "geolib/es/getCenter";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function ViewMap({ searchResults }) {

    const [popupInfo, setPopupInfo] = useState(null);

    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    const center = getCenter(coordinates);

    // Use the useState hook to set the initial viewport state.
    // The viewport state is an object containing the latitude, longitude, zoom, bearing, and pitch of the map.
    const [viewport, setViewport] = useState({
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
        bearing: 0,
        pitch: 0,
    });

    return (
        <Map
        initialViewState={viewport}
        style={{ width: "100%", height: "100%" }}
        mapboxAccessToken={process.env.mapbox_token}
        mapStyle="mapbox://styles/nicogarbaccio/cled14w2n002x01o3dmlvav7t"
        >
        {searchResults?.map((item) => (
            <Marker
            key={item.long}
            longitude={item.long}
            latitude={item.lat}
            anchor="bottom"
            onClick={(e) => {
                // If the user lets the click event propagates to the map, it will immediately close the popup
                // with `closeOnClick: true`
                e.originalEvent.stopPropagation();
                setPopupInfo(item);
            }}
            >
            <div className="bg-white px-2 py-1 rounded-2xl shadow-lg cursor-pointer active:bg-black ">
                <p className="text-gray-900 font-semibold text-lg active:text-white">
                {item.price.replace("/ night", "")}📌
                </p>
            </div>
            </Marker>
        ))}
        {/* The popup that shows when the user clicks on a marker */}
        {popupInfo && (
            <Popup
            anchor="top"
            longitude={Number(popupInfo.long)}
            latitude={Number(popupInfo.lat)}
            onClose={() => setPopupInfo(null)}
            >
            <div className="bg-white flex items-center">
                <p className="text-xs text-gray-500 pr-2">{popupInfo.title}</p>
            </div>
            </Popup>
        )}
        </Map>
    )
}

export default ViewMap