import React, { Component } from 'react';
import './App.css';

import authenticate from './Components/authentication/authentication';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username
    }
  };


  componentDidMount() {
    localStorage.setItem("username", this.state.username)
  }


  render() {
    return (
      <div className="App">
        <h1>App Test</h1>
      </div>
    );
  }
}


export default authenticate(App);