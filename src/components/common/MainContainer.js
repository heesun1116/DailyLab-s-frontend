import React from 'react';
import styled from 'styled-components';

const MainContainer = ({ children }) => {
  return <MainContainerBlock>{children}</MainContainerBlock>;
};
const MainContainerBlock = styled.div`
  margin-top: 5.8rem;
  margin-left: 6rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    margin: 81px 0 0 0;
  }
`;
export default MainContainer;
