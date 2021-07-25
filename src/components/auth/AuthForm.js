import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeField } from '../../modules/auth';
import palette from '../../lib/palette';
import Button from '../common/Button';
import React, { useEffect, useRef, useState } from 'react';
import S3 from 'react-aws-s3';
const textMap = {
  login: 'Login',
  register: 'Sign Up',
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const [filename, setFilename] = useState('');
  const [fileURl, setFileUrl] = useState('');
  const fileInput = useRef();
  const text = textMap[type];
  const dispatch = useDispatch();
  const bucketName = process.env.REACT_APP_BUCKET_NAME;
  const dirName = process.env.REACT_APP_DIR_NAME;
  const region = process.env.REACT_APP_REGION;
  const accessKetId = process.env.REACT_APP_AWS_KEY;
  const secretAcessKey = process.env.REACT_APP_AWS_SECRET;
  const handelClick = async (e) => {
    e.preventDefault();
    let file = fileInput.current.files[0];

    let newFilename = fileInput.current.files[0].name;
    const config = {
      bucketName: bucketName,
      dirName: dirName,
      region: region,
      accessKeyId: accessKetId,
      secretAccessKey: secretAcessKey,
    };
    const ReactS3Clinet = new S3(config);
    const data = await ReactS3Clinet.uploadFile(file, newFilename);
    setFileUrl(data.location);
    setFilename(newFilename);
  };
  useEffect(() => {
    dispatch(
      changeField({
        form: 'register',
        key: 'avatar',
        value: fileURl,
      }),
    );
  }, [dispatch, fileURl]);

  return (
    <AuthFormBlok>
      <h1>{text}</h1>
      <form onSubmit={onSubmit}>
        <UsernameBlock>
          <h3>Enter your username</h3>
          <StyledInput
            autoComplete="username"
            name="username"
            placeholder="username"
            onChange={onChange}
            value={form.username}
          />
        </UsernameBlock>
        <PasswordBlock>
          <h3>password</h3>
          <StyledInput
            autoComplete="new-password"
            name="password"
            placeholder="password"
            type="password"
            onChange={onChange}
            value={form.password}
          />
        </PasswordBlock>
        {type === 'register' && (
          <>
            <ConfirmBox>
              <h3>Confirm Password</h3>
              <StyledInput
                autoComplete="new-password"
                name="passwordConfirm"
                placeholder="Confirm Password"
                type="password"
                onChange={onChange}
                value={form.passworConfirm}
              />
            </ConfirmBox>
            <AvatarBox>
              <h4>Please select your Avatar!!!</h4>
              <FileBox onChange={handelClick}>
                <FileLabel onChange={handelClick} htmlFor="avatar">
                  Upload Avatar
                </FileLabel>

                <FileName value={filename} disabled="disabled" />
                <FileInput
                  type="file"
                  name="avatar"
                  id="avatar"
                  ref={fileInput}
                  onChange={handelClick}
                  accept="image/png, image/jpeg, image/jpg"
                />
              </FileBox>
            </AvatarBox>
          </>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Footer>
          {type === 'login' ? (
            <Link to="/register">SignUp!</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <ButtonWithMarginTop>{text}</ButtonWithMarginTop>
        </Footer>
      </form>
    </AuthFormBlok>
  );
};

const AuthFormBlok = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Poppins;
  h1 {
    font-size: 2.375rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  h3 {
    font-size: 1.125rem;
    margin-bottom: 0.57rem;
  }
  h4 {
    margin-left: 1.639rem;
  }
  @media screen and (max-width: 500px) {
    h1 {
      font-size: 31.3px;
    }
    h3 {
      font-size: 14.8px;
      margin-bottom: 6.8px;
    }
  }
`;

const UsernameBlock = styled.div`
  margin-top: 2.955rem;
`;
const PasswordBlock = styled.div`
  margin-top: 1.025rem;
`;
const ConfirmBox = styled.div`
  margin-top: 1.025rem;
`;
const AvatarBox = styled.div`
  margin-top: 1.025rem;
  h4 {
    margin-bottom: 0.43rem;
    margin-left: -0.1rem;
    font-weight: bold;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 500px) {
    h4 {
      font-size: 14.8px;
      margin-bottom: 5.8px;
    }
  }
`;
const StyledInput = styled.input`
  width: 23.25rem;
  height: 2.5rem;
  padding: 0.625rem 0 0.625rem 0.903rem;
  font-size: 1rem;
  border-radius: 10px;
  border: solid 1px #bbbbbb;
  outline: none;
  @media screen and (max-width: 500px) {
    width: 312.2px;
    height: 33.6px;
    font-size: 12.3px;
  }
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  margin: 2.688rem 0 2.541rem 0.8rem;
  text-align: right;
  a {
    color: rgba(0, 0, 0, 0.43);
    text-decoration: underline;
    font-family: Hammersmith One;
    font-size: 0.938rem;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
  @media screen and (max-width: 500px) {
    width: 97.9px;
    height: 28px;
  }
`;
const ButtonWithMarginTop = styled(Button)`
  margin-left: 11rem;
  width: 7.438rem;
  height: 2.125rem;
  border-radius: 10px;
  padding: 0.375rem 1.5rem;
  background-image: radial-gradient(circle at 0 0, #9dc8c8, #d1b6e1);
  @media screen and (max-width: 500px) {
    font-weight: bold;
    font-size: 11.5px;
    width: 120px;
    height: 40px;
    margin-left: 168px;
    padding: 6.2px 28px;
  }
`;

// 에러 보여주기
const ErrorMessage = styled.div`
  color: #cb7575;
  text-align: center;
  font-size: 1rem;
  margin-top: 1.5rem;
  margin-bottom: -1rem;
`;

const FileInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
const FileBox = styled.div``;
const FileLabel = styled.label`
  display: inline-block;
  padding: 0.375rem 1.5rem;
  color: #fff;
  font-family: NotoSans;
  font-size: 0.938rem;
  line-height: normal;
  vertical-align: middle;
  background-image: radial-gradient(circle at 0 0, #9dc8c8, #d1b6e1);
  cursor: pointer;
  border-radius: 5px;
  @media screen and (max-width: 500px) {
    font-size: 11.5px;
    padding: 9.5px 6.2px;
    width: 104.5px;
    text-align: center;
  }
`;

const FileName = styled.input`
  width: 14rem;
  margin-left: 0.5rem;
  padding: 0.375rem 1.5rem;
  font-size: inherit;
  font-family: inherit;
  line-height: normal;
  vertical-align: middle;
  background-color: #ffff;
  border: solid 1px #bbbbbb;
  border-radius: 10px;
  -webkit-appearance: none; /* 네이티브 외형 감추기 */
  -moz-appearance: none;
  appearance: none;
  @media screen and (max-width: 500px) {
    width: 189.2px;
    height: 32.9px;
    margin-left: 12px;
  }
`;

export default AuthForm;
