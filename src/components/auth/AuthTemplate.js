import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/palette';

// 회원가입 로그인 페이지의 레이아웃 담당 컴포넌트
const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">REACTERS </Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

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
  background: ${palette.gray[2]};
`;
const WhiteBox = styled.div`
.logo-area{
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
}
box-shadow:  0 0 8px rgba(0, 0, 0, 0.025);
    padding: 2rem;
    width: 360px;
    background: white;
    border-radius: 2px;
}
`;
export default AuthTemplate;
