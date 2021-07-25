import React from 'react';
import styled, { css } from 'styled-components';

const Contribute = ({ ...rest }) => {
  return <ContributeDiv {...rest}></ContributeDiv>;
};

const ContributeDiv = styled.div`
  width: 1.34rem;
  height: 1.34rem;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  @media screen and (max-width: 1024px) {
    margin-right: 11px;
    margin-top: 7px;
  }
  ${(props) =>
    props.good &&
    css`
      background-color: #18d7bc;
    `}
  ${(props) =>
    props.notbad &&
    css`
      background-color: #9dc8c8;
    `}
    ${(props) =>
    props.verygood &&
    css`
      background-color: #519d9e;
    `}
    ${(props) =>
    props.awesome &&
    css`
      background-color: #285943;
    `}
`;
export default Contribute;
