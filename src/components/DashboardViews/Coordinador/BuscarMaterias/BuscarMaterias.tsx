'use client';

import React, { useState } from 'react';
import {
  BuscarMateriasContainer,
  FilterContainer,
  Select,
  SearchButton,
  TableWrapper,
  Table,
} from '@/components/DashboardViews/Coordinador/BuscarMaterias/BuscarMaterias.styles';

const BuscarMaterias: React.FC = () => {
  const [selectedCarrera, setSelectedCarrera] = useState<string>('');
  const [materias, setMaterias] = useState([
    {
      abreviatura: 'ADM1',
      asignatura: 'ADMINISTRACION',
      tipo: 'APD',
      periodo: '1° Anual',
      cargaHoraria: '4 hs',
      correlativas: '---',
      carrera: 'N.ADE',
    },
    {
      abreviatura: 'IA',
      asignatura: 'INFORMATICA',
      tipo: 'APD',
      periodo: '1° Anual',
      cargaHoraria: '4 hs',
      correlativas: '---',
      carrera: 'N.ADE',
    },
    {
      abreviatura: 'TC1',
      asignatura: 'TECNICAS CUANTITATIVAS',
      tipo: 'APD',
      periodo: '1° Anual',
      cargaHoraria: '4 hs',
      correlativas: '---',
      carrera: 'N.ADE',
    },
    // Agrega más materias si es necesario...
  ]);

  const carreras = [
    { id: '1', name: 'Desarrollo de Software' },
    { id: '2', name: 'Relaciones Públicas' },
    { id: '3', name: 'Diseño Gráfico' },
  ];

  const handleSearch = () => {
    if (!selectedCarrera) {
      alert('Por favor selecciona una carrera.');
      return;
    }
    console.log(`Buscando materias para la carrera: ${selectedCarrera}`);
    // Aquí se podrían realizar peticiones a la API para filtrar las materias.
  };

  return (
    <BuscarMateriasContainer>
      <h2>BUSCAR MATERIAS</h2>
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
        <SearchButton onClick={handleSearch}>BUSCAR</SearchButton>
      </FilterContainer>

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>ABREVIATURA</th>
              <th>ASIGNATURA</th>
              <th>TIPO</th>
              <th>PERIODO</th>
              <th>CARGA HORARIA</th>
              <th>CORRELATIVAS</th>
              <th>CARRERA</th>
            </tr>
          </thead>
          <tbody>
            {materias.map((materia, index) => (
              <tr key={index}>
                <td>{materia.abreviatura}</td>
                <td>{materia.asignatura}</td>
                <td>{materia.tipo}</td>
                <td>{materia.periodo}</td>
                <td>{materia.cargaHoraria}</td>
                <td>{materia.correlativas}</td>
                <td>{materia.carrera}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>
    </BuscarMateriasContainer>
  );
};

export default BuscarMaterias;
