'use client';

import React from 'react';
import {
  MesasBuscarContainer,
  FilterContainer,
  CardGrid,
  ExamCard,
  Label,
  Select,
  SearchButton,
} from './MesasVer.styles';

const MesasVer: React.FC = () => {
  // Lista de exámenes
  const examList = [
    { id: '1', title: 'Ingeniería de Software II', date: '10/03/2024', time: '14:00', professor: 'Mario Finos' },
    { id: '2', title: 'Programación I', date: '11/03/2024', time: '09:00', professor: 'Ana Pérez' },
    { id: '3', title: 'Bases de Datos', date: '12/03/2024', time: '10:00', professor: 'Luis Gómez' },
    { id: '4', title: 'Diseño de Interfaces', date: '13/03/2024', time: '15:00', professor: 'Laura Martínez' },
  ];

  return (
    <MesasBuscarContainer>
      <h2>VER MESAS DE EXAMEN</h2>
      <FilterContainer>
        <div>
          <Label>CARRERA</Label>
          <Select>
            <option value="ingenieria">Desarrollo de Software</option>
            <option value="medicina">Relaciones Públicas</option>
            <option value="derecho">Diseño Gráfico</option>
          </Select>
        </div>
        <div>
          <Label>TURNO</Label>
          <Select>
            <option value="2024-feb-mar">2024 - Febrero/Marzo</option>
            <option value="2024-jul-ago">2024 - Julio/Agosto</option>
          </Select>
        </div>
        <div>
          <Label>LLAMADO:</Label>
          <Select>
            <option value="1">1°</option>
            <option value="2">2°</option>
          </Select>
        </div>
        <SearchButton>BUSCAR</SearchButton>
      </FilterContainer>

      {/* Renderización dinámica de tarjetas */}
      <CardGrid>
        {examList.map((exam) => (
          <ExamCard key={exam.id}>
            <div>
              <h3>{exam.title}</h3>
              <p>
                <strong>Fecha:</strong> {exam.date}
              </p>
              <p>
                <strong>Hora:</strong> {exam.time}
              </p>
              <p>
                <strong>Profesor:</strong> {exam.professor}
              </p>
            </div>
          </ExamCard>
        ))}
      </CardGrid>
    </MesasBuscarContainer>
  );
};

export default MesasVer;
