'use client';

import { useState } from 'react';
import { 
  Container, 
  Form, 
  Input, 
  Button, 
  ForgotPasswordLink 
} from '@/app/login/Login.styles';
import Notice from '@/components/Notice/Notice';
import Header from '@/components/Header/Header';

export default function LoginPage() {
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de autenticación aquí
  };

  return (
    <>
      <Header variant="login" />
      <Container>
        <Notice active={false} />
        {!forgotPassword ? (
          <Form onSubmit={handleSubmit}>
            <Input 
              type="text" 
              placeholder="DNI" 
              required
            />
            <Input 
              type="password" 
              placeholder="Contraseña" 
              required
            />
            <ForgotPasswordLink onClick={() => setForgotPassword(true)}>
              ¿Olvidaste tu contraseña?
            </ForgotPasswordLink>
            <Button type="submit">INGRESAR</Button>
          </Form>
        ) : (
          <Form onSubmit={handleSubmit}>
            <h3>RECUPERAR CONTRASEÑA</h3>
            <Input 
              type="text" 
              placeholder="Introduce tu DNI" 
              required
            />
            <Input 
              type="email" 
              placeholder="Introduce tu correo electrónico" 
              required
            />
            <Button type="submit">ENVIAR</Button>
            <ForgotPasswordLink onClick={() => setForgotPassword(false)}>
              Volver al inicio de sesión
            </ForgotPasswordLink>
          </Form>
        )}
      </Container>
    </>
  );
}