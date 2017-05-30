import React from "react";
import * as d3 from "d3";
import DataSeries from "./DataSeries.js";
import Chart from "./Chart.js"


export default class BarChart extends React.Component{
  

  static defaultProps = {
      width: 600,
      height: 300,
      
  }


  render() {
    var props = this.props;
    return (
      <Chart width={this.props.width} height={this.props.height}>
        <DataSeries data={this.props.data} width={this.props.width} height={this.props.height} color="purple" />
      </Chart>
    );
  }
}