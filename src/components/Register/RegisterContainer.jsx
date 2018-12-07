import React, { Component } from 'react';
import Register from './Register.jsx';
import axios from 'axios';

class RegisterContainer extends Component {
  register = user => {
    const userDetails = user;

    axios.post('http://localhost:7777/api/register', userDetails)
    .then(res => console.log(res));
  }

  render() {
    return (
      <Register register={this.register} />
    );
  }
};

export default RegisterContainer;
