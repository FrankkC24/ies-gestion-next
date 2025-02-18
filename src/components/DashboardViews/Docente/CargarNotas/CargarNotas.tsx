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
} from '@/components/DashboardViews/Docente/CargarNotas/CargarNotas.styles';

const CargarNotas: React.FC = () => {
  const [selectedCarrera, setSelectedCarrera] = useState<string>('Desarrollo de Software');
  const [selectedCurso, setSelectedCurso] = useState<string>('Inglés Técnico I');
  const [selectedDivision, setSelectedDivision] = useState<string>('Div:1');
  const [notification, setNotification] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [notas, setNotas] = useState([
    { dni: '40118443', alumno: 'ACEVEDO JESÚS GABRIEL', tp1: '9', fecha_tp1: '09/06/2023', rec_tp1: '-', fecha_rec_tp1: '-' },
    { dni: '46374567', alumno: 'LOPEZ MARIA', tp1: '7', fecha_tp1: '09/06/2023', rec_tp1: '8', fecha_rec_tp1: '10/07/2023' },
  ]);

  const fieldNamesMap: { [key: string]: string } = {
    tp1: 'Trabajo Práctico 1',
    fecha_tp1: 'Fecha TP 1',
    rec_tp1: 'Recuperatorio TP 1',
    fecha_rec_tp1: 'Fecha Recuperatorio TP 1',
  };

  const handleSearch = () => {
    console.log(`Buscando notas para:
    Carrera: ${selectedCarrera}, Curso: ${selectedCurso}, División: ${selectedDivision}`);
  };

  const handleCellEdit = (index: number, field: string, value: string | number) => {
    const previousValue = notas[index][field as keyof typeof notas[0]];

    setNotas((prevNotas) => {
      const updatedNotas = [...prevNotas];
      updatedNotas[index] = { ...updatedNotas[index], [field]: value };
      return updatedNotas;
    });

    const alumno = notas[index].alumno;
    const fieldDisplayName = fieldNamesMap[field] || field.toUpperCase();
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
      <h2 style={{ fontSize: '2.5rem' }}>CARGAR NOTAS</h2>
      <FilterContainer>
        <div>
          <label>CARRERA:</label>
          <Select value={selectedCarrera} onChange={(e) => setSelectedCarrera(e.target.value)} disabled={isDisabled}>
            <option value="Desarrollo de Software">Desarrollo de Software</option>
            <option value="Relaciones Públicas">Relaciones Públicas</option>
            <option value="Diseño Gráfico">Diseño Gráfico</option>
          </Select>
        </div>
        <div>
          <label>CURSO:</label>
          <Select value={selectedCurso} onChange={(e) => setSelectedCurso(e.target.value)} disabled={isDisabled}>
            <option value="Inglés Técnico I">Inglés Técnico I</option>
            <option value="Matemáticas I">Matemáticas I</option>
            <option value="Historia II">Historia II</option>
          </Select>
        </div>
        <div>
          <label>DIVISIÓN:</label>
          <Select value={selectedDivision} onChange={(e) => setSelectedDivision(e.target.value)} disabled={isDisabled}>
            <option value="Div:1">1</option>
            <option value="Div:2">2</option>
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

      <NotasTableWrapper>
        <NotasTable>
          <thead>
            <tr>
              <th>DNI</th>
              <th>ALUMNO</th>
              <th>TRABAJO PRÁCTICO 1</th>
              <th>FECHA</th>
              <th>RECUPERATORIO TP 1</th>
              <th>FECHA RECUPERATORIO TP 1</th>
            </tr>
          </thead>
          <tbody>
            {notas.map((nota, index) => (
              <tr key={index}>
                <td>{nota.dni}</td>
                <td>{nota.alumno}</td>
                <td>
                  <StyledSelect
                    disabled={isDisabled}
                    value={nota.tp1 === '-' ? '' : nota.tp1.toString()}
                    onChange={(e) =>
                      handleCellEdit(index, 'tp1', e.target.value === '' ? '-' : parseInt(e.target.value, 10))
                    }
                  >
                    <option value="">Sin nota</option>
                    {[...Array(10).keys()].map((n) => (
                      <option key={n + 1} value={n + 1}>
                        {n + 1}
                      </option>
                    ))}
                  </StyledSelect>
                </td>
                <td>
                  <StyledInput
                    disabled={isDisabled}
                    type="date"
                    value={nota.fecha_tp1}
                    onChange={(e) => handleCellEdit(index, 'fecha_tp1', e.target.value)}
                  />
                </td>
                <td>
                  <StyledSelect
                    disabled={isDisabled}
                    value={nota.rec_tp1 === '-' ? '' : nota.rec_tp1.toString()}
                    onChange={(e) =>
                      handleCellEdit(index, 'rec_tp1', e.target.value === '' ? '-' : parseInt(e.target.value, 10))
                    }
                  >
                    <option value="">Sin nota</option>
                    {[...Array(10).keys()].map((n) => (
                      <option key={n + 1} value={n + 1}>
                        {n + 1}
                      </option>
                    ))}
                  </StyledSelect>
                </td>
                <td>
                  <StyledInput
                    disabled={isDisabled}
                    type="date"
                    value={nota.fecha_rec_tp1}
                    onChange={(e) => handleCellEdit(index, 'fecha_rec_tp1', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </NotasTable>
      </NotasTableWrapper>
    </CargarNotasContainer>
  );
};

export default CargarNotas;
