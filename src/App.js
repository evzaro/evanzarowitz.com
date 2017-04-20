import './App.css';

import React, { Component } from 'react';

import Helmet from 'react-helmet';

import SplashTitle from './components/SplashTitle'

class App extends Component {
  render() {
    return (
      <div className="content">
        <Helmet title="Evan Zarowitz" />
        <SplashTitle />


      </div>
    )
  }
}

export default App
