'use client';

import React, { useState, useEffect } from 'react';
import {
  ImprimirMesasContainer,
  FilterContainer,
  Select,
  SearchButton,
  TableWrapper,
  Table,
  BuscarPorContainer,
  BuscarPorMenu,
} from './ImprimirMesas.styles';

interface Mesa {
  asignatura: string;
  llamado: string;
  fecha: string;
  hora: string;
  titular: string;
  adjunto1: string;
  adjunto2: string;
  inscriptos: string;
}

const ImprimirMesas: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedCarrera, setSelectedCarrera] = useState('');
  const [selectedTurno, setSelectedTurno] = useState('');
  const [selectedLlamado, setSelectedLlamado] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchMenuVisible, setSearchMenuVisible] = useState(false);
  const [mesas, setMesas] = useState<Mesa[]>([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearch = () => {
    if (!selectedCarrera || !selectedTurno || !selectedLlamado) {
      alert('Por favor completa todos los filtros.');
      return;
    }

    // Mock
    setMesas([
      {
        asignatura: 'Matemática',
        llamado: '1°',
        fecha: '12/03/2025',
        hora: '08:00',
        titular: 'Prof. Pérez',
        adjunto1: 'Prof. López',
        adjunto2: 'Prof. Gómez',
        inscriptos: '10',
      },
    ]);
  };

  if (!isClient) return null;

  return (
    <ImprimirMesasContainer>
      <h2>IMPRIMIR MESAS DE EXÁMENES</h2>

      <FilterContainer>
        <BuscarPorContainer
          onMouseEnter={() => setSearchMenuVisible(true)}
          onMouseLeave={() => setSearchMenuVisible(false)}
        >
          <span>Buscar Por:</span>
          <BuscarPorMenu $isVisible={searchMenuVisible}>
            <li onClick={() => setSearchType('Docente')}>Docente</li>
            <li onClick={() => setSearchType('General')}>General</li>
            <li onClick={() => setSearchType('DocenteTodos')}>Docente Todos</li>
          </BuscarPorMenu>
        </BuscarPorContainer>

        <div>
          <label>CARRERA:</label>
          <input
            type="text"
            value={selectedCarrera}
            onChange={(e) => setSelectedCarrera(e.target.value)}
          />
        </div>

        <div>
          <label>TURNO:</label>
          <Select value={selectedTurno} onChange={(e) => setSelectedTurno(e.target.value)}>
            <option value="">Selecciona un turno</option>
            <option value="2025-Feb-Mar">2025-Feb-Mar</option>
            <option value="2025-Jul">2025-Jul</option>
          </Select>
        </div>

        <div>
          <label>LLAMADO:</label>
          <Select value={selectedLlamado} onChange={(e) => setSelectedLlamado(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
          </Select>
        </div>

        <SearchButton onClick={handleSearch}>BUSCAR</SearchButton>
      </FilterContainer>

      {mesas.length > 0 && (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Asignatura</th>
                <th>Llamado</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Titular</th>
                <th>Adjunto 1</th>
                <th>Adjunto 2</th>
                <th>Inscriptos</th>
              </tr>
            </thead>
            <tbody>
              {mesas.map((mesa, index) => (
                <tr key={index}>
                  <td>{mesa.asignatura}</td>
                  <td>{mesa.llamado}</td>
                  <td>{mesa.fecha}</td>
                  <td>{mesa.hora}</td>
                  <td>{mesa.titular}</td>
                  <td>{mesa.adjunto1}</td>
                  <td>{mesa.adjunto2}</td>
                  <td>{mesa.inscriptos}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      )}
    </ImprimirMesasContainer>
  );
};

export default ImprimirMesas;
