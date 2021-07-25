import React from 'react';
import { Helmet } from 'react-helmet-async';

import MainContainer from '../components/common/MainContainer';
import HeaderContainer from '../container/common/HeaderContainer';
import NavbarContainer from '../container/common/NavbarContainer';
import EditContainer from '../container/write/EditContainer';
import TagBoxContainer from '../container/write/TagBoxContainer';
import WriteActionButtonsContainer from '../container/write/WriteActionButtonsContainer';

const WritePage = () => {
  return (
    <>
      <NavbarContainer />
      <HeaderContainer />
      <MainContainer>
        <Helmet>
          <title>write - Daliy Lab's</title>
        </Helmet>
        <EditContainer />
        <TagBoxContainer />
        <WriteActionButtonsContainer />
      </MainContainer>
    </>
  );
};

export default WritePage;
