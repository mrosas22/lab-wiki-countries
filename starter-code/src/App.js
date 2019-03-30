import React, { Component } from 'react';
import CountryList from './CountryList';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="root">
          <div>
            <NavBar />
            <CountryList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
