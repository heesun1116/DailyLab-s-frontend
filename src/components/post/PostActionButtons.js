import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/palette';
import AskRemoveModal from './AskRemoveModal';

const PostActionButtons = ({ onEdit, onRemove }) => {
  const [modal, setModal] = useState(false);
  const onRemoveClick = () => {
    setModal(true);
  };
  const onCancle = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
    onRemove();
  };
  return (
    <>
      <PostActionButtonsBlock>
        <ActionButton onClick={onEdit}>Re Write</ActionButton>
        <ActionButton purple onClick={onRemoveClick}>
          Delete
        </ActionButton>
      </PostActionButtonsBlock>
      <AskRemoveModal
        visivle={modal}
        onConfirm={onConfirm}
        onCancle={onCancle}
      />
    </>
  );
};

const PostActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;
const ActionButton = styled.button`
  padding: 0.375rem 1.5rem;
  border-radius: 4px;
  color: white;
  background-color: #9dc8c8;
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background: ${palette.gray[1]};
    color: ${palette.cyan[7]};
  }
  ${(props) =>
    props.purple &&
    css`
      background-color: #d1b6e1;
    `}
  & + & {
    margin-left: 0.25rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 11px;
    padding: 0.25rem 1rem;
  }
`;

export default PostActionButtons;
