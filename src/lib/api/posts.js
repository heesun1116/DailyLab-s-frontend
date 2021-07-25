import client from './client';
import qs from 'qs';
export const writePost = ({ title, body, tags, contributes, avatar }) =>
  client.post(
    '/api/posts',
    { title, body, tags, contributes, avatar },
    {
      withCredentials: true,
    },
  );

export const readPost = (id) => client.get(`/api/posts/${id}`);

// readPost by Username
export const readUserPost = ({ username }) => {
  return client.get(`/api/posts?username=${username}`); // /api/posts?username=username
};
export const listPosts = ({ page, username, tag, contributes }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
    contributes,
  });
  return client.get(`/api/posts?${queryString}`); // /api/posts?username=tester&page=2
};
// update

export const updatePost = ({ id, title, body, tags, contributes, avatar }) =>
  client.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
    contributes,
    avatar,
  });
//delete
export const removePost = (id) => client.delete(`/api/posts/${id}`);
