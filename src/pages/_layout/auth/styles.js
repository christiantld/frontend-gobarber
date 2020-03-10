import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #22222b, #15151f);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

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
