import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const TagsBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 0.5rem;
  .tag {
    display: inline-block;
    letter-spacing: 0.26px;
    font-family: Poppins;
    font-size: 0.8rem;
    letter-spacing: 0.2px;
    text-align: left;
    color: #101010;
    &:hover {
      color: #3f3f3f;
    }
  }
`;

const Tags = ({ tags }) => {
  return (
    <TagsBlock>
      {tags.map((tag) => (
        <Link className="tag" to={`/?tag=${tag}`} key={tag}>
          #{tag}
        </Link>
      ))}
    </TagsBlock>
  );
};

export default Tags;
