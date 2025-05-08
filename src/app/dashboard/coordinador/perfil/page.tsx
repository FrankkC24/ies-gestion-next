'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Perfil = dynamic(
  () => import('@/components/DashboardViews/Shared/Perfil/Perfil'),
  { ssr: false }
);

const PerfilAlumnoPage = () => {
  return <Perfil />;
};

export default PerfilAlumnoPage;