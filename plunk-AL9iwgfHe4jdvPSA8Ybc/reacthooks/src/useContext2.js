import React from "react";
import { useContext } from 'react';

// Create a Context
const NumberContext = React.createContext();
const SecondLayer = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

export default function App() {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <NumberContext.Provider value={42}>
      <SecondLayer.Provider value={66}>
        <div>
          <Display />
        </div>
      </SecondLayer.Provider>
    </NumberContext.Provider>
  );
}

// function Display() {
//   // Use the Consumer to grab the value from context
//   // Notice this component didn't get any props!
//   return (
//     <NumberContext.Consumer>
//       {value => (
//         <SecondLayer.Consumer>
//           {
//             layer => (
//               <div>The answer is {value}. This is second layer {layer}</div>
//             )
//           }
//         </SecondLayer.Consumer>
//       )}
//     </NumberContext.Consumer>
//   );
// }

function Display() {
  const value = useContext(NumberContext);
  const layer = useContext(SecondLayer);
  return (
    <div>This answer is {value}. This is second layer {layer}</div>
  )
}
