import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from '../utils/context';

import logo from '../../img/logo.svg';

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  
  background-color: #ffffff;
  border-bottom: 1px solid #e7e7e7;

  @media (max-width: 460px) {
    flex-direction: column;
  }
`;

const Logo = styled.a`
  display: block;
  
  transition: opacity 0.2s;
  
  &[href] {
    cursor: pointer;
  
    &:hover,
    &:focus {
      opacity: 0.8;
    }
  
    &:active {
      opacity: 0.4;
    }
  }
  
  img {
    display: block;
    width: 188px;
    height: 49px;
  }
`;

const MainNav = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;

const LoginButton = styled.button`
  position: relative;
  
  display: inline-block;
  padding: 15px 20px;
  padding-left: 50px;
  
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  text-transform: uppercase;
  
  background-color: transparent;
  border: none;
  outline: none;
  
  cursor: pointer;
  transition: 0.2s;
  
  &:hover,
  &:focus {
    color: #fa9e39;
    
    & svg {
      fill: #fa9e39;
    }
  }
  
  &:active {
    opacity: 0.4;
  }
  
  svg {
    position: absolute;
    top: 50%;
    left: 15px;
    
    width: 24px;
    height: 24px;
    
    fill: #333333;
    transform: translateY(-50%);
    transition: 0.2s;
  }
`;

const User = styled.div`
  
`;

const Logout = styled.span`
  font-size: 20px;
  font-weight: 700;
  
  cursor: pointer;
`;

const Header = () => {
  const { auth: { auth, login, logout } } = useContext(Context);

  return (
    <StyledHeader className="container">
      <Logo>
        <img src={logo} width="192" height="49" alt="Логотип пиццерии Margherita" />
      </Logo>
      <MainNav>
        <ul>
          <li>
            {auth ?
              <User>
                <Logout onClick={logout}>Выйти</Logout>
              </User>
              :
              <LoginButton type="button" onClick={login}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M131.5 472H60.693c-8.538 0-13.689-4.765-15.999-7.606-3.988-4.906-5.533-11.29-4.236-17.519 20.769-99.761 108.809-172.616 210.445-174.98 1.693.063 3.39.105 5.097.105 1.722 0 3.434-.043 5.142-.107 24.853.567 49.129 5.24 72.236 13.917 10.34 3.885 21.871-1.352 25.754-11.693 3.883-10.34-1.352-21.871-11.693-25.754a258.015 258.015 0 00-9.995-3.512C370.545 220.021 392 180.469 392 136 392 61.01 330.991 0 256 0S120 61.01 120 136c0 44.509 21.492 84.092 54.643 108.918-30.371 9.998-58.871 25.546-83.813 46.062-45.732 37.617-77.529 90.086-89.532 147.743-3.762 18.066.744 36.622 12.363 50.908C25.221 503.847 42.364 512 60.693 512H131.5c11.046 0 20-8.954 20-20s-8.954-20-20-20zM160 136c0-52.935 43.065-96 96-96s96 43.065 96 96c0 51.367-40.554 93.438-91.326 95.885a259.819 259.819 0 00-4.674-.052c-1.564 0-3.127.023-4.689.051C200.546 229.43 160 187.362 160 136z"/><path d="M496.689 344.607c-8.561-19.15-27.845-31.558-49.176-31.607h-62.505c-22.5 0-42.13 13.26-50.029 33.807A239.822 239.822 0 00331.302 357H200.356a20.003 20.003 0 00-14.35 6.068l-34.356 35.388c-7.567 7.794-7.529 20.203.085 27.95l35 35.612a20 20 0 0014.264 5.981h65c11.046 0 20-8.954 20-20s-8.954-20-20-20h-56.614l-15.428-15.698L208.814 397h137.491a20 20 0 0019.426-15.244c1.618-6.607 3.648-12.959 6.584-20.596 1.936-5.036 6.798-8.16 12.741-8.16H447.466c5.656.013 10.524 3.053 12.705 7.932 5.369 12.012 11.78 30.608 11.828 50.986.048 20.529-6.356 39.551-11.739 51.894-2.17 4.978-7.079 8.188-12.56 8.188h-63.158c-5.533-.013-10.716-3.573-12.896-8.858-2.339-5.671-4.366-12.146-6.197-19.797-2.571-10.742-13.367-17.366-24.105-14.796-10.743 2.571-17.367 13.364-14.796 24.106 2.321 9.699 4.978 18.118 8.121 25.738 8.399 20.364 27.939 33.555 49.827 33.606h63.251a53.623 53.623 0 0049.18-32.201c6.912-15.851 15.137-40.511 15.072-67.975-.064-27.389-8.361-51.67-15.31-67.216z"/><circle cx="431" cy="412" r="20"/></svg>
                <span>Войти</span>
              </LoginButton>
            }
          </li>
        </ul>
      </MainNav>
    </StyledHeader>
  );
};

export default Header;
