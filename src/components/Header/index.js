import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Content, Profile } from './styles';
import Notifications from '~/components/Notifications';
import logo from '~/assets/logo-sm.svg';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="logo gobarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Foto do usuario"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
