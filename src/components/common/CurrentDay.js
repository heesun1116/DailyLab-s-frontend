import React from 'react';
import styled from 'styled-components';

const CurrentDay = () => {
  let today = new Date();
  let year = today.getFullYear(); // year
  let month = today.getMonth() + 1; // month
  let date = today.getDate(); // day

  return (
    <Day>
      {year}
      {'.'}
      {month}
      {'.'}
      {date}
    </Day>
  );
};
const Day = styled.span`
  font-family: Poppins;
  font-size: 1.563rem;
  letter-spacing: 0.5px;
  text-align: left;
  color: #c4c4c4;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
export default CurrentDay;
