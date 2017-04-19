import './App.css'

import React, { Component } from 'react'

import Helmet from 'react-helmet'

class App extends Component {
  render() {
    return (
      <div className="content">
        <Helmet title="Evan Zarowitz" />
        <h1>Hey, I’m Evan, <br/> a developer specializing in </h1>


      </div>
    )
  }
}

export default App
