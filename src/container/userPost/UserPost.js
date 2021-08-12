import React, { useEffect } from 'react';

import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userPosts } from '../../modules/userPosts';
import styled from 'styled-components';
import UserInfo from '../../components/user/UserInfo';
import HeaderContainer from '../common/HeaderContainer';
import PostList from '../../components/posts/PostList';

const UserListContainer = ({ location, match }) => {
  const { user, posts, loading } = useSelector(
    ({ user, userPosts, loading, auth }) => ({
      user: user,
      posts: userPosts.posts,
      loading: loading['posts/USER_POST'],
      auth: auth.auth,
    }),
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userPosts(user?.user?.username));
  }, [dispatch, user?.user?.username]);

  return (
    <>
      <HeaderContainer />
      <MainContainer>
        <UserInfo />
        <PostList loading={loading} posts={posts} showWriteButton={user} />
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
export default withRouter(UserListContainer);
