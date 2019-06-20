import axios from 'axios';

export const fetchFriends = () => {};

export const login = (username, password) => dispatch => {
  axios
    .post('http://localhost:5000/api/login', { username, password })
    .then(res => {
      localStorage.setItem('token', res.data.payload);
    })
    .catch(error => {
      console.log(error.message);
    });
};
