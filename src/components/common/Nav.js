import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.svg';
import styled, { css } from 'styled-components';
import ToggleButton from './ToggleButton.svg';
const Nav = ({ user, onLogout, setToggleButton, toggleButton }) => {
  return (
    <>
      <NavBlock toggleButton={toggleButton}>
        <Link to="/">
          <LogoBlock>
            <img src={Logo} alt="logo" />
          </LogoBlock>
        </Link>
        <MenuBlock>
          <ul>
            <List to="/">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path d="M20.8008 24.2179H4.19922C2.96074 24.2179 1.95312 23.2103 1.95312 21.9718V10.1544C1.95312 9.72299 2.30288 9.37318 2.73438 9.37318C3.16587 9.37318 3.51562 9.72299 3.51562 10.1544V21.9718C3.51562 22.3488 3.82227 22.6554 4.19922 22.6554H20.8008C21.1777 22.6554 21.4844 22.3488 21.4844 21.9718V10.1544C21.4844 9.72299 21.8341 9.37318 22.2656 9.37318C22.6971 9.37318 23.0469 9.72299 23.0469 10.1544V21.9718C23.0469 23.2103 22.0393 24.2179 20.8008 24.2179Z" />
                  <path d="M24.2188 12.8886C24.0188 12.8886 23.8189 12.8123 23.6664 12.6597L13.9501 2.94355C13.1506 2.14394 11.8495 2.14394 11.0499 2.94355L1.33371 12.6598C1.02863 12.9649 0.533954 12.9649 0.228876 12.6598C-0.0762512 12.3547 -0.0762512 11.86 0.228876 11.5549L9.94509 1.83867C11.3539 0.429877 13.6462 0.429877 15.055 1.83867L24.7712 11.5549C25.0763 11.86 25.0763 12.3546 24.7712 12.6597C24.6187 12.8123 24.4187 12.8886 24.2188 12.8886Z" />
                  <path d="M15.625 24.2179H9.375C8.94351 24.2179 8.59375 23.8681 8.59375 23.4367V16.5031C8.59375 15.1569 9.68896 14.0617 11.0352 14.0617H13.9648C15.311 14.0617 16.4062 15.1569 16.4062 16.5031V23.4367C16.4062 23.8681 16.0565 24.2179 15.625 24.2179ZM10.1562 22.6554H14.8438V16.5031C14.8438 16.0184 14.4495 15.6242 13.9648 15.6242H11.0352C10.5505 15.6242 10.1562 16.0184 10.1562 16.5031V22.6554Z" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </List>
            <List to="/write">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path d="M23.074 15.7048C22.7301 15.7048 22.4514 15.9836 22.4514 16.3275V21.8557C22.4502 22.887 21.6147 23.7226 20.5835 23.7236H3.11314C2.08191 23.7226 1.24647 22.887 1.24525 21.8557V5.63063C1.24647 4.59965 2.08191 3.76396 3.11314 3.76275H8.64141C8.98531 3.76275 9.26404 3.48402 9.26404 3.14012C9.26404 2.79645 8.98531 2.51749 8.64141 2.51749H3.11314C1.39459 2.51943 0.00193809 3.91208 -7.62939e-06 5.63063V21.856C0.00193809 23.5745 1.39459 24.9672 3.11314 24.9691H20.5835C22.302 24.9672 23.6947 23.5745 23.6966 21.856V16.3275C23.6966 15.9836 23.4179 15.7048 23.074 15.7048Z" />
                  <path d="M23.4501 0.915439C22.3558 -0.178783 20.5818 -0.178783 19.4876 0.915439L8.37948 12.0235C8.30335 12.0997 8.24838 12.194 8.21968 12.2976L6.75893 17.5713C6.69886 17.7875 6.75991 18.019 6.91848 18.1778C7.0773 18.3364 7.30884 18.3975 7.52506 18.3376L12.7987 16.8766C12.9023 16.8479 12.9967 16.793 13.0728 16.7169L24.1807 5.60851C25.2732 4.51356 25.2732 2.74101 24.1807 1.64606L23.4501 0.915439ZM9.73613 12.4283L18.8273 3.33688L21.7592 6.26884L12.6678 15.3602L9.73613 12.4283ZM9.15047 13.6035L11.4929 15.9461L8.25276 16.8438L9.15047 13.6035ZM23.3002 4.72807L22.6399 5.3884L19.7077 2.4562L20.3683 1.79588C20.9761 1.18808 21.9616 1.18808 22.5694 1.79588L23.3002 2.52649C23.9071 3.13502 23.9071 4.11979 23.3002 4.72807Z" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </List>
            {user ? (
              <List to={`/@:${user.username}`}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="Balck"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path d="M21.3388 3.66116C18.9779 1.30024 15.8388 0 12.5 0C9.161 0 6.02207 1.30024 3.66116 3.66116C1.30024 6.02207 0 9.161 0 12.5C0 15.8388 1.30024 18.9779 3.66116 21.3388C6.02207 23.6998 9.161 25 12.5 25C15.8388 25 18.9779 23.6998 21.3388 21.3388C23.6998 18.9779 25 15.8388 25 12.5C25 9.161 23.6998 6.02207 21.3388 3.66116ZM6.26659 21.6009C6.7894 18.5907 9.39789 16.3704 12.5 16.3704C15.6023 16.3704 18.2106 18.5907 18.7334 21.6009C16.9586 22.8203 14.8113 23.5352 12.5 23.5352C10.1887 23.5352 8.04138 22.8203 6.26659 21.6009ZM8.52547 10.931C8.52547 8.73928 10.3085 6.95648 12.5 6.95648C14.6915 6.95648 16.4745 8.73947 16.4745 10.931C16.4745 13.1226 14.6915 14.9055 12.5 14.9055C10.3085 14.9055 8.52547 13.1226 8.52547 10.931ZM20.0022 20.5849C19.6079 19.1835 18.825 17.9121 17.7275 16.9189C17.0542 16.3095 16.2878 15.8287 15.4638 15.4898C16.9531 14.5184 17.9396 12.8378 17.9396 10.931C17.9396 7.93171 15.4993 5.49164 12.5 5.49164C9.50069 5.49164 7.06062 7.93171 7.06062 10.931C7.06062 12.8378 8.0471 14.5184 9.53617 15.4898C8.71239 15.8287 7.94582 16.3094 7.27253 16.9188C6.17523 17.9119 5.39207 19.1833 4.99783 20.5847C2.82631 18.568 1.46484 15.6902 1.46484 12.5C1.46484 6.41518 6.41518 1.46484 12.5 1.46484C18.5848 1.46484 23.5352 6.41518 23.5352 12.5C23.5352 15.6904 22.1737 18.5682 20.0022 20.5849Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </List>
            ) : null}
          </ul>
        </MenuBlock>
        <Logout onClick={onLogout}>
          <img onClick={onLogout} src="/exit.svg" alt="exit" />
        </Logout>
      </NavBlock>
      <ToggleButtonDiv
        toggleButton={toggleButton}
        onClick={() => setToggleButton(!toggleButton)}
      >
        <img
          alt="togglebutton"
          src={ToggleButton}
          onClick={() => setToggleButton(!toggleButton)}
        />
      </ToggleButtonDiv>
    </>
  );
};

