import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Overview />
      </div>
    );
  }
}

export default App;
