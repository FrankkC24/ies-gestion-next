'use client';

import React from 'react';
import {
  InscriptosContainer,
  Table,
  BackButton,
} from '@/components/DashboardViews/Docente/DocentesMesas/DocentesInscriptos.styles';

interface DocentesInscriptosProps {
  mesaId: string;
  materia: string;
  onBack: () => void;
}

const DocentesInscriptos: React.FC<DocentesInscriptosProps> = ({ materia, onBack }) => {
  const inscriptos = [
    { dni: '12345678', nombre: 'Juan Pérez', correo: 'juan.perez@gmail.com' },
    { dni: '87654321', nombre: 'María López', correo: 'maria.lopez@gmail.com' },
    { dni: '13579246', nombre: 'Carlos Gómez', correo: 'carlos.gomez@gmail.com' },
  ];

  return (
    <InscriptosContainer>
      <h2>INSCRIPTOS EN LA MESA DE {materia.toUpperCase()}</h2>
      <Table>
        <thead>
          <tr>
            <th>DNI</th>
            <th>NOMBRE Y APELLIDO</th>
            <th>CORREO</th>
          </tr>
        </thead>
        <tbody>
          {inscriptos.map((inscripto, index) => (
            <tr key={index}>
              <td>{inscripto.dni}</td>
              <td>{inscripto.nombre}</td>
              <td>{inscripto.correo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <BackButton onClick={onBack}>VOLVER</BackButton>
    </InscriptosContainer>
  );
};

export default DocentesInscriptos;
