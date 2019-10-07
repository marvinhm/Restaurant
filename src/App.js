import React, { Component } from 'react';

export class App extends Component {

  state = {
    user: "User1"
  }

  render() {
    return (
      <div className="hello">
        <h1>Hello { this.state.user }</h1>
      </div>
    );
  }
}

export default App;
