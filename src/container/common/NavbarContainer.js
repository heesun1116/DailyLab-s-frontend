import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../../components/common/Nav';
import { logout } from '../../modules/user';

const NavbarContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const [toggleButton, setToggleButton] = useState(false);
  const onLogout = () => {
    dispatch(logout());
    window.location.reload();
  };
  return (
    <Nav
      toggleButton={toggleButton}
      setToggleButton={setToggleButton}
      user={user}
      onLogout={onLogout}
    />
  );
};

export default NavbarContainer;
