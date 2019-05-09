import React, { Component } from 'react';
import Register from './Register.jsx';
import api from '../../api.js';

class RegisterContainer extends Component {
  register = user => {
    api.register(user)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Register register={this.register} />
    );
  }
};

export default RegisterContainer;
