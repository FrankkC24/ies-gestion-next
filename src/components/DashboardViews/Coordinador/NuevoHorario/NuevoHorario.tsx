'use client';

import React, { useState } from 'react';
import {
  NuevoHorarioContainer,
  FormContainer,
  StyledInput as Input,
  StyledSelect as Select,
  SaveButton as SubmitButton
} from './NuevoHorario.styles';

const NuevoHorario: React.FC = () => {
  const [formData, setFormData] = useState({
    asignatura: '',
    anio: '',
    periodo: '',
    dia: '',
    horario: '',
    profesor: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Nuevo horario agregado: ${JSON.stringify(formData)}`);
  };

  return (
    <NuevoHorarioContainer>
      <h2>AGREGAR NUEVO HORARIO</h2>
      <FormContainer onSubmit={handleSubmit}>
        <label>Asignatura:</label>
        <Input type="text" name="asignatura" value={formData.asignatura} onChange={handleChange} required />

        <label>Año:</label>
        <Select name="anio" value={formData.anio} onChange={handleChange} required>
          <option value="">Selecciona un año</option>
          <option value="1">1° Año</option>
          <option value="2">2° Año</option>
        </Select>

        <label>Periodo:</label>
        <Input type="text" name="periodo" value={formData.periodo} onChange={handleChange} required />

        <label>Día:</label>
        <Input type="text" name="dia" value={formData.dia} onChange={handleChange} required />

        <label>Horario:</label>
        <Input type="text" name="horario" value={formData.horario} onChange={handleChange} required />

        <label>Profesor:</label>
        <Input type="text" name="profesor" value={formData.profesor} onChange={handleChange} required />

        <SubmitButton type="submit">AGREGAR HORARIO</SubmitButton>
      </FormContainer>
    </NuevoHorarioContainer>
  );
};

export default NuevoHorario;
