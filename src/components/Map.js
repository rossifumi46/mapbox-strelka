import './Map.css';
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import dataTest from '../points.json';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

function Map(props) {
  const data = dataTest.features.slice(0, 20);
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const [ points, setPoints ] = useState([]);

  const mapContainerRef = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: data[0].geometry.coordinates,
      zoom: 13,
    });
    setPoints(data);

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    data.forEach(result => {
      const { geometry } = result;

      const marker = new mapboxgl.Marker()
        .setLngLat(geometry.coordinates)
        .addTo(map);
      marker.getElement().addEventListener('click', () => props.onClick(result.properties.name));
    });

    return () => map.remove();
  }, []);

  return (
    <div className="map">
      <div className="map__left-column">
        <div className="points">
          {points && points.map((item) => {
            return (
              <div className="point" onClick={() => props.onClick(item.properties.name)}>
                <h3 className="title">{item.properties.name}</h3>
              </div>
            )
          })}
        </div>
      </div>
      <div className="map__right-column">
        <div className="map-container" ref={mapContainerRef} />
      </div>
    </div>
  )
}

export default Map;