import React, { Component } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
class Login extends Component {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
    state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    login = e => {
      e.preventDefault();
      axiosWithAuth()
        .post("/login", this.state.credentials)
        .then(res => {
          localStorage.setItem("token", res.data.payload);
          this.props.history.push("/colors");
        })
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div>
          <h1>Welcome to the Bubble App!</h1>
  
          <form onSubmit={this.login} className="form">
            <input
              type="text"
              name="username"
              placeholder="type user"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
  
            <input
              type="password"
              name="password"
              placeholder="type password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
  
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }
  }
  
  export default Login;