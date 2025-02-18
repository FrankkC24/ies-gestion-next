'use client';

import React from 'react';
import {
  CorrelativasContainer,
  TableWrapper,
  StyledTable,
} from './MateriasCorrelativas.styles';

const MateriasCorrelativas: React.FC = () => {
  const materias = [
    { abbreviation: 'Comunic', subject: 'Comunicación', type: 'TALLER', period: '1° Año - 1° Cuat', hours: '3Hs.', correlatives: '-----' },
    { abbreviation: 'Matem', subject: 'Matemática', type: 'APD', period: '1° Año - Anual', hours: '4Hs.', correlatives: '-----' },
    { abbreviation: 'Tec Info', subject: 'Tecnología de la información', type: 'APD', period: '1° Año - Anual', hours: '4Hs.', correlatives: '-----' },
    { abbreviation: 'Log Dat', subject: 'Lógica y estructura de datos', type: 'APD', period: '1° Año - Anual', hours: '4Hs.', correlatives: '-----' },
    { abbreviation: 'Prog I', subject: 'Programación I', type: 'APD', period: '2° Año - Anual', hours: '6Hs.', correlatives: 'Log Dat' },
    { abbreviation: 'Ing Soft I', subject: 'Ingeniería de software I', type: 'APD', period: '2° Año - Anual', hours: '4Hs.', correlatives: 'Prog I' },
    { abbreviation: 'Bases I', subject: 'Base de datos I', type: 'APD', period: '2° Año - Anual', hours: '4Hs.', correlatives: 'Log Dat' },
  ];

  return (
    <CorrelativasContainer>
      <h2>MATERIAS CORRELATIVAS</h2>
      <p>Consulta las correlatividades de las materias de tu carrera:</p>
      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>ABREVIATURA</th>
              <th>ASIGNATURA</th>
              <th>TIPO MATERIA</th>
              <th>PERIODO</th>
              <th>CARGA HORARIA</th>
              <th>CORRELATIVAS</th>
            </tr>
          </thead>
          <tbody>
            {materias.map((materia, index) => (
              <tr key={index}>
                <td>{materia.abbreviation}</td>
                <td>{materia.subject}</td>
                <td>{materia.type}</td>
                <td>{materia.period}</td>
                <td>{materia.hours}</td>
                <td>{materia.correlatives}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
    </CorrelativasContainer>
  );
};

export default MateriasCorrelativas;
