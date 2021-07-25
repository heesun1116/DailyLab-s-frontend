import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/palette';
import ContributeBox from './ContributeBox';

const TagItem = React.memo(({ tag, onRemove, onChangeTags }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));
s;
const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

const TagBox = ({ tags, onChangeTags }) => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const insertTag = useCallback(
    (tag) => {
      if (!tag) return;
      if (localTags.includes(tag)) return;
      const nextTags = [...localTags, tag];
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );

  const onRemove = useCallback(
    (tag) => {
      const nextTags = localTags.filter((t) => t !== tag);
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );

  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      insertTag(input.trim());
      setInput('');
    },
    [input, insertTag],
  );

  // When the tags value changes
  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);

  return (
    <TagBoxBlock>
      <TagForm onSubmit={onSubmit}>
        <input placeholder="#TAG" value={input} onChange={onChange} />
        <button type="submit">Submit</button>
      </TagForm>
      <ContributeBox />
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

const TagBoxBlock = styled.div`
  @media screen and (max-width: 1024px) {
    margin-left: 3rem;
  }
  @media screen and (max-width: 500px) {
    margin: 0 0 17px 0;
  }
`;

const TagForm = styled.form`
  display: flex;
  margin-top: 3.375rem;
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }
  input {
    width: 5.375rem;
    ::placeholder {
      font-family: Roboto;
      font-size: 1.25rem;
      color: #a073bb;
    }
  }
  button {
    letter-spacing: 0.28px;
    color: #ffffff;
    font-family: Noto Sans;
    font-size: 0.875rem;
    font-weight: bold;
    width: 7.438rem;
    height: 1.938rem;
    margin-left: 1.875rem;
    padding: 0.375rem 1.5rem;
    border-radius: 10px;
    background-image: radial-gradient(circle at 0 0, #9dc8c8, #d1b6e1);
    color: white;
  }
  @media screen and (max-width: 500px) {
    margin-bottom: 17px;
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray[6]};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  color: #c8c8c8;
`;

export default TagBox;
