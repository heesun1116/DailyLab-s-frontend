import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Contribute from '../../components/common/Contribute';
import Tags from '../../components/common/Tags';

const UserPostList = ({ posts, loading, error, showWriteButton }) => {
  //에러발생시

  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  return (
    <PostListBlock user>
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
  const { publishedDate, user, tags, title, body, _id, contributes } = post;

  return (
    <PostItemBlock>
      <DateSpan>{new Date(publishedDate).toLocaleDateString()}</DateSpan>
      <Title>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </Title>
      <ContentBox>
        <Link to={`/@${user.username}/${_id}`}>
          <Content>{body}</Content>
        </Link>
        <Tags tags={tags} />
      </ContentBox>
      {contributes === 'awesome' ? <Contribute awesome></Contribute> : null}
      {contributes === 'notbad' ? <Contribute notbad></Contribute> : null}
      {contributes === 'verygood' ? <Contribute verygood></Contribute> : null}
      {contributes === 'good' ? <Contribute good></Contribute> : null}
    </PostItemBlock>
  );
};
const PostListBlock = styled.div`
  margin-left: 8rem;
  border: none;
  border-radius: 30px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 56.176rem;
  height: 28rem;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const DateSpan = styled.div`
  margin-left: 1.3rem;
  font-size: 0.938rem;
  letter-spacing: 0.3px;
  font-family: NotoSans;
  color: #c4c4c4;
`;
const PostItemBlock = styled.div`
  display: flex;
  margin-left: 1.438rem;
  align-items: center;
  &:last-child {
    padding-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-family: NotoSans;
  font-size: 0.938rem;
  font-weight: normal;
  letter-spacing: 0.3px;
  text-align: left;
  margin-left: 4.625rem;
  width: 8rem;
  height: 1.25rem;
  overflow: hidden;
`;

const Content = styled.p`
  overflow: hidden;
  width: 21rem;
  height: 1rem;
  font-family: NotoSans;
  font-size: 0.813rem;
  margin-bottom: 1px;
  &:hover {
    text-decoration: underline;
  }
`;
const ContentBox = styled.div`
  width: 21rem;
  height: 3.25rem;
  margin: 0 0 0 5.5rem;
`;
export default UserPostList;
