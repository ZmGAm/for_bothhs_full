import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
  const [sourceCoordinates, setSourceCoordinates] = useState([]);
  const [destinationCoordinates, setDestinationCoordinates] = useState([]);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnVnYXRpLTg5IiwiYSI6ImNsdGdyOHZ4MzE0ZzYycW81MWpjeHhhejQifQ.LbioMVb5ZX44r9MrOMAijg';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/bugati-89/clthgkqbx00bz01pkh1sa4u8p',
      center: [-79.4512, 43.6568],
      zoom: 13
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/cycling',
      // geometry:
      geometry:'geojson'
    });

    map.addControl(directions, 'top-left');

    // Listen for the `route` event to get the coordinates of the source and destination
    // directions.on('route', (event) => {
    //   const route = event.route;
    //   const sourceCoords = route[0].geometry.coordinates; // Coordinates of the source
    //   const destinationCoords = route[route.length - 1].geometry.coordinates; // Coordinates of the destination

    //   // Update source and destination coordinates using useState
    //   setSourceCoordinates({sourceCoords});
    //   setDestinationCoordinates(destinationCoords);
    //   console.log(sourceCoordinates);
    //   console.log(destinationCoordinates);
    // });
    directions.on('route', (event) => {
      const routes = event.route;
      if (routes && routes.length > 0) {
        const route = routes[0]; // Get the first route in the array
        const sourceCoords = route.geometry.coordinates[0]; // Coordinates of the source
        const destinationCoords = route.geometry.coordinates[route.geometry.coordinates.length - 1]; // Coordinates of the destination
    
        // Update source and destination coordinates using useState
        setSourceCoordinates(sourceCoords);
        setDestinationCoordinates(destinationCoords);
        // console.log(sourceCoordinates);
      // console.log(destinationCoordinates);
      } else {
        console.error('No routes found.');
      }
    });

    // Clean up
    return () => map.remove();
  }, []);

  return (<>
    <div>
      <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} />
    </div>
    <div className='show coordinates' style={{position:'relative',top:'100px',left:'500px'}}>
        <p>Source Coordinates: {JSON.stringify(sourceCoordinates)}</p>
      <p>Destination Coordinates: {JSON.stringify(destinationCoordinates)}</p>
      </div>
  </>
  );
};

export default MapComponent;
