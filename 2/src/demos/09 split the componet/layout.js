/**
 * Created by Owner on 2017/4/25.
 */
import React from "../../../js/react";


export class Layout extends React.Component {
    constructor() {
        super();
        this.name = "Will";
    }

    render() {
        return (
            <h1>It is {this.name}</h1>
        );
    }
}