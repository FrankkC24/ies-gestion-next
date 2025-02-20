'use client';

import React, { useState } from 'react';
import { Docente } from '@/interfaces/Docente';
import {
  BuscarDocentesContainer,
  FilterContainer,
  Select,
  SearchButton,
  TableWrapper,
  Table,
  Input,
} from '@/components/DashboardViews/Coordinador/BuscarDocentes/BuscarDocentes.styles';

const BuscarDocentes: React.FC = () => {
  const [searchBy, setSearchBy] = useState<string>(''); // Opción seleccionada
  const [searchValue, setSearchValue] = useState<string>(''); // Valor ingresado
  const [results, setResults] = useState<Docente[]>([]); // Resultados de la búsqueda

  const docentesMock: Docente[] = [
    { dni: '12345678', nombre: 'Gómez Juan', domicilio: 'Calle Falsa 123', localidad: 'Santa Fe', telefono: '342567890', celular: '342678901', email: 'juan@example.com' },
    { dni: '87654321', nombre: 'Pérez María', domicilio: 'Avenida Siempre Viva 742', localidad: 'Rosario', telefono: '341123456', celular: '341789012', email: 'maria@example.com' },
  ];

  const handleSearch = () => {
    if (!searchBy || !searchValue) {
      alert('Por favor selecciona un filtro de búsqueda y escribe un valor.');
      return;
    }

    const filteredResults = docentesMock.filter((docente) => {
      switch (searchBy) {
        case 'dni':
          return docente.dni.includes(searchValue);
        case 'nombre':
          return docente.nombre.toLowerCase().includes(searchValue.toLowerCase());
        case 'carrera':
          return docente.localidad.toLowerCase().includes(searchValue.toLowerCase());
        default:
          return false;
      }
    });

    setResults(filteredResults);
  };

  return (
    <BuscarDocentesContainer>
      <h2>BUSCAR DOCENTES</h2>
      <FilterContainer>
        <div>
          <label>BUSCAR POR</label>
          <Select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="dni">DNI</option>
            <option value="nombre">Apellido y Nombre</option>
            <option value="carrera">Carrera</option>
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
                <th>CELULAR</th>
                <th>CORREO</th>
              </tr>
            </thead>
            <tbody>
              {results.map((docente, index) => (
                <tr key={index}>
                  <td>{docente.dni}</td>
                  <td>{docente.nombre}</td>
                  <td>{docente.domicilio}</td>
                  <td>{docente.localidad}</td>
                  <td>{docente.telefono}</td>
                  <td>{docente.celular}</td>
                  <td>{docente.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      )}
    </BuscarDocentesContainer>
  );
};

export default BuscarDocentes;
