'use client';

import React, { useState, useEffect } from 'react';
import {
  EditarMesasContainer,
  FilterContainer,
  Select,
  SearchButton,
  TableWrapper,
  Table,
  ActionButton,
} from './EditarMesas.styles';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Mesa {
  materia: string;
  llamado: string;
  fecha: string;
  hora: string;
  titular: string;
  adjunto: string;
}

const EditarMesas: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedCarrera, setSelectedCarrera] = useState('');
  const [selectedTurno, setSelectedTurno] = useState('');
  const [mesas, setMesas] = useState<Mesa[]>([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSearch = () => {
    if (!selectedCarrera || !selectedTurno) {
      alert('Por favor selecciona todos los filtros antes de buscar.');
      return;
    }

    setMesas([
      { materia: 'Administración', llamado: '1', fecha: '10/11/2025', hora: '19:00', titular: 'Roth - Luis', adjunto: 'PDF' },
      { materia: 'Contabilidad', llamado: '2', fecha: '12/11/2025', hora: '20:00', titular: 'Fontana - Cesar', adjunto: 'PDF' },
    ]);
  };

  const handleEdit = (index: number) => {
    alert(`Editar mesa de ${mesas[index].materia}`);
  };

  const handleDelete = (index: number) => {
    const confirmDelete = window.confirm(`¿Seguro que deseas eliminar la mesa de ${mesas[index].materia}?`);
    if (confirmDelete) {
      setMesas((prev) => prev.filter((_, i) => i !== index));
    }
  };

  if (!isClient) return null;

  return (
    <EditarMesasContainer>
      <h2>EDITAR MESAS EXÁMENES</h2>
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
          <label>TURNO:</label>
          <Select value={selectedTurno} onChange={(e) => setSelectedTurno(e.target.value)}>
            <option value="">Selecciona un turno</option>
            <option value="Feb-Mar">2025-Feb-Mar</option>
            <option value="Jun-Jul">2025-Jun-Jul</option>
          </Select>
        </div>

        <SearchButton onClick={handleSearch} disabled={!selectedTurno}>
          BUSCAR
        </SearchButton>
      </FilterContainer>

      {mesas.length > 0 && (
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Materia</th>
                <th>Llam</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Titular</th>
                <th>Adjunto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {mesas.map((mesa, index) => (
                <tr key={index}>
                  <td>{mesa.materia}</td>
                  <td>{mesa.llamado}</td>
                  <td>{mesa.fecha}</td>
                  <td>{mesa.hora}</td>
                  <td>{mesa.titular}</td>
                  <td>{mesa.adjunto}</td>
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
    </EditarMesasContainer>
  );
};

export default EditarMesas;
