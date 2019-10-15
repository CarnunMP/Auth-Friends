import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import Login from "./components/Login";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFormValues: {
        username: "",
        password: "",
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Route 
          exact path="/" 
          render={() => 
            <Login loginFormValues={this.state.loginFormValues} />} 
        />
      </div>
    ) 
  }
}
