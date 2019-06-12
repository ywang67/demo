// HOC version.
import React from 'react';
import catImg from './cat.jpg';

// class Cat extends React.Component {
//     render() {
//       const mouse = this.props.mouse
//       return (
//         <img src={catImg} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
//       );
//     }
//   }
// function withMouse(Component) {
//     return class extends React.Component {
//         constructor(props) {
//             super(props);
//             this.handleMouseMove = this.handleMouseMove.bind(this);
//             this.state = { x: 0, y: 0 };
//           }
//
//           handleMouseMove(event) {
//             this.setState({
//               x: event.clientX,
//               y: event.clientY
//             });
//           }
//
//       render() {
//         return (
//           <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//             <Component mouse={this.state} />
//           </div>
//           )
//       }
//     }
//   }
// export default withMouse(Cat);


// renderProps.

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>

        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}
