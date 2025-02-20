'use client';

import React, { useState } from 'react';
import {
  CargarAsistenciasContainer,
  FilterContainer,
  Select,
  SearchButton,
  AsistenciasTableWrapper,
  AsistenciasTable,
  StyledInput,
  StyledSelect,
  SlideNotification,
  CloseButton,
  ProgressBar,
} from '@/components/DashboardViews/Docente/CargaAsistencias/CargaAsistencias.styles';

interface Alumno {
  dni: string;
  alumno: string;
  fecha: string;
  asistio: string;
}

const CargarAsistencias: React.FC = () => {
  const [selectedCarrera, setSelectedCarrera] = useState('');
  const [selectedMateria, setSelectedMateria] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('');
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);
  const [notification, setNotification] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSearch = () => {
    if (!selectedCarrera || !selectedMateria || !selectedDivision) {
      alert('Por favor selecciona todos los filtros antes de buscar.');
      return;
    }

    const today = new Date().toISOString().split('T')[0]; // Fecha del día actual

    setAlumnos([
      { dni: '40118443', alumno: 'ACEVEDO JESÚS GABRIEL', fecha: today, asistio: 'Seleccionar' },
      { dni: '46374567', alumno: 'LOPEZ MARIA', fecha: today, asistio: 'Seleccionar' },
    ]);
  };

  const handleCellEdit = (index: number, field: keyof Alumno, value: string) => {
    setAlumnos((prevAlumnos) => {
      const updatedAlumnos = [...prevAlumnos];
      updatedAlumnos[index] = { ...updatedAlumnos[index], [field]: value };
      return updatedAlumnos;
    });

    const alumno = alumnos[index].alumno;
    const message =
      field === 'asistio'
        ? `Se registró que ${alumno} ${value === 'Si' ? 'asistió' : 'no asistió'} a clases.`
        : `El campo ${field} fue actualizado.`;

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
    }, 3500);
  };

  const handleCloseNotification = () => {
    setIsFading(true);
    setTimeout(() => {
      setNotification(null);
      setIsDisabled(false);
    }, 50);
  };

  return (
    <CargarAsistenciasContainer>
      <h2 style={{ fontSize: '2.5rem' }}>CARGAR ASISTENCIAS</h2>
      <FilterContainer>
        <div>
          <label>CARRERA:</label>
          <Select value={selectedCarrera} onChange={(e) => setSelectedCarrera(e.target.value)} disabled={isDisabled}>
            <option value="">Selecciona una carrera</option>
            <option value="1">Desarrollo de Software</option>
            <option value="2">Relaciones Públicas</option>
            <option value="3">Diseño Gráfico</option>
          </Select>
        </div>
        <div>
          <label>MATERIA:</label>
          <Select value={selectedMateria} onChange={(e) => setSelectedMateria(e.target.value)} disabled={isDisabled || !selectedCarrera}>
            <option value="">Selecciona una materia</option>
            <option value="1">Matemáticas</option>
            <option value="2">Física</option>
          </Select>
        </div>
        <div>
          <label>DIVISIÓN:</label>
          <Select value={selectedDivision} onChange={(e) => setSelectedDivision(e.target.value)} disabled={isDisabled || !selectedMateria}>
            <option value="">Selecciona una división</option>
            <option value="1">División 1</option>
            <option value="2">División 2</option>
          </Select>
        </div>
        <SearchButton onClick={handleSearch} disabled={isDisabled}>BUSCAR</SearchButton>
      </FilterContainer>

      {notification && (
        <SlideNotification $isFading={isFading}>
          <span>{notification}</span>
          <CloseButton onClick={handleCloseNotification}>&times;</CloseButton>
          <ProgressBar />
        </SlideNotification>
      )}

      {alumnos.length > 0 && (
        <AsistenciasTableWrapper>
          <AsistenciasTable>
            <thead>
              <tr>
                <th>DNI</th>
                <th>NOMBRE Y APELLIDO</th>
                <th>FECHA</th>
                <th>ASISTIÓ</th>
              </tr>
            </thead>
            <tbody>
              {alumnos.map((alumno, index) => (
                <tr key={index}>
                  <td>{alumno.dni}</td>
                  <td>{alumno.alumno}</td>
                  <td>
                    <StyledInput
                      disabled={isDisabled}
                      type="date"
                      value={alumno.fecha}
                      onChange={(e) => handleCellEdit(index, 'fecha', e.target.value)}
                    />
                  </td>
                  <td>
                    <StyledSelect
                      disabled={isDisabled}
                      value={alumno.asistio}
                      onChange={(e) => handleCellEdit(index, 'asistio', e.target.value)}
                    >
                      <option value="Seleccionar">Seleccionar</option>
                      <option value="Si">Si</option>
                      <option value="No">No</option>
                    </StyledSelect>
                  </td>
                </tr>
              ))}
            </tbody>
          </AsistenciasTable>
        </AsistenciasTableWrapper>
      )}
    </CargarAsistenciasContainer>
  );
};

export default CargarAsistencias;
