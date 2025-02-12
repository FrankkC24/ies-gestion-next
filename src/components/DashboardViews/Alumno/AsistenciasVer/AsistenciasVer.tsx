'use client';

import React, { useState } from 'react';
import {
  AsistenciasContainer,
  FilterContainer,
  Select,
  MateriasGrid,
  MateriaCard,
  Label,
  FaltaList,
  FaltaItem,
} from './AsistenciasVer.styles';

const AsistenciasVer: React.FC = () => {
  const materias = [
    {
      id: '1',
      name: 'Ingeniería de Software II',
      faltas: ['2024-03-01', '2024-03-15', '2024-04-05'],
    },
    {
      id: '2',
      name: 'Programación I',
      faltas: ['2024-02-20', '2024-03-10'],
    },
    {
      id: '3',
      name: 'Bases de Datos I',
      faltas: [],
    },
    {
      id: '4',
      name: 'Unidad de definición Institucional II',
      faltas: ['2024-01-25'],
    },
  ];

  const [selectedYear, setSelectedYear] = useState<string>('2024');

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
  };

  return (
    <AsistenciasContainer>
      <h2>ASISTENCIAS REGISTRADAS</h2>
      <FilterContainer>
        <div>
          <Label>AÑO</Label>
          <Select value={selectedYear} onChange={handleYearChange}>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </Select>
        </div>
      </FilterContainer>

      <MateriasGrid>
        {materias.map((materia) => (
          <MateriaCard key={materia.id}>
            <h3>{materia.name}</h3>
            {materia.faltas.length > 0 ? (
              <FaltaList>
                {materia.faltas.map((falta, index) => (
                  <FaltaItem key={index}>
                    <strong>Asististe:</strong> {falta}
                  </FaltaItem>
                ))}
              </FaltaList>
            ) : (
              <p>No tienes asistencias registradas en esta materia.</p>
            )}
          </MateriaCard>
        ))}
      </MateriasGrid>
    </AsistenciasContainer>
  );
};

export default AsistenciasVer;
