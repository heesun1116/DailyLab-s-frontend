import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
  const fileInput = useRef();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = async (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm, avatar } = form;

    if ([username, password, passwordConfirm, avatar].includes('')) {
      setError('Please fill in all blanks.');
      return;
    }

    if (password !== passwordConfirm) {
      setError('The passwords do not match.');
      dispatch(changeField({ form: 'register', key: 'password', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'passwordConfirm', value: '' }),
      );
      return;
    }
    dispatch(register({ username, password, avatar }));
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      // when account name already exists
      if (authError.response.status === 409) {
        setError('Account name that already exists.');
        return;
      }
      // Other Reasons
      setError('register fail');
      return;
    }

    if (auth) {
      console.log('register success');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // Verify that the user value is set well
  useEffect(() => {
    if (user) {
      history.push('/'); // Go to Home Screen
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      fileInput={fileInput}
    />
  );
};

export default withRouter(RegisterForm);
