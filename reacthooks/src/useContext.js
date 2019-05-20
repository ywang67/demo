import React, { createContext, useContext } from 'react';

import './App.css';

const ThemeContext = createContext(null);

export default class App extends React.Component {
    render() {
      return (
          <ThemeContext.Provider value="light">
              <Example />
          </ThemeContext.Provider>
      )
    }
}

 const Example = () => {
    const context = useContext(ThemeContext);

    return (
      <div>Example 组件：当前 theme 是：{ context }</div>
    )
}

// Before react hooks, with createContext.

// const { Consumer, Provider } = createContext(null);
//
// export default class App extends React.Component {
//   render() {
//     return (
//       <Provider value={"grey"}>
//         <Example />
//       </Provider>
//     )
//   }
// }
//
// const Example = () => (
//   <Consumer>
//     {value => <div>This is color is {value}</div>}
//   </Consumer>
// )
