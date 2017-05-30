import React from "react";
import * as d3 from "d3";

export default class Layout extends React.Component{
	static defaultProps = {
 		width: 800,
        height: 300,
        chartId: 'v1_chart'
  	}
	constructor(props){
		super(props);
		this.state = {
			 width:this.props.width,
			 data: this.props.data
		}

	}

	render(){	

		var data = this.state.data;
 var w = 800;
    var h = 450;
    var margin = {
        top: 40,
        bottom: 40,
        left: 60,
        right: 40
    };
    var width = w - margin.left - margin.right;
    var height = h - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
            .domain(data.map(function(entry){
                return entry.key;
            }))
            .rangeBands([0, width]);
    var y = d3.scale.linear()
            .domain([0, d3.max(data, function(d){
                return d.value;
            })])
            .range([height, 0]);
    var ordinalColorScale = d3.scale.category20();
    var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");
    var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var transform='translate(' + margin.left + ',' + margin.top + ')';
		return (
 			<div>
                <svg id={this.props.chartId} width={this.state.width} height={this.props.height}>

                    <g transform={transform}>
                        
                    </g>
                </svg>
            </div>
		);
	}
}