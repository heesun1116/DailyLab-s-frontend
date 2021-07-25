import React from 'react';
import Logo from '../common/Logo.svg';
import styled from 'styled-components';

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <LogoBox>
        <img src={Logo} alt="" />
        <LogoTitle>Daily Lab's</LogoTitle>
      </LogoBox>
      <WhiteBox>{children}</WhiteBox>
    </AuthTemplateBlock>
  );
};

const LogoBox = styled.div`
  position: absolute;
  display: flex;
  img {
    width: 3.135rem;
    height: 2.096rem;
  }
  align-items: center;
  top: 2.688rem;
  left: 1.5rem;
  gap: 15px;
  @media screen and (max-width: 1007px) {
    left: 0.5rem;
    top: 1rem;
  }
`;
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;
const LogoTitle = styled.h1`
  font-family: Hammersmith One;
  font-size: 1.25rem;
`;
const WhiteBox = styled.div`
  @media screen and (max-width: 500px) {
    border: none;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 10rem;
  }
  width: 26.25rem;
  background-color: #ffffff;
  border: solid 1px #9d9d9d;
  border-radius: 20px;
`;
export default AuthTemplate;
