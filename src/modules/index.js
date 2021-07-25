import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
import userPosts, { userpostsSaga } from './userPosts';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  posts,
  userPosts,
});

//
export function* rootSaga() {
  yield all([
    authSaga(),
    userSaga(),
    writeSaga(),
    postSaga(),
    postsSaga(),
    userpostsSaga(),
  ]); // // functions run parallel and simultaneously and then Wait until they are all resolve
}
export default rootReducer;
