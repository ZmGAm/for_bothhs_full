import React,{useState} from 'react'
import {DestinationContext} from './DestinationContext';
import {SourceContext} from './SourceContext';

const ContextProvider= ({children})=> {
    const [source, setSource]=useState(null);
    const [destination, setDestination]=useState(null);
  return (
    <DestinationContext.Provider value={{destination, setDestination}}>
            <SourceContext.Provider value={{source, setSource}}>
                {children}       
            </SourceContext.Provider >
    </DestinationContext.Provider >
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
