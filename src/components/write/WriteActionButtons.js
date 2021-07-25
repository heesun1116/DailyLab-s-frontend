import React from 'react';
import styled from 'styled-components';

import Button from '../common/Button';

const WriteActionButtons = ({ onCancel, onPublish, isEdit, error }) => {
  return (
    <WriteACtionButtonBlock>
      <StyledButton onClick={onCancel}>Cancle</StyledButton>
      <StyledButton purple onClick={onPublish}>
        Post {isEdit ? 'Write' : 'reWrite'}
      </StyledButton>
      <ErrorDiv>{error}</ErrorDiv>
    </WriteACtionButtonBlock>
  );
};
const WriteACtionButtonBlock = styled.div`
  margin-top: 2.5rem;
  margin-left: 50rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
  @media screen and (max-width: 1024px) {
    margin: 40px 0 0 350px;
  }
  @media screen and (max-width: 500px) {
    margin: 0;
    margin-top: 50px;
  }
`;
const StyledButton = styled(Button)`
  width: 7.438rem;
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;
const ErrorDiv = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #e71d36;
  margin-top: 20px;
`;
export default WriteActionButtons;
