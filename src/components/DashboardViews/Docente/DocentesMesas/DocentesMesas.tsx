'use client';

import React, { useState } from 'react';
import DocentesInscriptos from '@/components/DashboardViews/Docente/DocentesMesas/DocentesInscriptos';
import {
  MesasContainer,
  FilterContainer,
  Select,
  SearchButton,
  MesasGrid,
  MesaCard,
  Header,
  Info,
  ViewInscriptosButton,
} from '@/components/DashboardViews/Docente/DocentesMesas/DocentesMesas.styles';

const DocenteMesas: React.FC = () => {
  const [selectedCarrera, setSelectedCarrera] = useState<string>('Desarrollo de Software');
  const [selectedTurno, setSelectedTurno] = useState<string>('2025-Feb-Mar');
  const [selectedLlamado, setSelectedLlamado] = useState<number>(1);
  const [selectedMesa, setSelectedMesa] = useState<string | null>(null);
  const [selectedMateria, setSelectedMateria] = useState<string | null>(null);

  const handleSearch = () => {
    console.log(`Buscando mesas para:
    Carrera: ${selectedCarrera}, Turno: ${selectedTurno}, Llamado: ${selectedLlamado}`);
  };

  const mesas = [
    {
      id: '1',
      materia: 'Ingeniería de Software II',
      fecha: '20/02/2025',
      hora: '17:00',
      titular: 'Mario Finos',
      adjunto: 'Romina Rontome',
      inscriptos: 25,
    },
    {
      id: '2',
      materia: 'Tecnología de la Información',
      fecha: '21/02/2025',
      hora: '17:00',
      titular: 'Rubén Larocca',
      adjunto: 'Gaspar Bertoni, Mario Finos',
      inscriptos: 18,
    },
  ];

  if (selectedMesa && selectedMateria) {
    return (
      <DocentesInscriptos
        mesaId={selectedMesa}
        materia={selectedMateria}
        onBack={() => {
          setSelectedMesa(null);
          setSelectedMateria(null);
        }}
      />
    );
  }

  return (
    <MesasContainer>
      <h2 style={{ fontSize: '2.5rem' }}>MESAS DE EXÁMEN</h2>
      <FilterContainer>
        <div>
          <label style={{ fontSize: '1.2rem' }}>CARRERA:</label>
          <Select value={selectedCarrera} onChange={(e) => setSelectedCarrera(e.target.value)}>
            <option value="Desarrollo de Software">Desarrollo de Software</option>
            <option value="Relaciones Públicas">Relaciones Públicas</option>
            <option value="Diseño Gráfico">Diseño Gráfico</option>
          </Select>
        </div>
        <div>
          <label style={{ fontSize: '1.2rem' }}>TURNO:</label>
          <Select value={selectedTurno} onChange={(e) => setSelectedTurno(e.target.value)}>
            <option value="2025-Feb-Mar">2025 - Febrero/Marzo</option>
            <option value="2025-Jul-Ago">2025 - Julio/Agosto</option>
          </Select>
        </div>
        <div>
          <label style={{ fontSize: '1.2rem' }}>LLAMADO:</label>
          <Select value={selectedLlamado} onChange={(e) => setSelectedLlamado(parseInt(e.target.value))}>
            <option value={1}>1°</option>
            <option value={2}>2°</option>
          </Select>
        </div>
        <SearchButton onClick={handleSearch}>BUSCAR</SearchButton>
      </FilterContainer>

      <MesasGrid>
        {mesas.map((mesa) => (
          <MesaCard key={mesa.id}>
            <Header>
              <h3>{mesa.materia}</h3>
              <p>{mesa.fecha} - {mesa.hora}</p>
            </Header>
            <Info>
              <p><strong>TITULAR:</strong> {mesa.titular}</p>
              <p><strong>ADJUNTO/S:</strong> {mesa.adjunto}</p>
              <p><strong>INSCRIPTOS:</strong> {mesa.inscriptos}</p>
            </Info>
            <ViewInscriptosButton onClick={() => {
              setSelectedMesa(mesa.id);
              setSelectedMateria(mesa.materia);
            }}>
              VER INSCRIPTOS
            </ViewInscriptosButton>
          </MesaCard>
        ))}
      </MesasGrid>
    </MesasContainer>
  );
};

export default DocenteMesas;
