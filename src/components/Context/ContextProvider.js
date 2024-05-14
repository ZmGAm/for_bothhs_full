import React,{useState} from 'react'
import {TokenContext} from './TokenContext';
import {DestinationContext} from './DestinationContext';
import {SourceContext} from './SourceContext';
// import  {GETTOKEN}  from'./Gettoken';


const ContextProvider= ({children})=> {
  const [token, setToken]=useState(null);
    const [source, setSource]=useState(null);
    const [destination, setDestination]=useState(null);
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
