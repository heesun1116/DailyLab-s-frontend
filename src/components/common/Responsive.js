import React from 'react';
import styled, { css } from 'styled-components';

const Responsive = ({ children, ...rest }) => {
  return <ResponsibeBlock {...rest}>{children}</ResponsibeBlock>;
};
const ResponsibeBlock = styled.div`
  width: 58rem;
  border-radius: 20px;
  border: solid 1px #cfcfcf;
  background-color: beige;

  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  ${(props) =>
    props.user &&
    css`
      border: none;
    `}
`;
export default Responsive;
