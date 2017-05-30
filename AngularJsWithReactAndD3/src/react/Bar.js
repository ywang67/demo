
import React from "react";
import * as d3 from "d3";
export default class Bar extends React.Component {

  static defaultProps = {
      width: 0,
      height: 0,
      offset: 0
  }


  render() {
    return (
      <rect fill={this.props.color}
        width={this.props.width} height={this.props.height} 
        x={this.props.offset} y={this.props.availableHeight - this.props.height} />
    );
  }
}