import { useState, useEffect, useCallback } from 'react';
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
  const [viewport, setViewport] = useState({
    width: 600,
    height: 400,
    zoom: 12,
    ...DEFAULT_LOCATION,
  });

  const [selectedPlace, setSelectedPlace] = useState(null);

  const fitViewportFromPlaces = useCallback((places) => {
    const feature = lineString(
      places.map(({ lat, lng }) => [lng, lat]),
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
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
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
  );
}

Map.propTypes = {
  places: PropTypes.array,
};

export default Map;
