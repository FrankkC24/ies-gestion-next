'use client';

import React, { useState, useEffect } from 'react';
import {
  Container,
  FilterContainer,
  Select,
  SearchButton,
  TableWrapper,
  Table,
} from './CalificacionesFinales.styles';

const CalificacionesFinales: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedCurso, setSelectedCurso] = useState('');
  const [calificaciones, setCalificaciones] = useState<string[]>([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearch = () => {
    if (!selectedCurso) {
      alert('Por favor selecciona un curso.');
      return;
    }

    // Aquí se cargarían los datos reales
    setCalificaciones([
      'Alumno 1 - Nota: 8',
      'Alumno 2 - Nota: 7',
    ]);
  };

  if (!isClient) return null;

  return (
    <Container>
      <h2>CARGAR FINALES</h2>
      <FilterContainer>
        <label>CURSOS:</label>
        <Select value={selectedCurso} onChange={(e) => setSelectedCurso(e.target.value)}>
          <option value="">SELECCIONAR</option>
          <option value="1">TÉCNICO EN SOFTWARE - INFORMÁTICA (Turno:N Div:1)</option>
          <option value="2">ADMINISTRACIÓN DE EMPRESAS - CONTABILIDAD (Turno:N Div:1)</option>
        </Select>
        <SearchButton onClick={handleSearch} disabled={!selectedCurso}>
          BUSCAR
        </SearchButton>
      </FilterContainer>

      {calificaciones.length > 0 && (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Finales</th>
              </tr>
            </thead>
            <tbody>
              {calificaciones.map((item, idx) => (
                <tr key={idx}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      )}
    </Container>
  );
};

export default CalificacionesFinales;
