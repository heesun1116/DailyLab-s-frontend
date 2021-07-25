import React from 'react';
import NavbarContainer from '../container/common/NavbarContainer';
import UserPost from '../container/userPost/UserPost';

const UserPage = ({ isLoggedIn }) => {
  return (
    <>
      <NavbarContainer />
      <UserPost isLoggedIn={isLoggedIn} />
    </>
  );
};

export default UserPage;
