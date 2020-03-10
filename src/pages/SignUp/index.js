import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caractéres')
    .required('A senha é obrigatória'),
  name: Yup.string()
    .required('O nome é obrigatório')
    .lowercase(),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="logo gobarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Seu Nome" />
        <Input name="email" type="email" placeholder="Seu Email" />
        <Input name="password" type="password" placeholder="Sua Senha" />

        <button type="submit">
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
        <Link to="/">Já sou cadastrado</Link>
      </Form>
    </>
  );
}
