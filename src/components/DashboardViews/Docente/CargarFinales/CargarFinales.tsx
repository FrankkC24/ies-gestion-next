'use client';

import React, { useState } from 'react';
import {
  CargarNotasContainer,
  FilterContainer,
  Select,
  SearchButton,
  NotasTableWrapper,
  NotasTable,
  StyledInput,
  StyledSelect,
  SlideNotification,
  CloseButton,
  ProgressBar,
} from '@/components/DashboardViews/Docente/CargarFinales/CargarFinales.styles';

interface FinalesAlumno {
  dni: string;
  alumno: string;
  nota: string;
  fecha: string;
}

const CargarFinales: React.FC = () => {
  const [selectedCarrera, setSelectedCarrera] = useState<string>('');
  const [selectedMateria, setSelectedMateria] = useState<string>('');
  const [selectedFinal, setSelectedFinal] = useState<string>('');
  const [alumnos, setAlumnos] = useState<FinalesAlumno[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const carreras = [
    { id: '1', name: 'Desarrollo de Software' },
    { id: '2', name: 'Relaciones Públicas' },
    { id: '3', name: 'Diseño Gráfico' },
  ];

  const materias = [
    { id: '1', name: 'Matemáticas I', carreraId: '1' },
    { id: '2', name: 'Física II', carreraId: '1' },
    { id: '3', name: 'Historia III', carreraId: '2' },
  ];

  const finales = [
    { id: '1', name: 'Final Matemáticas I', materiaId: '1' },
    { id: '2', name: 'Final Física II', materiaId: '2' },
    { id: '3', name: 'Final Historia III', materiaId: '3' },
  ];

  const handleSearch = () => {
    if (!selectedCarrera || !selectedMateria || !selectedFinal) {
      alert('Por favor selecciona todos los filtros antes de buscar.');
      return;
    }

    setAlumnos([
      { dni: '40118443', alumno: 'ACEVEDO JESÚS GABRIEL', nota: '-', fecha: '2024-12-20' },
      { dni: '46374567', alumno: 'LOPEZ MARIA', nota: '8', fecha: '2024-12-20' },
    ]);
  };

  const handleCellEdit = (index: number, field: keyof FinalesAlumno, value: string | number) => {
    const previousValue = alumnos[index][field];

    setAlumnos((prevAlumnos) => {
      const updatedAlumnos = [...prevAlumnos];
      updatedAlumnos[index] = { ...updatedAlumnos[index], [field]: value };
      return updatedAlumnos;
    });

    const alumno = alumnos[index].alumno;
    const fieldDisplayName = field === 'nota' ? 'Nota' : 'Fecha';
    const message = `Has cambiado ${fieldDisplayName} de ${alumno} de ${previousValue} a ${value}.`;
    showNotification(message);
  };

  const showNotification = (message: string) => {
    setNotification(message);
    setIsDisabled(true);
    setIsFading(false);

    setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setNotification(null);
        setIsDisabled(false);
      }, 0);
    }, 5000);
  };

  const handleCloseNotification = () => {
    setIsFading(true);
    setTimeout(() => {
      setNotification(null);
      setIsDisabled(false);
    }, 50);
  };

  return (
    <CargarNotasContainer>
      <h2 style={{ fontSize: '2.5rem' }}>CARGAR FINALES</h2>
      <FilterContainer>
        <div>
          <label>CARRERA:</label>
          <Select
            value={selectedCarrera}
            onChange={(e) => {
              setSelectedCarrera(e.target.value);
              setSelectedMateria('');
              setSelectedFinal('');
            }}
            disabled={isDisabled}
          >
            <option value="">Selecciona una carrera</option>
            {carreras.map((carrera) => (
              <option key={carrera.id} value={carrera.id}>
                {carrera.name}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <label>MATERIA:</label>
          <Select
            value={selectedMateria}
            onChange={(e) => {
              setSelectedMateria(e.target.value);
              setSelectedFinal('');
            }}
            disabled={isDisabled || !selectedCarrera}
          >
            <option value="">Selecciona una materia</option>
            {materias
              .filter((materia) => materia.carreraId === selectedCarrera)
              .map((materia) => (
                <option key={materia.id} value={materia.id}>
                  {materia.name}
                </option>
              ))}
          </Select>
        </div>
        <div>
          <label>FINAL:</label>
          <Select
            value={selectedFinal}
            onChange={(e) => setSelectedFinal(e.target.value)}
            disabled={isDisabled || !selectedMateria}
          >
            <option value="">Selecciona un final</option>
            {finales
              .filter((final) => final.materiaId === selectedMateria)
              .map((final) => (
                <option key={final.id} value={final.id}>
                  {final.name}
                </option>
              ))}
          </Select>
        </div>
        <SearchButton onClick={handleSearch} disabled={isDisabled}>
          BUSCAR
        </SearchButton>
      </FilterContainer>

      {notification && (
        <SlideNotification $isFading={isFading}>
          <span>{notification}</span>
          <CloseButton onClick={handleCloseNotification}>&times;</CloseButton>
          <ProgressBar />
        </SlideNotification>
      )}

      {alumnos.length > 0 && (
        <NotasTableWrapper>
          <NotasTable>
            <thead>
              <tr>
                <th>DNI</th>
                <th>ALUMNO</th>
                <th>NOTA</th>
                <th>FECHA</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((alumno, index) => (
                <tr key={index}>
                  <td>{alumno.dni}</td>
                  <td>{alumno.alumno}</td>
                  <td>
                    <StyledSelect
                      disabled={isDisabled}
                      value={alumno.nota === '-' ? '' : alumno.nota}
                      onChange={(e) =>
                        handleCellEdit(index, 'nota', e.target.value === '' ? '-' : e.target.value)
                      }
                    >
                      <option value="">Sin nota</option>
                      {[...Array(10).keys()].map((n) => (
                        <option key={n + 1} value={String(n + 1)}>
                          {n + 1}
                        </option>
                      ))}
                    </StyledSelect>
                  </td>
                  <td>
                    <StyledInput
                      disabled={isDisabled}
                      type="date"
                      value={alumno.fecha}
                      onChange={(e) => handleCellEdit(index, 'fecha', e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </NotasTable>
        </NotasTableWrapper>
      )}
    </CargarNotasContainer>
  );
};

export default CargarFinales;
