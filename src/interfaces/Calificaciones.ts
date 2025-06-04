// Interfaces para el sistema de Calificaciones

export interface Alumno {
  id: string;
  dni: string;
  nombre: string;
  apellido: string;
  año: string;
  carrera: string;
  domicilio?: string;
  localidad?: string;
  telefono?: string;
  email?: string;
}

export interface Carrera {
  id: string;
  nombre: string;
  duracion: number; // años
  coordinadorId: string;
}

export interface Materia {
  id: string;
  nombre: string;
  año: string;
  carreraId: string;
  cuatrimestre: 1 | 2;
  correlativas?: string[]; // IDs de materias correlativas
}

export interface Calificacion {
  id: string;
  alumnoId: string;
  materiaId: string;
  nota: number;
  fecha: Date;
  tipo: 'parcial' | 'final' | 'recuperatorio' | 'promocion';
  observaciones?: string;
  docenteId: string;
}

export interface CalificacionDetalle {
  alumno: Alumno;
  materia: Materia;
  calificaciones: Calificacion[];
  promedio?: number;
  estado: 'cursando' | 'aprobado' | 'libre' | 'promocionado';
}

// Para el formulario de búsqueda
export interface FiltroCalificaciones {
  carreraId: string;
  año: string;
  alumnoId: string;
}

// Respuesta del backend
export interface CalificacionesResponse {
  success: boolean;
  data: CalificacionDetalle[];
  message?: string;
}