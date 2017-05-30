import React from "react";
import * as d3 from "d3";

export default class Chart extends React.Component {
	render() {
          return (
            <svg width={this.props.width} height={this.props.height}>{this.props.children}</svg>
          );
    }
}
