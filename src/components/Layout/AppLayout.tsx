'use client';

import React from 'react';
import styled from 'styled-components';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que ocupe toda la altura de la pantalla */
`;

const ContentWrapper = styled.main`
  flex: 1; /* Permite que el contenido crezca y empuje el footer hacia abajo */
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Permite desplazamiento para contenido largo */
`;

interface AppLayoutProps {
  children: React.ReactNode;
  variant?: 'login' | 'dashboard';
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, variant = 'dashboard' }) => {
  return (
    <LayoutContainer>
      <Header variant={variant} />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </LayoutContainer>
  );
};

export default AppLayout;
