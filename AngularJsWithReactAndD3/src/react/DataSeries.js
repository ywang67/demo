import React from "react";
import * as d3 from "d3";
import Bar from "./Bar.js";
import _ from "underscore"

export default class DataSeries extends React.Component{
    static defaultProps = {
            title: '',
            data: []
    }

        render() {
          var props = this.props;

          var yScale = d3.scale.linear()
            .domain([0, d3.max(this.props.data)])
            .range([0, this.props.height]);

          var xScale = d3.scale.ordinal()
            .domain(d3.range(this.props.data.length))
            .rangeRoundBands([0, this.props.width], 0.05);

          var bars = _.map(this.props.data, function(point, i) {
            return (
              <Bar height={yScale(point)} width={xScale.rangeBand()} offset={xScale(i)} availableHeight={props.height} color={props.color} key={i} />
            )
          });

          return (
            <g>{bars}</g>
          );
        }
}