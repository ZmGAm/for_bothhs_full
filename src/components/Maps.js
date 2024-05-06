import React  from 'react';
import {LoadScript,GoogleMap, Marker,useJsApiLoader,google}  from '@react-google-maps/api';
import './design/home.css';

import { Loader } from "@googlemaps/js-api-loader";
import { useState } from 'react';

function Maps() {
  const [mapIsLoad, setMapIsLoad] = useState(false);

    // const{loading}=useJsApiLoader({
    //     googleMapsApiKey: process.env.REACT_APP_FOURTH_API_KEY,
    //   })
    //   const mapStyles = {
    //     width: '100%',
    //     height: '100%'
    //   };
    const handlMapload=()=>{
      setMapIsLoad(true);
    };
  return (
             <>maps

{/* <iframe
  width="600"
  height="450"
  style={{border:0}}
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAoJwUr3rjwlC4FgP7eDnU6OpvQkzmCj-8
    &q=Space+Needle,Seattle+WA">
</iframe> */}

             <LoadScript googleMapsApiKey='AIzaSyAoJwUr3rjwlC4FgP7eDnU6OpvQkzmCj-8' >
              <GoogleMap  Center={{ lat: 40.712776, lng: -74.005974 }} 
              zoom={15} 
              style={{width:'100%',height:'100%'}} 
              onLoad={handlMapload}
               >


              {/* <Marker initialCenter={{ lat: -1.2884, lng: 36.8233 }}/> */}
              </GoogleMap>

              </LoadScript >
              
              </>
  )
}

export default Maps;