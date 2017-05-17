import './App.css';
import './Icons.css';

import React, { Component } from 'react';

import Helmet from 'react-helmet';

import SplashTitle from './components/SplashTitle'
import LinkList from './components/LinkList'

class App extends Component {
  render() {
    return (
      <div className="content">
        <Helmet title="Evan Zarowitz" />
        <SplashTitle />
        <LinkList />
      </div>
    )
  }
}

export default App
