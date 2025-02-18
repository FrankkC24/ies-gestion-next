'use client';

import React, { useState } from 'react';
import {
  HorariosContainer,
  FilterContainer,
  Select,
  SearchButton,
  HorariosTableWrapper,
  HorariosTable,
} from '@/components/DashboardViews/Docente/DocentesHorarios/DocentesHorarios.styles';

const DocentesHorarios: React.FC = () => {
  const [selectedCarrera, setSelectedCarrera] = useState<string>('');
  const [selectedDivision, setSelectedDivision] = useState<string>('');

  const horarios = [
    {
      asignatura: 'Comunicación',
      anio: '1° Año',
      periodo: '1° Cuat.',
      dia: 'Jueves',
      horario: '20:00 / 22:00',
      horasCatedra: '3 hs.',
      profesor: 'BERTONI - GASPAR',
    },
    {
      asignatura: 'Unidad de definición institucional I',
      anio: '1° Año',
      periodo: '2° Cuat.',
      dia: 'Viernes',
      horario: '19:40 / 21:40',
      horasCatedra: '3 hs.',
      profesor: 'LAROCCA - RUBÉN',
    },
    {
      asignatura: 'Tecnología de la información',
      anio: '1° Año',
      periodo: 'Anual',
      dia: 'Lunes',
      horario: '18:00 / 20:00',
      horasCatedra: '3 hs.',
      profesor: 'RONTOME - ROMINA',
    },
  ];

  const carreras = [
    { id: '1', name: 'Desarrollo de Software' },
    { id: '2', name: 'Relaciones Públicas' },
    { id: '3', name: 'Diseño Gráfico' },
  ];

  const divisiones = [
    { id: '1', name: 'División 1' },
    { id: '2', name: 'División 2' },
  ];

  return (
    <HorariosContainer>
      <h2 style={{ fontSize: '2.5rem' }}>HORARIOS DE CLASES</h2>
      <FilterContainer>
        <div>
          <label>CARRERA:</label>
          <Select value={selectedCarrera} onChange={(e) => setSelectedCarrera(e.target.value)}>
            <option value="">Selecciona una carrera</option>
            {carreras.map((carrera) => (
              <option key={carrera.id} value={carrera.id}>
                {carrera.name}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <label>DIVISIÓN:</label>
          <Select value={selectedDivision} onChange={(e) => setSelectedDivision(e.target.value)}>
            <option value="">Selecciona una división</option>
            {divisiones.map((division) => (
              <option key={division.id} value={division.id}>
                {division.name}
              </option>
            ))}
          </Select>
        </div>
        <SearchButton onClick={() => console.log('Filtrando horarios...')}>BUSCAR</SearchButton>
      </FilterContainer>

      <HorariosTableWrapper>
        <HorariosTable>
          <thead>
            <tr>
              <th>ASIGNATURAS</th>
              <th>AÑO</th>
              <th>PERIODO</th>
              <th>DÍA</th>
              <th>HORARIOS</th>
              <th>CARGA HORARIA</th>
              <th>PROFESOR</th>
            </tr>
          </thead>
          <tbody>
            {horarios.map((horario, index) => (
              <tr key={index}>
                <td>{horario.asignatura}</td>
                <td>{horario.anio}</td>
                <td>{horario.periodo}</td>
                <td>{horario.dia}</td>
                <td>{horario.horario}</td>
                <td>{horario.horasCatedra}</td>
                <td>{horario.profesor}</td>
              </tr>
            ))}
          </tbody>
        </HorariosTable>
      </HorariosTableWrapper>
    </HorariosContainer>
  );
};

export default DocentesHorarios;
