import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import './index.css';
import rootReducer, { rootSaga } from './modules/index';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from 'redux-saga';
import { check, tempSetAvatar, tempSetUser } from './modules/user';
import { HelmetProvider } from 'react-helmet-async';
import dotenv from 'dotenv';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
//stay logged in
const loadUser = () => {
  try {
    const user = localStorage.getItem('user');
    const avatar = localStorage.getItem('avatar');
    if (!user) return; // Do nothing if you are not logged in
    store.dispatch(tempSetUser(user));
    store.dispatch(tempSetAvatar(avatar));
    store.dispatch(check());
  } catch (e) {
    console.log('localstorage is no working');
  }
};

sagaMiddleware.run(rootSaga);
loadUser();
dotenv.config({ path: './' });
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme} />
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
