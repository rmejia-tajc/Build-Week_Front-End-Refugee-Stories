import React, { Component } from 'react';
import './App.css';

import { StoriesView } from '../views';

// import authenticate from './authentication';

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
        <StoriesView />
      </div>
    );
  }
}


// export default authenticate(App);

export default App;