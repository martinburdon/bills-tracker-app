import axios from 'axios';
const api = 'http://localhost:7777/api';

export default {
  fetchData(path = '', options = {}) {
    return new Promise((resolve, reject) => {
      axios.post(`${api}/${path}`, options)
      .then(response => resolve(response.data.message))
      .catch(({ response }) => reject(this.formatError(response.data.error.message)));
    });
  },

  register(options) {
    return this.fetchData('register', options).then(data => data);
  },

  formatError(message) {
    const code = message.split(' ')[0];
    switch (code) {
      case 'E11000':
        return 'There is already an account registered with that email address';
      default:
        return '🚨 An error occurred'
    }
  }
}
