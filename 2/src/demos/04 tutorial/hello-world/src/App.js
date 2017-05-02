import React, { Component } from 'react';

class App extends Component {
    render() {
        const {data} = this.props;

        const nameList = data.map(name => {
            return(
                <li key={name.id} className = {name.sex}>{name.name}</li>
            )
            })
        return (
            <ul>
                {nameList}
            </ul>
    );
    }
}

export default App;
