import axios from 'axios';

// const client = axios.create();
const client = axios.get('https://daily-labs.herokuapp.com/');

// client.default.baseURL = 'https://daily-labs.herokuapp.com/';
export default client;
