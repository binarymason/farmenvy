import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value})
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  render() {
    if (this.props.isAuthenticated) {
      return (<Redirect to="/" />);
    }

    return (
      <div>
        <h3>Please log in</h3>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <input
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button>submit</button>
      </div>
    );
  }
}

export default Login;
