import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
// manage form by redux
const CHANGED_FIELD = 'auth/CHANGED_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// api redux

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] =
  createRequestActionTypes('auth/REGISTER');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('auth/LOGIN');

export const changeField = createAction(
  CHANGED_FIELD,
  ({ form, key, value }) => ({
    form, //register ,login
    key, //username, password, passwordConfirm ,avatar
    value, // value that we want to change
  }),
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const register = createAction(
  REGISTER,
  ({ username, password, avatar }) => ({
    username,
    password,
    avatar,
  }),
);

export const login = createAction(LOGIN, ({ username, password }) => ({
  username,
  password,
}));

// create saga
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}
// create state
const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
    avatar: '',
  },
  login: {
    username: '',
    password: '',
    avatar: '',
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGED_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        //produce : The first parameter is the state you want to modify, and the second parameter is a function that defines how to update the state.
        draft[form][key] = value; // ex) 'state.register.username' will change.
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    //success register
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    //fail register
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    //success login
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // fail login
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);
export default auth;
