import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";

class App extends Component {
  state = {
    usernames: [
      { userName: "Alex" }, 
      { userName: "" }],
  };

  userNameChangeHandler = (event) => {
    this.setState({
      usernames: [
        { userName: "Alex" }, 
        { userName: event.target.value }],
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput change={this.userNameChangeHandler} currentName={this.state.usernames[1].userName} />
        <UserOutput userName={this.state.usernames[0].userName} />
        <UserOutput userName={this.state.usernames[1].userName} />
        <UserOutput userName="Marti" />
      </div>
    );
  }
}

export default App;

// currentName={this.state.usernames[1].userName}


// {
/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
// }
