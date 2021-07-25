import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeField } from '../../modules/write';
import Arrow from './Arrow.svg';
const ContributeBox = () => {
  let [contributeValue, setContributeValue] = useState('notbad');
  const dispatch = useDispatch();

  const onClick = useCallback(
    (e) => {
      setContributeValue(e.target.value);
      dispatch(
        changeField({
          key: 'contributes',
          value: contributeValue,
        }),
      );
    },
    [contributeValue, dispatch],
  );

  return (
    <Contribox>
      <Description>
        <span>Notbad</span>
        <span>
          <img src={Arrow} alt="arrow" />
        </span>
        <span>Awesome</span>
      </Description>
      <ContirRadioBlock>
        <ContributionRadio
          defaultChecked
          onClick={onClick}
          type="radio"
          id="notbad"
          name="contributes"
          value="notbad"
        />
        <label htmlFor="notbad"></label>
        <ContributionRadio
          onClick={onClick}
          type="radio"
          id="good"
          name="contributes"
          value="good"
        />
        <label htmlFor="good"></label>
        <ContributionRadio
          onClick={onClick}
          type="radio"
          id="verygood"
          name="contributes"
          value="verygood"
        />
        <label htmlFor="verygood"></label>
        <ContributionRadio
          onClick={onClick}
          type="radio"
          id="awesome"
          name="contributes"
          value="awesome"
        />
        <label htmlFor="awesome"></label>
      </ContirRadioBlock>
    </Contribox>
  );
};
const Contribox = styled.div`
  margin: -2rem 0 1rem 48rem;
  ul {
    display: flex;
  }

  span {
    font-family: NotoSans;
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 0.24px;
  }
  img {
  }
  @media screen and (max-width: 1024px) {
    margin: -2rem 0 1rem 20rem;
  }
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;
const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;
const ContributionRadio = styled.input`
  :checked,
  :not(:checked) {
    position: absolute;
    left: -9999px;
  }
`;

const ContirRadioBlock = styled.div`
  display: flex;
  margin-top: 0.562rem;
  justify-content: flex-end;
  label {
    position: relative;
    padding-left: 2.9rem;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
  }
  input:checked + label:before,
  input:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
  }
  input:checked + label:after,
  input:not(:checked) + label:after {
    content: '';
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 5px;
    background-image: radial-gradient(circle at 0 0, #9dc8c8, #d1b6e1);
    position: absolute;
    top: 5.8px;
    left: 5.8px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  input:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  input:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;
export default ContributeBox;
