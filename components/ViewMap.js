import { useState } from "react";
import getCenter from "geolib/es/getCenter";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function ViewMap({ searchResults }) {

    const [popupInfo, setPopupInfo] = useState(null);

    // Map through search results to get the latitude and longitude to then get the center
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    // Calculate the center of the coordinates array and store it in the center variable
    const center = getCenter(coordinates);

    // Use the useState hook to set the initial viewport state.
    // The viewport state is an object containing the latitude, longitude, zoom, bearing, and pitch of the map.
    // Zoom is set to 9 to make a larger map appear on search
    const [viewport, setViewport] = useState({
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 9,
        bearing: 0,
        pitch: 0,
    });
    return (
        // Set up the Map component with an initial viewport set to the viewport variable declared above.
        <Map
        initialViewState={viewport}
        style={{ width: "100%", height: "100%" }}
        // The mapboxAccessToken is set to the value of the mapbox_token environment variable
        mapboxAccessToken={process.env.mapbox_token}
        // Taken from Mapbox when custom map is saved
        mapStyle="mapbox://styles/nicogarbaccio/cled14w2n002x01o3dmlvav7t"
        >
        {/* Loop through search results and create a marker for each item in the array
        The marker is positioned using the item's longitude and latitude, and when the marker is clicked
        The popupInfo state is set to the item.
        The click event is stopped from propagating to the map to prevent the popup from closing. */}
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
        {/* {/* Check if the variable popupInfo is truthy. If it is, render a Popup component. */}
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