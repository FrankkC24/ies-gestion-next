'use client';

import React, { useState } from 'react';
import {
  CalificacionesContainer,
  SubjectCard,
  GradeItem,
  GradesList,
  SubjectTitle,
  GradeHeader,
  FilterContainer,
  Select,
} from './MateriasCalificaciones.styles';

const MateriasCalificaciones: React.FC = () => {
  const allSubjects = [
    {
      id: '1',
      title: 'Comunicación',
      grades: [
        { type: 'TRABAJO PRÁCTICO 1', score: 7, date: '12/05/2023' },
        { type: 'TRABAJO PRÁCTICO 2', score: 9, date: '26/06/2023' },
        { type: 'PARCIAL 1', score: 9, date: '30/06/2023' },
        { type: 'INTEGRADOR', score: 9, date: '14/07/2023' },
      ],
      status: 'Cursa',
      year: '2023',
    },
    {
      id: '2',
      title: 'Unidad de Definición Institucional I',
      grades: [
        { type: 'TRABAJO PRÁCTICO 1', score: 8, date: '10/04/2023' },
        { type: 'PARCIAL 1', score: 7, date: '20/05/2023' },
      ],
      status: 'Cursa',
      year: '2023',
    },
    {
      id: '3',
      title: 'Matemática',
      grades: [
        { type: 'TRABAJO PRÁCTICO 1', score: 6, date: '12/04/2022' },
        { type: 'TRABAJO PRÁCTICO 2', score: 8, date: '26/05/2022' },
        { type: 'PARCIAL 1', score: 7, date: '30/06/2022' },
      ],
      status: 'Aprobada',
      year: '2022',
    },
  ];

  const [selectedYear, setSelectedYear] = useState<string>('2023');

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const filteredSubjects = allSubjects.filter((subject) => subject.year === selectedYear);

  return (
    <CalificacionesContainer>
      <h2>CALIFICACIONES</h2>
      <FilterContainer>
        <label htmlFor="year-select">AÑO:</label>
        <Select id="year-select" value={selectedYear} onChange={handleYearChange}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </Select>
      </FilterContainer>
      {filteredSubjects.map((subject) => {
        const totalScores = subject.grades.reduce((acc, grade) => acc + grade.score, 0);
        const averageScore = (totalScores / subject.grades.length).toFixed(2);

        return (
          <SubjectCard key={subject.id}>
            <SubjectTitle>{subject.title}</SubjectTitle>
            <GradesList>
              {subject.grades.map((grade, index) => (
                <GradeItem key={index}>
                  <GradeHeader>{grade.type}</GradeHeader>
                  <p>NOTA: {grade.score}</p>
                  <p>FECHA: {grade.date}</p>
                </GradeItem>
              ))}
            </GradesList>
            <p>
              <strong>ESTADO:</strong> {subject.status} | <strong>PROMEDIO:</strong> {averageScore}
            </p>
          </SubjectCard>
        );
      })}
    </CalificacionesContainer>
  );
};

export default MateriasCalificaciones;
