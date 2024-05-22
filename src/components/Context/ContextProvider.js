import React,{useState} from 'react'
import {TokenContext} from './TokenContext';
import {DestinationContext} from './DestinationContext';
import {SourceContext} from './SourceContext';
// import  {GETTOKEN}  from'./Gettoken';


const ContextProvider= ({children})=> {
  const initializsource=()=>{
      
    const value =localStorage.getItem('source');
    return value?JSON.parse(value):null;

};
const initializsdestination=()=>{
      
  const value =localStorage.getItem('destination');
  return value?JSON.parse(value):null;

};
const initializstoken=()=>{
      
  const value =localStorage.getItem('token');
  return value?JSON.parse(value):null;

};
  const [token, setToken]=useState(initializstoken);
    const [source, setSource]=useState(initializsource);
    const [destination, setDestination]=useState(initializsdestination);
    const updateToken = (newValue) => {
      setToken(newValue);
    };
   
  
  return (
              <TokenContext.Provider value={{token, updateToken}}>
                  <DestinationContext.Provider value={{destination, setDestination}}>
                          <SourceContext.Provider value={{source, setSource}}>
                                {children}       
                          </SourceContext.Provider >
                  </DestinationContext.Provider >
              </TokenContext.Provider>
  )
}

export default ContextProvider




// import React, { createContext,useState } from 'react'

// export const DestinationContext= createContext(null);
// export const SourceContext= createContext(null);
// function Context() {
//     const [source, setSource]=useState("context source");
//     const [destination, setDestination]=useState("context destination");
//   return (
//    <DestinationContext.Provider value={{destination, setDestination}}>
//         <SourceContext.Provider value={{destination, setDestination}}>

            
//         </SourceContext.Provider >

//    </DestinationContext.Provider >
//   )
// }

// export default Context
