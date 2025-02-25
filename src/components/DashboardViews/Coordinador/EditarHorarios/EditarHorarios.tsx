'use client';

import React, { useState, useEffect } from 'react';
import {
  HorariosMateriasContainer,
  FilterContainer,
  Select,
  SearchButton,
  TableWrapper,
  Table,
  ActionButton,
} from './EditarHorarios.styles';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Horario {
  asignatura: string;
  anio: string;
  periodo: string;
  dia: string;
  horario: string;
  profesor: string;
}

const EditarHorarios: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedCarrera, setSelectedCarrera] = useState('');
  const [selectedAnio, setSelectedAnio] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('');
  const [horarios, setHorarios] = useState<Horario[]>([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearch = () => {
    if (!selectedCarrera || !selectedAnio || !selectedDivision) {
      alert('Por favor selecciona todos los filtros antes de buscar.');
      return;
    }

    setHorarios([
      { asignatura: 'Administración', anio: '1° Año', periodo: 'Anual', dia: 'Lunes', horario: '20:00 - 22:40', profesor: 'Oneto Roth - Luis Maria' },
      { asignatura: 'Informática', anio: '1° Año', periodo: 'Anual', dia: 'Martes', horario: '20:00 - 22:40', profesor: 'Fontana - Cesar Marcelo' },
    ]);
  };

  const handleEdit = (index: number) => {
    alert(`Editar horario de ${horarios[index].asignatura}`);
  };

  const handleDelete = (index: number) => {
    const confirmDelete = window.confirm(`¿Seguro que deseas eliminar el horario de ${horarios[index].asignatura}?`);
    if (confirmDelete) {
      setHorarios((prev) => prev.filter((_, i) => i !== index));
    }
  };

  if (!isClient) return null;

  return (
    <HorariosMateriasContainer>
      <h2>EDITAR HORARIOS</h2>
      <FilterContainer>
        <div>
          <label>CARRERA:</label>
          <Select value={selectedCarrera} onChange={(e) => setSelectedCarrera(e.target.value)}>
            <option value="">Selecciona una carrera</option>
            <option value="1">Desarrollo de Software</option>
            <option value="2">Relaciones Públicas</option>
          </Select>
        </div>

        <div>
          <label>AÑO:</label>
          <Select value={selectedAnio} onChange={(e) => setSelectedAnio(e.target.value)} disabled={!selectedCarrera}>
            <option value="">Selecciona un año</option>
            <option value="1">1° Año</option>
            <option value="2">2° Año</option>
          </Select>
        </div>

        <div>
          <label>DIVISIÓN:</label>
          <Select value={selectedDivision} onChange={(e) => setSelectedDivision(e.target.value)} disabled={!selectedAnio}>
            <option value="">Selecciona una división</option>
            <option value="1">División 1</option>
            <option value="2">División 2</option>
          </Select>
        </div>

        <SearchButton onClick={handleSearch} disabled={!selectedDivision}>
          BUSCAR
        </SearchButton>
      </FilterContainer>

      {horarios.length > 0 && (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Asignatura</th>
                <th>Año</th>
                <th>Periodo</th>
                <th>Día</th>
                <th>Horario</th>
                <th>Profesor</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {horarios.map((horario, index) => (
                <tr key={index}>
                  <td>{horario.asignatura}</td>
                  <td>{horario.anio}</td>
                  <td>{horario.periodo}</td>
                  <td>{horario.dia}</td>
                  <td>{horario.horario}</td>
                  <td>{horario.profesor}</td>
                  <td>
                    <ActionButton onClick={() => handleEdit(index)}>
                      <FaEdit />
                    </ActionButton>
                    <ActionButton onClick={() => handleDelete(index)} danger>
                      <FaTrash />
                    </ActionButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      )}
    </HorariosMateriasContainer>
  );
};

export default EditarHorarios;
