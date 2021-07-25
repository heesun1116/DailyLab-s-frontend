import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import HeaderContainer from '../../container/common/HeaderContainer';
import palette from '../../lib/palette';
import Contribute from '../common/Contribute';

import Tags from '../common/Tags';

const PostViewer = ({ post, error, loading, actionButtons }) => {
  //error
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>This post does not exist.</PostViewerBlock>;
    }
    return <PostViewerBlock>error</PostViewerBlock>;
  }
  //loading or the post is not exist.
  if (loading || !post) {
    return null;
  }
  const { title, body, user, publishedDate, tags, contributes } = post;

  return (
    <>
      <HeaderContainer />
      <MainContainer>
        <PostViewerBlock>
          <Helmet>
            <title>{title} - Daily Lab;s</title>
          </Helmet>
          <PostHead>
            <h1>{title}</h1>
          </PostHead>
          <ButtonUserDiv>
            <div>
              <span>{user.username}</span>
              <span>{new Date(publishedDate).toLocaleDateString()}</span>
            </div>
            {actionButtons}
          </ButtonUserDiv>
          <div></div>
          <PostContent dangerouslySetInnerHTML={{ __html: body }} />
          <TagBlock>
            <Tags tags={tags} />
            {contributes === 'awesome' ? (
              <Contribute awesome></Contribute>
            ) : null}
            {contributes === 'notbad' ? <Contribute notbad></Contribute> : null}
            {contributes === 'verygood' ? (
              <Contribute verygood></Contribute>
            ) : null}
            {contributes === 'good' ? <Contribute good></Contribute> : null}
          </TagBlock>
        </PostViewerBlock>
      </MainContainer>
    </>
  );
};
const MainContainer = styled.div`
  background-color: #fff;
  margin-left: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    margin-left: 0;
  }
`;
const PostViewerBlock = styled.div`
  width: 59.5rem;
  height: 30rem;
  margin-top: 5.438rem;
  margin-left: 5.312rem;
  @media screen and (max-width: 1024px) {
    width: 90%;
    margin-left: 0;
  }
`;
const PostHead = styled.div`
  border-bottom: 0.125rem solid #cbcbcb;
  h1 {
    font-size: 2.5rem;
    padding-bottom: 1.25rem;
  }
`;
const TagBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.562rem;
`;
const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;
const ButtonUserDiv = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  span {
    color: #9c9b9b;
    margin-right: 1rem;
    font-size: 1.3rem;
    font-family: notosans;
  }
  @media screen and (max-width: 1024px) {
    margin-right: 1rem;
  }
  @media screen and (max-width: 500px) {
    span {

      font-size: 11px;s
    }
  }
`;

export default PostViewer;
