'use client';

import React, { useState } from 'react';
import {
  HorariosContainer,
  CareerHeader,
  FilterContainer,
  TableWrapper,
  StyledTable,
  Label,
  Select,
} from './MateriasHorarios.styles';

const MateriasHorarios: React.FC = () => {
  const careerName = 'Técnico Superior en Desarrollo de Software';

  // Datos de divisiones y años gestionados dinámicamente
  const divisions = ['1', '2'];
  const years = ['1° Año', '2° Año', '3° Año'];

  // Datos de horarios gestionados dinámicamente
  const horarios = [
    { subject: 'Comunicación', year: '1° Año', period: '1° Cuatrimestre', day: 'Jueves', time: '20:00 / 22:00', hours: '3 hs', professor: 'Bertoni - Gaspar', division: '1' },
    { subject: 'Matemática', year: '1° Año', period: 'Anual', day: 'Viernes', time: '19:00 / 21:40', hours: '4 hs', professor: 'Cicerchia - Luciano', division: '1' },
    { subject: 'Lógica y estructura de datos', year: '1° Año', period: 'Anual', day: 'Miércoles', time: '17:00 / 19:00', hours: '3 hs', professor: 'Cardilli - Jose Luis', division: '1' },
    { subject: 'Sistemas Operativos', year: '1° Año', period: 'Anual', day: 'Martes', time: '17:00 / 20:00', hours: '4 hs', professor: 'Abba - Guillermo Ricardo', division: '2' },
  ];

  const [selectedDivision, setSelectedDivision] = useState(divisions[0]);
  const [selectedYear, setSelectedYear] = useState(years[0]);

  const filteredHorarios = horarios.filter(
    (horario) => horario.year === selectedYear && horario.division === selectedDivision
  );

  return (
    <HorariosContainer>
      <CareerHeader>CARRERA: {careerName}</CareerHeader>

      <FilterContainer>
        <div>
          <Label>DIVISIÓN</Label>
          <Select value={selectedDivision} onChange={(e) => setSelectedDivision(e.target.value)}>
            {divisions.map((division) => (
              <option key={division} value={division}>
                {division}°
              </option>
            ))}
          </Select>
        </div>
        <div>
          <Label>AÑO</Label>
          <Select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Select>
        </div>
      </FilterContainer>

      <TableWrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>ASIGNATURA</th>
              <th>AÑO</th>
              <th>PERIODO</th>
              <th>DÍA</th>
              <th>HORARIOS</th>
              <th>CARGA HORARIA</th>
              <th>PROFESOR</th>
            </tr>
          </thead>
          <tbody>
            {filteredHorarios.length > 0 ? (
              filteredHorarios.map((horario, index) => (
                <tr key={index}>
                  <td>{horario.subject}</td>
                  <td>{horario.year}</td>
                  <td>{horario.period}</td>
                  <td>{horario.day}</td>
                  <td>{horario.time}</td>
                  <td>{horario.hours}</td>
                  <td>{horario.professor}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center' }}>
                  No se encontraron horarios para los filtros seleccionados.
                </td>
              </tr>
            )}
          </tbody>
        </StyledTable>
      </TableWrapper>
    </HorariosContainer>
  );
};

export default MateriasHorarios;
