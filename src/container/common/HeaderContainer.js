import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CurrentDay from '../../components/common/CurrentDay';
import UploadButton from './UploadButton.svg';

const HeaderContainer = () => {
  const { user, auth } = useSelector(({ user, auth }) => ({
    user: user,
    auth: auth.auth,
  }));

  return (
    <>
      {user ? (
        <>
          {auth ? (
            <>
              <List>
                <Link to="/">
                  <h1>DashBoard</h1>
                </Link>
                <CurrentDay />
                <UserDiv>
                  <Link to="/write">
                    <img src={UploadButton} alt="write button" />
                  </Link>
                  <Link to={`/@:${auth?.username}`}>
                    <span>{auth.username}</span>
                  </Link>
                  <Link to={`/@:${auth?.username}`}>
                    <Avatar src={auth.avatar} alt="avatar" />
                  </Link>
                </UserDiv>
              </List>
            </>
          ) : (
            <>
              <List>
                <Link to="/">
                  <h1>DashBoard</h1>
                </Link>
                <CurrentDay />
                <UserDiv>
                  <Link to="/write">
                    <img src={UploadButton} alt="write button" />
                  </Link>
                  {user.user === null ? null : (
                    <Link to={`/@:${user?.user?.username}`}>
                      <span>{user.user.username}</span>
                    </Link>
                  )}
                  <Link to={`/@:${user?.user?.username}`}>
                    <Avatar src={user.avatar} alt="avatar" />
                  </Link>
                </UserDiv>
              </List>
            </>
          )}
        </>
      ) : null}
    </>
  );
};

const List = styled.div`
  height: 2.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2.031rem;
  padding-bottom: 0;
  margin-left: 6rem;
  h1 {
    font-family: Hammersmith One;
    font-size: 1.75rem;
    letter-spacing: 0.56px;
    text-align: left;
    color: #9d9d9d;
    margin: 0 0 0 2.688rem;
  }
  @media screen and (max-width: 500px) {
    h1 {
      display: none;
    }
  }
`;
const UserDiv = styled.div`
  margin-right: 2.688rem;
  display: flex;
  align-items: center;
  gap: 14px;
  span {
    font-family: Hammersmith One;
    font-size: 0.938rem;
    letter-spacing: 0.3px;
    text-align: left;
    color: #1a1a1a;
  }
  @media screen and (max-width: 500px) {
    margin-right: 15px;
  }
`;
const Avatar = styled.img`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
`;

export default HeaderContainer;
