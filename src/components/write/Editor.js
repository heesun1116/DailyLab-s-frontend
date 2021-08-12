import Quill from 'quill';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import 'quill/dist/quill.bubble.css';

//
const Editor = ({ title, body, onChangeField, user }) => {
  const quillElement = useRef(null); // set divElement to apply quill
  const quillInstance = useRef(null); // setting quill instance
  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: 'please write your content',
      modules: {
        // https://quilljs.com/docs/modules/toolbar/
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });
    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ key: 'body', value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    quillInstance.current.root.innerHTML = body;
  }, [body]);
  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
    onChangeField({ key: 'avatar', value: user.avatar });
  };

  return (
    <EditorBlock>
      <TitleInput
        placeholder="Please write your title"
        onChange={onChangeTitle}
        value={title}
      />
      <QuillWrapper>
        <div ref={quillElement} className="quillElement"></div>
      </QuillWrapper>
    </EditorBlock>
  );
};

const EditorBlock = styled.div`
  width: 75%;
  height: 55%;
  padding-bottom: 5rem;
  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;
const TitleInput = styled.input`
  font-size: 3rem;
  font-family: Hammersmith One;
  outline: none;
  padding-bottom: 2rem;
  border: none;
  border-bottom: 0.125rem solid #cbcbcb;
  margin-bottom: 2rem;
  width: 100%;
  ::placeholder {
    font-family: Hammersmith One;
    font-size: 2.5rem;
    color: #a8a8a8;
    padding-bottom: 2.438rem;
  }
`;
const QuillWrapper = styled.div`
  .ql-editor {
    font-family: Poppins;
    font-size: 0.938rem;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

export default Editor;
