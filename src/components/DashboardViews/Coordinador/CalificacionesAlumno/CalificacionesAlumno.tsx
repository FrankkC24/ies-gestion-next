'use client';

import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { es } from 'date-fns/locale'; // Importar locale español
import { FaSave } from 'react-icons/fa'; // Importar icono de guardar
import {
  CalificacionesAlumnoContainer,
  FormContainer,
  FormRow,
  FormGroup,
  Label,
  Select,
  Input,
  SearchButton,
  MateriasContainer,
  MateriaCard,
  MateriaTitle,
  NotasGrid,
  NotaRow,
  NotaLabel,
  DatePickerWrapper,
  FloatingButton,
} from '@/components/DashboardViews/Coordinador/CalificacionesAlumno/CalificacionesAlumno.styles';
import { useNotification } from '@/contexts/NotificationContext';

// Registrar locale español
registerLocale('es', es);

interface Alumno {
  id: string;
  dni: string;
  nombre: string;
  año: string;
}

interface Materia {
  id: string;
  nombre: string;
  año: string;
}

interface NotaItem {
  nota: string;
  fecha: Date | null;
  recuperatorio: string;
  fechaRecuperatorio: Date | null;
}

interface MateriaNota {
  materiaId: string;
  tp1: NotaItem;
  tp2: NotaItem;
  parcial1: NotaItem;
  parcial2: NotaItem;
}

interface Carrera {
  id: string;
  nombre: string;
}

