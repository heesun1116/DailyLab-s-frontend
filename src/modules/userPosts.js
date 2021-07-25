import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as postsAPI from '../lib/api/posts';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';

const [USER_POSTS, USER_POSTS_SUCCESS, USER_POSTS_FAILURE] =
  createRequestActionTypes('posts/USER_POSTS');

export const userPosts = createAction(USER_POSTS, (username) => ({
  username,
}));

const userPostsSaga = createRequestSaga(USER_POSTS, postsAPI.readUserPost);
export function* userpostsSaga() {
  yield takeLatest(USER_POSTS, userPostsSaga);
}

const initialState = {
  posts: null,
  error: null,
  lastPage: 1,
};

const posts = handleActions(
  {
    [USER_POSTS_SUCCESS]: (state, { payload: posts, meta: response }) => ({
      ...state,
      posts,
    }),
    [USER_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);
export default posts;
