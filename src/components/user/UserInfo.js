import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserInfo = () => {
  const { user, auth } = useSelector(({ user, auth }) => ({
    user: user,
    auth: auth.auth,
  }));
  return (
    <>
      {user ? (
        <UserContainer>
          {auth ? (
            <>
              <img src={auth.avatar} alt="avatar" />
              <Description>
                <h1>Hello {auth.username}!</h1>
                <p>
                  Welcome to Daily Lab’s! Show your working{' '}
                  <span>Every day</span> with 5 line!{' '}
                </p>
              </Description>
              <Button to="/write">Write</Button>
            </>
          ) : (
            <>
              <img src={user.avatar} alt="avatar" />
              <Description>
                {user.user === null ? null : (
                  <>
                    <h1>Hello {user.user.username}!</h1>
                    <p>
                      Welcome to Daily Lab’s! Show your working{' '}
                      <span>Every day</span> with 5 line!{' '}
                    </p>
                  </>
                )}
              </Description>
              <Button to="/write">Write</Button>
            </>
          )}
        </UserContainer>
      ) : null}
    </>
  );
};
const UserContainer = styled.div`
  overflow: hidden;
  width: 19rem;
  margin-left: 3.688rem;
  margin-top: 3.8125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }
  h1 {
    width: 19rem;

    font-family: Hammersmith One;
    font-size: 2.5rem;
    color: #1a1a1a;
    letter-spacing: 0.8px;
    margin-top: 1.3125rem;
  }
  img {
    margin-top: 3.625rem;
    width: 8rem;
    height: 8rem;
    border-radius: 60px;
    object-fit: cover;
  }
`;
const Description = styled.div`
  text-align: center;
  font-family: Poppins;
  font-size: 0.938rem;
  letter-spacing: 0.3px;
  p {
    margin-top: 0.5rem;
  }
  span {
    font-weight: bold;
  }
`;
const Button = styled(Link)`
  margin-top: 1.312rem;
  padding: 0.469rem 2.469rem;
  border-radius: 10px;
  background-image: radial-gradient(circle at 0 0, #9dc8c8, #d1b6e1);
  border: none;
  color: white;
  &:hover {
    opacity: 0.5;
  }
`;
export default UserInfo;