const CalificacionesAlumno: React.FC = () => {
  const [carreraAsignada] = useState<string>('Tecnicatura Superior en Análisis de Sistemas'); // Simulado - vendría del backend
  const [añoSeleccionado, setAñoSeleccionado] = useState<string>('1');
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState<string>('');
  const [dniAlumno, setDniAlumno] = useState<string>('');
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);
  const [mostrarMaterias, setMostrarMaterias] = useState<boolean>(false);
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [notasMaterias, setNotasMaterias] = useState<MateriaNota[]>([]);
  const [haycambiosPendientes, setHayChangiosPendientes] = useState<boolean>(false);
  const [notasOriginales, setNotasOriginales] = useState<MateriaNota[]>([]);
  
  const { showWarning, showError, showSuccess } = useNotification();

  // Mock de materias por año
  const materiasMock: Record<string, Materia[]> = {
    '1': [
      { id: '1', nombre: 'Matemática I', año: '1' },
      { id: '2', nombre: 'Algoritmos y Estructuras de Datos', año: '1' },
      { id: '3', nombre: 'Sistemas y Organizaciones', año: '1' },
      { id: '4', nombre: 'Arquitectura de Computadores', año: '1' },
    ],
    '2': [
      { id: '5', nombre: 'Matemática II', año: '2' },
      { id: '6', nombre: 'Programación II', año: '2' },
      { id: '7', nombre: 'Base de Datos I', año: '2' },
    ],
    '3': [
      { id: '8', nombre: 'Sistemas Operativos', año: '3' },
      { id: '9', nombre: 'Redes y Comunicaciones', año: '3' },
    ],
  };

  // Mock de alumnos por año - en producción vendría del backend
  const alumnosMock: Record<string, Alumno[]> = {
    '1': [
      { id: '1', dni: '40118443', nombre: 'ACEVEDO JESÚS GABRIEL', año: '1' },
      { id: '2', dni: '42345678', nombre: 'MARTINEZ SOFIA ELENA', año: '1' },
      { id: '3', dni: '41987654', nombre: 'RODRIGUEZ CARLOS MIGUEL', año: '1' },
    ],
    '2': [
      { id: '4', dni: '39876543', nombre: 'GOMEZ LAURA BEATRIZ', año: '2' },
      { id: '5', dni: '41234567', nombre: 'FERNANDEZ DIEGO ANTONIO', año: '2' },
    ],
    '3': [
      { id: '6', dni: '38765432', nombre: 'SILVA MARIA CRISTINA', año: '3' },
      { id: '7', dni: '40567890', nombre: 'TORRES JUAN PABLO', año: '3' },
    ],
  };

  // Limpiar estado cuando el componente se desmonta o cambia de vista
  useEffect(() => {
    // Cleanup function que se ejecuta cuando el componente se desmonta
    return () => {
      setHayChangiosPendientes(false);
      setMostrarMaterias(false);
      setAlumnoSeleccionado('');
      setDniAlumno('');
      setNotasMaterias([]);
      setNotasOriginales([]);
    };
  }, []);

  // Actualizar lista de alumnos cuando cambia el año
  useEffect(() => {
    setAlumnos(alumnosMock[añoSeleccionado] || []);
    setAlumnoSeleccionado('');
    setDniAlumno('');
    setMostrarMaterias(false);
    setHayChangiosPendientes(false);
  }, [añoSeleccionado]);

  // Actualizar DNI cuando se selecciona un alumno
  useEffect(() => {
    if (alumnoSeleccionado) {
      const alumno = alumnos.find(a => a.id === alumnoSeleccionado);
      setDniAlumno(alumno?.dni || '');
    } else {
      setDniAlumno('');
    }
    setMostrarMaterias(false);
    setHayChangiosPendientes(false);
  }, [alumnoSeleccionado, alumnos]);

  // Función para crear nota vacía
  const crearNotaVacia = (): NotaItem => ({
    nota: '',
    fecha: null,
    recuperatorio: '',
    fechaRecuperatorio: null,
  });

  // Inicializar notas cuando se cargan las materias
  const inicializarNotas = (materiasList: Materia[]) => {
    const notasIniciales = materiasList.map(materia => ({
      materiaId: materia.id,
      tp1: crearNotaVacia(),
      tp2: crearNotaVacia(),
      parcial1: crearNotaVacia(),
      parcial2: crearNotaVacia(),
    }));
    setNotasMaterias(notasIniciales);
    setNotasOriginales(JSON.parse(JSON.stringify(notasIniciales))); // Copia profunda
    setHayChangiosPendientes(false);
  };

  // Verificar si hay cambios pendientes
  const verificarCambios = (nuevasNotas: MateriaNota[]) => {
    const hayDiferencias = JSON.stringify(nuevasNotas) !== JSON.stringify(notasOriginales);
    setHayChangiosPendientes(hayDiferencias);
  };

  const handleBuscar = () => {
    if (!alumnoSeleccionado) {
      showWarning('Debe seleccionar un alumno antes de realizar la búsqueda.');
      return;
    }

    // Cargar materias del año seleccionado
    const materiasDelAño = materiasMock[añoSeleccionado] || [];
    setMaterias(materiasDelAño);
    inicializarNotas(materiasDelAño);
    setMostrarMaterias(true);

    const alumno = alumnos.find(a => a.id === alumnoSeleccionado);
    showSuccess(`Cargando calificaciones para: ${alumno?.nombre} (DNI: ${alumno?.dni})`);
  };

  // Función para actualizar notas
  const actualizarNota = (
    materiaId: string, 
    tipo: 'tp1' | 'tp2' | 'parcial1' | 'parcial2', 
    campo: keyof NotaItem, 
    valor: string | Date | null
  ) => {
    const nuevasNotas = notasMaterias.map(materia => 
      materia.materiaId === materiaId 
        ? {
            ...materia,
            [tipo]: {
              ...materia[tipo],
              [campo]: valor
            }
          }
        : materia
    );
    setNotasMaterias(nuevasNotas);
    verificarCambios(nuevasNotas);
  };

  // Función para guardar cambios
  const guardarCambios = () => {
    // Aquí iría la lógica para guardar en el backend
    setNotasOriginales(JSON.parse(JSON.stringify(notasMaterias)));
    setHayChangiosPendientes(false);
    showSuccess('Calificaciones guardadas correctamente');
  };

  // Opciones para las notas
  const opcionesNotas = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const renderMateriaCard = (materia: Materia) => {
    const notasMateria = notasMaterias.find(n => n.materiaId === materia.id);
    if (!notasMateria) return null;

    return (
      <MateriaCard key={materia.id}>
        <MateriaTitle>{materia.nombre}</MateriaTitle>
        
        <NotasGrid>
          {/* TP1 */}
          <NotaRow>
            <NotaLabel>Trabajo Práctico 1</NotaLabel>
            <Select 
              $compact
              value={notasMateria.tp1.nota}
              onChange={(e) => actualizarNota(materia.id, 'tp1', 'nota', e.target.value)}
            >
              {opcionesNotas.map(nota => (
                <option key={nota} value={nota}>{nota || 'Sin nota'}</option>
              ))}
            </Select>
            <DatePickerWrapper>
              <DatePicker
                selected={notasMateria.tp1.fecha}
                onChange={(date) => actualizarNota(materia.id, 'tp1', 'fecha', date)}
                placeholderText="Fecha"
                dateFormat="dd/MM/yyyy"
                locale="es"
                popperClassName="datepicker-popper"
                popperPlacement="bottom-start"
              />
            </DatePickerWrapper>
            
            <NotaLabel>Recuperatorio</NotaLabel>
            <Select 
              $compact
              value={notasMateria.tp1.recuperatorio}
              onChange={(e) => actualizarNota(materia.id, 'tp1', 'recuperatorio', e.target.value)}
            >
              {opcionesNotas.map(nota => (
                <option key={nota} value={nota}>{nota || 'Sin nota'}</option>
              ))}
            </Select>
            <DatePickerWrapper>
              <DatePicker
                selected={notasMateria.tp1.fechaRecuperatorio}
                onChange={(date) => actualizarNota(materia.id, 'tp1', 'fechaRecuperatorio', date)}
                placeholderText="Fecha Rec."
                dateFormat="dd/MM/yyyy"
                locale="es"
                popperClassName="datepicker-popper"
                popperPlacement="bottom-start"
              />
            </DatePickerWrapper>
          </NotaRow>

          {/* TP2 */}
          <NotaRow>
            <NotaLabel>Trabajo Práctico 2</NotaLabel>
            <Select 
              $compact
              value={notasMateria.tp2.nota}
              onChange={(e) => actualizarNota(materia.id, 'tp2', 'nota', e.target.value)}
            >
              {opcionesNotas.map(nota => (
                <option key={nota} value={nota}>{nota || 'Sin nota'}</option>
              ))}
            </Select>
            <DatePickerWrapper>
              <DatePicker
                selected={notasMateria.tp2.fecha}
                onChange={(date) => actualizarNota(materia.id, 'tp2', 'fecha', date)}
                placeholderText="Fecha"
                dateFormat="dd/MM/yyyy"
                locale="es"
                popperClassName="datepicker-popper"
                popperPlacement="bottom-start"
              />
            </DatePickerWrapper>
            
            <NotaLabel>Recuperatorio</NotaLabel>
            <Select 
              $compact
              value={notasMateria.tp2.recuperatorio}
              onChange={(e) => actualizarNota(materia.id, 'tp2', 'recuperatorio', e.target.value)}
            >
              {opcionesNotas.map(nota => (
                <option key={nota} value={nota}>{nota || 'Sin nota'}</option>
              ))}
            </Select>
            <DatePickerWrapper>
              <DatePicker
                selected={notasMateria.tp2.fechaRecuperatorio}
                onChange={(date) => actualizarNota(materia.id, 'tp2', 'fechaRecuperatorio', date)}
                placeholderText="Fecha Rec."
                dateFormat="dd/MM/yyyy"
                locale="es"
                popperClassName="datepicker-popper"
                popperPlacement="bottom-start"
              />
            </DatePickerWrapper>
          </NotaRow>

          {/* Parcial 1 */}
          <NotaRow>
            <NotaLabel>Parcial 1</NotaLabel>
            <Select 
              $compact
              value={notasMateria.parcial1.nota}
              onChange={(e) => actualizarNota(materia.id, 'parcial1', 'nota', e.target.value)}
            >
              {opcionesNotas.map(nota => (
                <option key={nota} value={nota}>{nota || 'Sin nota'}</option>
              ))}
            </Select>
            <DatePickerWrapper>
              <DatePicker
                selected={notasMateria.parcial1.fecha}
                onChange={(date) => actualizarNota(materia.id, 'parcial1', 'fecha', date)}
                placeholderText="Fecha"
                dateFormat="dd/MM/yyyy"
                locale="es"
                popperClassName="datepicker-popper"
                popperPlacement="bottom-start"
              />
            </DatePickerWrapper>
            
            <NotaLabel>Recuperatorio</NotaLabel>
            <Select 
              $compact
              value={notasMateria.parcial1.recuperatorio}
              onChange={(e) => actualizarNota(materia.id, 'parcial1', 'recuperatorio', e.target.value)}
            >
              {opcionesNotas.map(nota => (
                <option key={nota} value={nota}>{nota || 'Sin nota'}</option>
              ))}
            </Select>
            <DatePickerWrapper>
              <DatePicker
                selected={notasMateria.parcial1.fechaRecuperatorio}
                onChange={(date) => actualizarNota(materia.id, 'parcial1', 'fechaRecuperatorio', date)}
                placeholderText="Fecha Rec."
                dateFormat="dd/MM/yyyy"
                locale="es"
                popperClassName="datepicker-popper"
                popperPlacement="bottom-start"
              />
            </DatePickerWrapper>
          </NotaRow>

          {/* Parcial 2 */}
          <NotaRow>
            <NotaLabel>Parcial 2</NotaLabel>
            <Select 
              $compact
              value={notasMateria.parcial2.nota}
              onChange={(e) => actualizarNota(materia.id, 'parcial2', 'nota', e.target.value)}
            >
              {opcionesNotas.map(nota => (
                <option key={nota} value={nota}>{nota || 'Sin nota'}</option>
              ))}
            </Select>
            <DatePickerWrapper>
              <DatePicker
                selected={notasMateria.parcial2.fecha}
                onChange={(date) => actualizarNota(materia.id, 'parcial2', 'fecha', date)}
                placeholderText="Fecha"
                dateFormat="dd/MM/yyyy"
                locale="es"
                popperClassName="datepicker-popper"
                popperPlacement="bottom-start"
              />
            </DatePickerWrapper>
            
            <NotaLabel>Recuperatorio</NotaLabel>
            <Select 
              $compact
              value={notasMateria.parcial2.recuperatorio}
              onChange={(e) => actualizarNota(materia.id, 'parcial2', 'recuperatorio', e.target.value)}
            >
              {opcionesNotas.map(nota => (
                <option key={nota} value={nota}>{nota || 'Sin nota'}</option>
              ))}
            </Select>
            <DatePickerWrapper>
              <DatePicker
                selected={notasMateria.parcial2.fechaRecuperatorio}
                onChange={(date) => actualizarNota(materia.id, 'parcial2', 'fechaRecuperatorio', date)}
                placeholderText="Fecha Rec."
                dateFormat="dd/MM/yyyy"
                locale="es"
                popperClassName="datepicker-popper"
                popperPlacement="bottom-start"
              />
            </DatePickerWrapper>
          </NotaRow>
        </NotasGrid>
      </MateriaCard>
    );
  };

  return (
    <CalificacionesAlumnoContainer>
      <h2>CALIFICACIONES DE ALUMNOS</h2>
      
      <FormContainer>
        {/* Fila superior */}
        <FormRow>
          <FormGroup $compact>
            <Label>CARRERA ASIGNADA</Label>
            <Input 
              type="text" 
              value={carreraAsignada} 
              readOnly 
              $isReadOnly={true}
            />
          </FormGroup>
          
          <FormGroup $compact>
            <Label>AÑO</Label>
            <Select 
              $compact
              value={añoSeleccionado} 
              onChange={(e) => setAñoSeleccionado(e.target.value)}
            >
              <option value="1">1° Año</option>
              <option value="2">2° Año</option>
              <option value="3">3° Año</option>
            </Select>
          </FormGroup>
        </FormRow>

        {/* Fila inferior */}
        <FormRow>
          <FormGroup>
            <Label>ALUMNO</Label>
            <Select 
              value={alumnoSeleccionado} 
              onChange={(e) => setAlumnoSeleccionado(e.target.value)}
            >
              <option value="">Seleccionar alumno...</option>
              {alumnos.map((alumno) => (
                <option key={alumno.id} value={alumno.id}>
                  {alumno.nombre}
                </option>
              ))}
            </Select>
          </FormGroup>
          
          <FormGroup $compact>
            <Label>DNI</Label>
            <Input 
              type="text" 
              value={dniAlumno} 
              readOnly 
              $isReadOnly={true}
              placeholder="DNI del alumno seleccionado"
            />
          </FormGroup>
          
          <FormGroup $compact>
            <SearchButton 
              onClick={handleBuscar}
              disabled={!alumnoSeleccionado}
            >
              BUSCAR
            </SearchButton>
          </FormGroup>
        </FormRow>
      </FormContainer>

      {/* Sección de Materias */}
      {mostrarMaterias && (
        <MateriasContainer>
          {materias.map(materia => renderMateriaCard(materia))}
        </MateriasContainer>
      )}

      {/* Botón flotante para guardar cambios */}
      {haycambiosPendientes && (
        <FloatingButton onClick={guardarCambios}>
          <FaSave style={{ marginRight: '0.5rem' }} />
          Guardar Cambios
        </FloatingButton>
      )}
    </CalificacionesAlumnoContainer>
  );
};

export default CalificacionesAlumno;