import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/posts/PostList';
import { listPosts } from '../../modules/posts';
import styled from 'styled-components';
import UserInfo from '../../components/user/UserInfo';
import HeaderContainer from '../common/HeaderContainer';

const PostListContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { posts, error, loading, user, auth } = useSelector(
    ({ posts, loading, user, auth }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user,
      auth: auth.auth,
    }),
  );

  useEffect(() => {
    const { tag, username, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    dispatch(listPosts({ tag, username, page }));
  }, [dispatch, location.search]);

  return (
    <>
      <HeaderContainer />
      <MainContainer>
        <UserInfo />
        <PostList
          loading={loading}
          error={error}
          posts={posts}
          showWriteButton={user}
        />
      </MainContainer>
    </>
  );
};
const MainContainer = styled.div`
  background-color: #fff;
  margin-left: 6rem;
  display: flex;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 500px) {
    margin-left: 0rem;
    width: 100%;
  }
`;

export default withRouter(PostListContainer);
