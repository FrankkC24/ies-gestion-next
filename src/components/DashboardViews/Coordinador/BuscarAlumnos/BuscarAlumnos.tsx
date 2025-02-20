'use client';

import React, { useState } from 'react';
import {
  BuscarAlumnosContainer,
  FilterContainer,
  Select,
  SearchButton,
  TableWrapper,
  Table,
  Input,
} from '@/components/DashboardViews/Coordinador/BuscarAlumnos/BuscarAlumnos.styles';

interface Alumno {
  dni: string;
  nombre: string;
  domicilio: string;
  localidad: string;
  telefono: string;
  email: string;
}

const BuscarAlumnos: React.FC = () => {
  const [searchBy, setSearchBy] = useState<string>(''); 
  const [searchValue, setSearchValue] = useState<string>(''); 
  const [results, setResults] = useState<Alumno[]>([]); 

  const alumnosMock = [
    { dni: '40118443', nombre: 'ACEVEDO JESÚS GABRIEL', domicilio: 'Calle 123', localidad: 'Santa Fe', telefono: '3421234567', email: 'jesus@example.com' },
    { dni: '46374567', nombre: 'LOPEZ MARIA', domicilio: 'Avenida 456', localidad: 'Rosario', telefono: '3417654321', email: 'maria@example.com' },
  ];

  const handleSearch = () => {
    if (!searchBy || !searchValue) {
      alert('Por favor selecciona un filtro de búsqueda y escribe un valor.');
      return;
    }

    const filteredResults = alumnosMock.filter((alumno) => {
      if (searchBy === 'dni') return alumno.dni.includes(searchValue);
      if (searchBy === 'nombre') return alumno.nombre.toLowerCase().includes(searchValue.toLowerCase());
      if (searchBy === 'localidad') return alumno.localidad.toLowerCase().includes(searchValue.toLowerCase());
      return false;
    });

    setResults(filteredResults);
  };

  return (
    <BuscarAlumnosContainer>
      <h2>BUSCAR ALUMNOS</h2>
      <FilterContainer>
        <div>
          <label>BUSCAR POR</label>
          <Select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="dni">DNI</option>
            <option value="nombre">Apellido y Nombre</option>
            <option value="localidad">Localidad</option>
          </Select>
        </div>
        <div>
          <Input
            type="text"
            placeholder="Escribe aquí..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <SearchButton onClick={handleSearch}>BUSCAR</SearchButton>
      </FilterContainer>

      {results.length > 0 && (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>DNI</th>
                <th>APELLIDO Y NOMBRE</th>
                <th>DOMICILIO</th>
                <th>LOCALIDAD</th>
                <th>TELÉFONO</th>
                <th>CORREO</th>
              </tr>
            </thead>
            <tbody>
              {results.map((alumno, index) => (
                <tr key={index}>
                  <td>{alumno.dni}</td>
                  <td>{alumno.nombre}</td>
                  <td>{alumno.domicilio}</td>
                  <td>{alumno.localidad}</td>
                  <td>{alumno.telefono}</td>
                  <td>{alumno.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      )}
    </BuscarAlumnosContainer>
  );
};

export default BuscarAlumnos;
