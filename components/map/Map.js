import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

const DEFAULT_LOCATION = {
  latitude: 48.117268,
  longitude: -1.677793,
};

function MarkerIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" {...props}>
      <defs />
      <circle
        cx="8"
        cy="8"
        r="8"
        fill="#28EFD1"
        fillOpacity="0.9"
        stroke="#FFF"
      />
    </svg>
  );
}

function Map({ places }) {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    zoom: 11,
    ...DEFAULT_LOCATION,
  });

  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedPlace(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
    >
      {places &&
        places.map((place, index) => {
          return (
            <Marker key={index} latitude={place.lat} longitude={place.lng}>
              <MarkerIcon
                onClick={(e) => {
                  e.preventDefault(e);
                  setSelectedPlace(place);
                }}
              />
            </Marker>
          );
        })}
      {selectedPlace && (
        <Popup
          latitude={selectedPlace.lat}
          longitude={selectedPlace.lng}
          onClose={() => setSelectedPlace(null)}
        >
          <div>
            <h2>{selectedPlace.name}</h2>
          </div>
        </Popup>
      )}
    </ReactMapGL>
  );
}

Map.propTypes = {
  places: PropTypes.array,
};

export default Map;