const Logout = styled.div`
  cursor: pointer;
  padding-bottom: 1.896rem;
`;
const NavBlock = styled.div`
  border-right: solid 1px #cfcfcf;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  height: 100%;
  width: 6rem;
  background-color: #fff;
  @media screen and (max-width: 500px) {
    transform: ${(props) =>
      props.toggleButton ? 'translateX(0%)' : 'translateX(-100%)'};
    transition: all 0.5s ease;
    opacity: ${(props) => (props.toggleButton ? '100%' : '0')};
  }
`;
const LogoBlock = styled.div`
  padding-top: 1.796rem;
  width: 3.135rem;
  height: 2.096rem;
`;
const MenuBlock = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-between;

  gap: 3.12rem;
  width: 1.563rem;
  height: 11.313rem;
  gap: 3.12rem;

  ul {
    margin: 0;
    padding: 0;
  }
`;
const List = styled(Link)`
  width: 1.562rem;
  height: 1.562rem;
  color: #000;
  &:hover {
    transition: ease 0.5s;
    font-weight: bold;
    color: #000000;
    svg {
      transition: ease 0.5s;
      fill: black;
    }
  }
  ${(props) =>
    props.active &&
    css`
      font-weight: bold;
      color: #000000;
    `}
  svg {
    width: 1.562rem;
    height: 1.562rem;
    margin: 1.5rem 0;
    fill: #000;
    ${(props) =>
      props.active &&
      css`
        fill: #000000;
      `}
  }
`;

const ToggleButtonDiv = styled.div`
  @media screen and (max-width: 500px) {
    position: absolute;
    top: 5%;
    left: 7%;
    transition: all 0.5s ease;
    opacity: ${(props) => (props.toggleButton ? '0' : '100%')};
  }
`;
export default Nav;
