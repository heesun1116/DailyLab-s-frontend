import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SubInfo = ({ username, publishedDate, id, avatar }) => {
  return (
    <Container>
      <img src={avatar} alt="avatar" />
      <UserSpan>
        <Link to={`/@${username}`}>{username}</Link>
        <DateSpan>{new Date(publishedDate).toLocaleDateString()}</DateSpan>
      </UserSpan>
    </Container>
  );
};
const Container = styled.div`
  overflow: hidden;
  width: 20%;
  display: flex;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  @media screen and (max-width: 1024px) {
    width: 40%;
    img {
      width: 30px;
      height: 30px;
    }
  }
  @media screen and (max-width: 500px) {
    margin-top: 24.5px;
    margin-bottom: 49px;
    margin-right: -50%;
    text-align: end;
    justify-content: flex-end;
  }
`;
const DateSpan = styled.div`
  font-family: Poppins;
  font-size: 1rem;
  letter-spacing: 0.24px;
  text-align: left;
  color: #b0b0b0;
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
`;

const UserSpan = styled.div`
  font-family: Poppins;
  font-size: 0.875rem;
  overflow: hidden;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin-left: 17px;
  gap: 5px;
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
`;

export default SubInfo;
