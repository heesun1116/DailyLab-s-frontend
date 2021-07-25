import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Contribute from '../common/Contribute';

import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const PostList = ({ posts, loading, error }) => {
  //error

  if (error) {
    return <PostListBlock>error</PostListBlock>;
  }
  return (
    <PostListBlock>
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

const PostItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id, contributes, avatar } =
    post;

  return (
    <PostItemBlock>
      <SubInfo
        username={user.username}
        id={_id}
        publishedDate={publishedDate}
        avatar={avatar}
      />
      <ContentDiv>
        <Title>
          <Link to={`/@${user.username}/${_id}`}>{title}</Link>
        </Title>
        <ContentBox>
          <Link to={`/@${user.username}/${_id}`}>
            <Content>{body}</Content>
          </Link>
        </ContentBox>
      </ContentDiv>
      <LastDiv>
        {contributes === 'awesome' ? <Contribute awesome></Contribute> : null}
        {contributes === 'notbad' ? <Contribute notbad></Contribute> : null}
        {contributes === 'verygood' ? <Contribute verygood></Contribute> : null}
        {contributes === 'good' ? <Contribute good></Contribute> : null}
        <Tags tags={tags} />
      </LastDiv>
    </PostItemBlock>
  );
};
const PostListBlock = styled.div`
  width: 75%;
  margin-top: 5.625rem;
  margin-right: 3.125rem;
  border-radius: 20px;
  border: solid 1px #cfcfcf;
  margin-left: 3rem;
  @media screen and (max-width: 1024px) {
    width: 95%;
  }
  @media screen and (max-width: 500px) {
    width: 95%;
    margin: 5rem 0 0 0;
  }
`;

const PostItemBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 11rem;
  margin: 25px 39px 0 39px;
  &:first-child {
    border-bottom: 0.063rem solid #efecec;
  }
  & + & {
    border-bottom: 0.063rem solid #efecec;
  }
  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    height: auto;
    padding-bottom: 31px;
    &:first-child {
      padding-top: 33px;
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin: 0;
    height: auto;
  }
`;
const ContentDiv = styled.div`
  margin-left: 1.5rem;
  width: 75%;
  @media screen and (max-width: 1024px) {
    width: 59%;
    margin-left: 1%;
  }
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
const LastDiv = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 40%;
    margin-left: 41%;
    flex-direction: row;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
    flex-direction: row;
    margin-left: -10%;
  }
`;
const Title = styled.h1`
  overflow: hidden;
  font-family: Poppins;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.4px;
  text-align: left;
  width: 90%;
`;

const Content = styled.p`
  overflow: hidden;
  font-family: NotoSans;
  font-size: 0.938rem;
  letter-spacing: 0.3px;
  margin-top: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
const ContentBox = styled.div`
  width: 90%;
`;
export default PostList;
