import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  max-width: 650px;
  margin: 60px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  input {
    background: rgba(0, 0, 0, 0.3);
    border: 0;
    border-radius: 5px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
  span {
    color: #f0134d;
    font-size: 14px;
    margin: 0 0 10px;
    align-self: flex-start;
  }
  button {
    margin: 5px 0 0;
    height: 44px;
    background: #dab22f;
    font-weight: bold;
    color: #22222b;
    border: 0;
    border-radius: 5px;
    font-size: 16px;
    transition: background 0.1s;

    &:hover {
      background: ${lighten(0.08, '#dab22f')};
    }

    &:active {
      background: ${darken(0.06, '#dab22f')};
    }
  }

  > button {
    margin: 15px 0 0;
    width: 100%;
    height: 44px;
    background: #ff5151;
    font-weight: bold;
    color: #22222b;
    border: 0;
    border-radius: 5px;
    font-size: 16px;
    transition: background 0.1s;

    &:hover {
      background: ${lighten(0.08, '#ff5151')};
    }

    &:active {
      background: ${darken(0.06, '#ff5151')};
    }
  }

  hr {
    border: 0;
    height: 1px;
    margin: 10px 0 20px;
    background: rgba(255, 255, 255, 0.2);
  }
  a {
    color: #fff;
    margin-top: 15px;
    font-size: 16px;
    opacity: 0.6;
    transition: opacity 0.1s;

    &:hover {
      opacity: 0.9;
    }
  }
`;
