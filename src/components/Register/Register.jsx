import React, { Component } from 'react';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.register(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Register form</h2>
        <input name="name" value={this.state.name} placeholder="Name" onChange={this.handleChange} />
        <input name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} />
        <input name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
};

export default Register;
