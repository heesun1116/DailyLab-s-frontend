import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { withRouter } from 'react-router';
import { changeField, initializeForm, login } from '../../modules/auth';
import { check } from '../../modules/user';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  //event handler when input change
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };
  // event handler when form submits
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      //error
      setError('Login fail');
      return;
    }
    if (auth) {
      //'succes register'
      dispatch(check());
    }
  }, [auth, authError, dispatch]);
  // Verify that user values are set well

  useEffect(() => {
    if (user) {
      history.push('/');

      //stay logged in
      try {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('avatar', auth.avatar);
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [auth, history, user]);
  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginForm);
