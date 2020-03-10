import styled from 'styled-components';

export const Container = styled.div`
  background: #13131a;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1020px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #d2ac2d;
    }

    a {
      font-weight: bold;
      color: #d2ac2d;
      text-transform: uppercase;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: left;
    margin-right: 10px;

    strong {
      display: block;
      color: #a1a1a1;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #777;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }
`;
