'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ReportContainer,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
} from './ReportarProblema.styles';

interface ReportarProblemaProps {
  variant?: 'alumno' | 'docente' | 'coordinador'; // Personalización según el rol
  onSubmit: (data: { dni: string; email: string; description: string }) => void;
}

// ✅ Definir validaciones con Zod
const reportSchema = z.object({
  dni: z.string().min(7, 'El DNI debe tener al menos 7 caracteres').max(10, 'El DNI es demasiado largo'),
  email: z.string().email('Correo inválido'),
  description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres'),
});

type ReportFormData = z.infer<typeof reportSchema>;

const ReportarProblema: React.FC<ReportarProblemaProps> = ({ variant = 'alumno', onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReportFormData>({
    resolver: zodResolver(reportSchema),
  });

  const handleFormSubmit: SubmitHandler<ReportFormData> = (data) => {
    toast.success('Reporte enviado correctamente 🎉');
    onSubmit(data);
  };

  return (
    <ReportContainer>
      <h2>REPORTAR PROBLEMA</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormGroup>
          <Label htmlFor="dni">DNI</Label>
          <Input id="dni" {...register('dni')} placeholder="Ingresa tu DNI" />
          {errors.dni?.message && <span>{errors.dni.message}</span>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">CORREO ELECTRÓNICO</Label>
          <Input id="email" type="email" {...register('email')} placeholder="Ingresa tu correo" />
          {errors.email?.message && <span>{errors.email.message}</span>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">DESCRIPCIÓN DEL PROBLEMA</Label>
          <TextArea id="description" {...register('description')} placeholder="Describe el problema" />
          {errors.description?.message && <span>{errors.description.message}</span>}
        </FormGroup>
        <SubmitButton type="submit">ENVIAR</SubmitButton>
      </form>
    </ReportContainer>
  );
};

export default ReportarProblema;
