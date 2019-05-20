import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const Bar = (title) => {
  console.log(title);
  return (
    <div>{title.title}</div>
  )
};

class Foo extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);

    this.state = {
      title: 'This is stat from Foo.',
    };
  }

  render() {
    const { title } = this.state;
    const { children } = this.props;
    return (
      <div>
        <div>This is Foo component, let's render props!</div>
        <div>
          {children(title)}
        </div>
      </div>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>This is App Root!</div>
        <Foo
          children={(title) => {

            return <Bar title={title} />;
          }}
        />
      </div>
    )
  }
}
