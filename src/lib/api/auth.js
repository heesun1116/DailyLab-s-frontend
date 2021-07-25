import client from './client';

//login

export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password });

//register
export const register = ({ username, password, avatar }) =>
  client.post('/api/auth/register', { username, password, avatar });
// check login statue
export const check = () => client.get('/api/auth/check');
//logout
export const logout = () => client.post('/api/auth/logout');
