import React, { useState,axios,useEffect } from 'react';
import'mapbox-gl/dist/mapbox-gl.css';
import './design/home.css';
import ReactMapGl, { FullscreenControl, GeolocateControl, Marker, NavigationControl,Popup, Source,Layer,map } from 'react-map-gl';
// import data from '@mapbox/mapbox-gl-directions/src/reducers';
// import * as React from 'react';

function Map_with_Box() {
  const profile = 'mapbox/driving-traffic'; // Specify the desired profile
  // const origin = '-122.4194,37.7749'; // Coordinates of the starting point
  // const destination = '-100.4194,56.8975'; // Coordinates of the destination point
  const [coords, setCoords]=useState([])
  // const [profile, setProFile]=useState({pro})
  const [source, setSource]=useState([-73,42])
  // const [source, setSource]=useState([-122.4194,37.7749])
  // const [source, setSource]=useState([31.561920,74.348083])
  // const [destination, setDestination]=useState([-100.4194,56.8975])
  const [destination, setDestination]=useState([-73,42.7])
   const map_api_key = 'pk.eyJ1IjoiYnVnYXRpLTg5IiwiYSI6ImNsdGdyOHZ4MzE0ZzYycW81MWpjeHhhejQifQ.LbioMVb5ZX44r9MrOMAijg'; // Coordinates of the destination point 
  const direction_api = `https://api.mapbox.com/directions/v5/${profile}/${source[0]},${source[1]};${destination[0]},${destination[1]}?steps=true&geometries=geojson&annotations=closure&access_token=${map_api_key}`;
  
  
  const [viewState, setViewState] = useState({

    latitude: 31.561920,
    longitude:74.348083,
    zoom:14
  });
  const [showPopup, setShowPopup] = useState(true);
  // const[data,setData]=useState([])
  const geteachdata= async()=>{

      const result =await fetch(direction_api)
      const data= await result.json();
      const coord = data?.routes?.[0]?.geometry?.coordinates;
      // const an = data?.routes?.[0]?.legs;
      console.log("\n after fetching routes\n",data);
      console.log("\n after fetching coord\n",coord);
      // console.log("\n after fetching anotaions\n",an);
      setCoords([coord]);
      console.log("\n after setting coords\n",coords);
      
  }
  // async function fetchData(direction_api) {
  //   try {
  //     const response = await fetch(direction_api);
  //     const data =  response.json();
  //     return data;
  //   } catch (error) {
  //     console.error('2 An error occurred:', error);
  //   }
  // }
  

      useEffect(()=>{

        // console.log(fetchData(direction_api));
        // fetchData().then((data) => {
        //   if (!data || !data.routes || !data.routes[0] || !data.routes[0].geometry) {
        //     throw new Error('3 Data is not in the expected format');
        //   }
        //   const coords = data.routes.geometry.coordinates[0];
        //   console.log(coords);
        //   // Use 'coords' here
        // }).catch((error) => {
        //   console.error('1 An error occurred:', error);
        // });

        geteachdata();
      },[source,destination]);

      // const geojson={
      //   "type":"FeatureCollection",
      //   "features":[{
      //     "type":"feature",
      //     "geometry":{
      //       "type":"LinetString",
      //       "coordinates":[
      //           ...coords
      //       ]
      //     }
      //   }]
      // }

      const geojson={
        "type":"FeatureCollection",
        "features":[{
          "type":"feature",
          "geometry":{
            "type":"LineString",
            "coordinates":[
                ...coords
            ]
          }
        }]
      }
      const sourcepoint={
        "type":"FeatureCollection",
        "features":[{
          "type":"feature",
          "geometry":{
            "type":"LineString",
            "coordinates":[
                source
            ]
          }
        }]
      }
      const destinationpoint={
        "type":"FeatureCollection",
        "features":[{
          "type":"feature",
          "geometry":{
            "type":"LineString",
            "coordinates":[
                destination
            ]
          }
        }]
      }
      const linestyle={
        id:'rodaLayer',
        type:'line',
        layout:{
          "line-join":"round",
          "line-cap":"round",
        },
        paint:{
          "line-color":"blue",
          "line-width":4,
          "line-opacity":0.75
        }
      };
    //  const hanldleClick=(e)=>{
    //   const newDesti=e.lngLat
    //   // const destiPoint=Object.keys(newDesti).map((item,i)=>newDesti[item])
    //   // console.log(destiPoint);
    //   console.log(newDesti);
    //   // setDestination(destiPoint)
    //  }
     const handleClick = (e) => {
      const newDesti = e.lngLat;
      console.log(newDesti);
      // You can uncomment the following lines if needed
      const destiPoint = Object.keys(newDesti).map((item, i) => newDesti[item]);
      console.log(destiPoint);
      // setDestination(destiPoint);
  };
  return (
    <ReactMapGl
      // {...viewport}
      // mapboxApiAccessToken="pk.eyJ1IjoiYnVnYXRpLTg5IiwiYSI6ImNsdGdyOHZ4MzE0ZzYycW81MWpjeHhhejQifQ.LbioMVb5ZX44r9MrOMAijg"
      // mapStyle=""
      {...viewState}
        onClick={{handleClick}}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/bugati-89/clthgkqbx00bz01pkh1sa4u8p"
        // mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKENS}
        mapboxAccessToken= {map_api_key}
      // onViewportChange={nextViewport => setViewport(nextViewport)}
      style={{width: "100vw",height: "100vh",}}
    >
    {showPopup && (
      <Popup longitude={-100} latitude={40}
        anchor="bottom"
        onClose={() => setShowPopup(false)}>
        You are here
      </Popup>)}
        {/* <Source id="routesSource" type="geojson" data={geojson}>
        <Layer   {...linestyle} />
        </Source> */}
      <GeolocateControl/>
      <FullscreenControl/>
      <NavigationControl/>
      <Marker latitude={source[1]} longitude={source[0]} />
      {/* <Marker latitude='70.6789' longitude='100.7787' /> */}
      {/* <Marker latitude={destination[1]} longitude={destination[0]} /> */}
    </ReactMapGl>
  );
}

export default Map_with_Box;
