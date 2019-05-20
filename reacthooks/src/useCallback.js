import React, { useCallback, useState, useRef, useEffect, useMemo } from "react";

// class App extends React.PureComponent {
//   constructor() {
//     super();
//
//     this.state = {
//       test: 0,
//     };
//   }
//
//   doSomething = () => {
//     console.log('do something');
//   }
//
//   setTest = () => {
//     this.setState({
//       test: this.state.test + 1,
//     });
//   }
//
//   render() {
//     // return <AppLogic />;
//     return (
//       <div>
//         <div>This is start value {this.state.test}. This is previous value {123}</div>
//         <SomeComponent
//           doSomething={() => this.doSomething()}
//         >
//           <div>test here!</div>
//         </SomeComponent>
//         <button onClick={this.setTest}>
//           Click me!
//         </button>
//       </div>
//     )
//   }
// }

const App = () => {
  const [ test, setTest ] = useState(0);

  const preTestRef = useRef();

  useEffect(() => {
    preTestRef.current = test;
  }, [test]);
  const preTest = preTestRef.current === undefined ? 'not start yet' : preTestRef.current;

  const doSomething = useMemo(() => {
    console.log('do something');
  }, []);

  // return (
  //   <div>
  //     <div>This is start value {test}. This is previous value {preTest}</div>
  //     <SomeComponent
  //       style={{ fontSize: 14 }}
  //       doSomething={ () => { console.log('do something'); }}
  //     />
  //     <button onClick={() => setTest(test + 1)}>
  //       Click me!
  //     </button>
  //   </div>
  // )

  return (
    <div>
      <div>This is start value {test}. This is previous value {preTest}</div>
      <SomeComponent
        doSomething={doSomething}
      >
        <div>test here!</div>
      </SomeComponent>
      <button onClick={() => setTest(test + 1)}>
        Click me!
      </button>
    </div>
  )
}

class SomeComponent extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount(props) {

  }

  render() {
    return (
      <div>
        <div>{this.props.doSomething}</div>
        <div>{this.props.children}</div>
        <div>This is child component render.</div>
      </div>
    )
  }
}

export default App;
