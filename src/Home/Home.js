import React, { Component } from 'react';
import logo from '../logo.svg';
import Hi from './Hi';

class Home extends Component {

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mes projets React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* component pour le form */}
        <Hi />
        <ul className="list-group">
          <li className="list-group-item"><a href="/todo">Todo list</a></li>
          <li className="list-group-item"><a href="/about">About</a></li>
          <li className="list-group-item"><a href="/ptdr">Not found</a></li>
        </ul>
      </div>
    );
  }
}

export default Home;
