import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from '../../lib/palette';

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};
const buttonstyle = css`
  border: none;
  border-radius: 10px;
  font-family: NotoSans;
  font-size: 0.938rem;
  padding: 0.375rem 1.5rem;
  color: white;
  letter-spacing: 0.3px;
  outline: none;
  cursor: pointer;
  background: #9dc8c8;
  &:hover {
    background: #cae0e0;
  }
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
  ${(props) =>
    props.purple &&
    css`
      background: #d1b6e1;
      &:hover {
        background: #e3d6eb;
      }
    `}
    &:disabled {
    background: ${palette.gray[3]};
    color: ${palette.cyan[5]};
    cursor: not-allowd;
  }
`;
const StyledButton = styled.button`
  ${buttonstyle}
`;
const StyledLink = styled(Link)`
  ${buttonstyle}
`;
export default Button;
