import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  WebMercatorViewport,
} from 'react-map-gl';

import { lineString } from '@turf/helpers';
import bbox from '@turf/bbox';
import Pins from './Pins';

const DEFAULT_LOCATION = {
  latitude: 48.117268,
  longitude: -1.677793,
};

const fullscreenControlStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px',
};

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px',
};

const scaleControlStyle = {
  position: 'absolute',
  bottom: 36,
  left: 0,
  padding: '10px',
};

function Map({ places }) {
  const mapRef = useRef(null);
  const [viewport, setViewport] = useState({
    width: 540,
    height: 540,
    zoom: 12,
    ...DEFAULT_LOCATION,
  });

  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleViewportChange = (nextViewport) => {
    setViewport({ ...viewport, ...nextViewport });
  };

  const fitViewportFromPlaces = useCallback(() => {
    const placesArray =
      places.length < 2
        ? [{ lat: 48.117268, lng: -1.677793, title: 'hey' }, ...places]
        : places;

    const feature = lineString(
      placesArray.map(({ lat, lng }) => [lng, lat]),
      { name: 'bounds' }
    );
    const [minLng, minLat, maxLng, maxLat] = bbox(feature);

    const { longitude, latitude, zoom } = new WebMercatorViewport(
      viewport
    ).fitBounds(
      [
        [minLng, minLat],
        [maxLng, maxLat],
      ],
      {
        padding: 80,
      }
    );

    setViewport({
      ...viewport,
      longitude,
      latitude,
      zoom,
      transitionDuration: 1000,
    });
  }, []);

  useEffect(() => {
    fitViewportFromPlaces(places);
  }, [places, fitViewportFromPlaces]);

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
    <div className="embed-responsive aspect-ratio-square">
      <ReactMapGL
        {...viewport}
        ref={mapRef}
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        className="embed-responsive-item"
      >
        <Pins places={places} onClick={setSelectedPlace} />
        {selectedPlace && (
          <Popup
            tipSize={5}
            anchor="top"
            closeOnClick={false}
            latitude={selectedPlace.lat}
            longitude={selectedPlace.lng}
            onClose={() => setSelectedPlace(null)}
          >
            <div>
              <h2>{selectedPlace.name}</h2>
            </div>
          </Popup>
        )}
        <div style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        <div style={navStyle}>
          <NavigationControl />
        </div>
        <div style={scaleControlStyle}>
          <ScaleControl />
        </div>
      </ReactMapGL>
    </div>
  );
}

Map.propTypes = {
  places: PropTypes.array,
};

export default Map;
