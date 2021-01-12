import styled, { css } from 'styled-components';

import check from '../../../img/check.svg';
import closeIcon from '../../../img/cancel.svg';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  background-color: rgba(51, 51, 51, 0.5);

  animation-name: show;
  animation-duration: 0.3s;

  @media (max-height: 600px) {
    min-height: 100vh;
    padding: 40px 0;
  }

  @media (max-width: 700px) {
    overflow-y: scroll;
  }

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const ModalBlock = styled.div`
  position: relative;
  
  display: flex;
  width: 100%;
  max-width: 900px;
  min-height: 600px;

  color: #333333;
  background-color: #ffffff;
  
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Image = styled.p`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  @media (max-width: 930px) {
    width: 50%;
  }

  @media (max-width: 700px) {
    width: 100%;
    padding: 40px 25px;
  }

  img {
    display: block;
    width: 350px;
    height: 350px;

    transition: 0.25s;

    &:hover {
      transform: scale(1.05);
    }

    ${props => props.category === 'pizza' && css`
      transform: rotate(15deg);

      &:hover {
        transform: rotate(0) scale(1.05);
      }
    `};

    @media (max-width: 930px) {
      width: 250px;  
      height: 250px;
    }

    @media (max-width: 700px) {
      width: 100%;
      max-width: 300px;
      height: auto;
    }

    @media (max-width: 700px) {
      max-width: 200px;
    }
  }
`;

export const Content = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 90px 25px;

  background-color: #fcfcfc;

  @media (max-width: 930px) {
    width: 50%;
  }

  @media (max-width: 700px) {
    width: 100%;
    padding: 40px 25px;
  }

  h2 {
    margin: 0;
    margin-bottom: 20px;

    font-size: 28px;
    line-height: 30px;
    font-weight: 700;
  }
`;

export const Price = styled.p`
  margin: 0;
  margin-top: auto;
  margin-bottom: 20px;

  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  text-align: center;

  span {
    font-size: 28px;
    font-weight: 700;

    cursor: pointer;
    transition: 0.3s;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 15px;
  z-index: 999;

  display: block;
  width: 50px;
  height: 50px;
  padding: 15px;

  background-color: transparent;
  background-image: url(${closeIcon});
  background-position: center;
  background-size: 20px;
  background-repeat: no-repeat;
  border: none;

  cursor: pointer;
  transition: transform 0.4s, scale 0.3s;

  &:hover,
  &:focus {
    outline: none;
    transform: rotate(-90deg) scale(1.1);
  }
  
  &:focus-visible {
    border-radius: 8px;
    box-shadow: 0 0 0 2px #fa9e39;
  }
  
  &:active {
    opacity: 0.6;
  }
  
`;

export const StyledChoiceBlock = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: #333333;

  @media (max-width: 700px) {
    margin-bottom: 40px;
  }
`;

export const ChoiceBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChoiceBlockHeading = styled.p`
  margin: 0;
  margin-bottom: 12px;
`;

export const ChoiceBlockLabel = styled.label`
  position: relative;

  display: block;
  margin-bottom: 10px;
  margin-left: 40px;
  padding-top: 3px;
  padding-bottom: 3px;

  font-size: 24px;
  line-height: 24px;

  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  &:hover {
    color: #333333bd;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ChoiceBlockInput = styled.input`
  &:checked + span::after {
    visibility: visible;
  }

  &:focus-visible + span {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 5px #cd3a13;
  }
`;

export const ToppingInput = styled(ChoiceBlockInput)`
  &:checked + span {
    background-color: #fa9e39;
  }
`;

export const ChoiceBlockIndicator = styled.span`
  position: absolute;
  top: 0;
  left: -40px;

  display: inline-block;
  width: 30px;
  height: 30px;

  background-color: #fcfcfc;
  border: 3px solid #fa9e39;
  border-radius: 50%;

  cursor: pointer;
  transition: 0.2s;

  &::after {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    visibility: hidden;
    width: 15px;
    height: 15px;

    background-color: #fa9e39;
    border-radius: 50%;
  }

  &:hover {
    border-color: #ff8500;

    input:checked + & {
      background-color: #ff8500;
    }
  }
`;

export const ToppingCheckbox = styled(ChoiceBlockIndicator)`
  border-radius: 8px;

  &::after {
    width: 20px;
    height: 20px;

    background-image: url(${check});
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: center;
  }
`;
