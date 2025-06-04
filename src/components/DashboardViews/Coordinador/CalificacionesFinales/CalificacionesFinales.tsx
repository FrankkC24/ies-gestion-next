'use client';

import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaSave, FaTimes } from 'react-icons/fa';
import { useNotification } from '@/contexts/NotificationContext';
import {
  Container,
  FilterContainer,
  Select,
  SearchButton,
  CardsContainer,
  FinalCard,
  FinalDate,
  LoadButton,
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  DatePickerContainer,
  DateInput,
  TableWrapper,
  Table,
  CalificacionSelect,
  ModalActions,
  SaveButton,
  CancelButton,
} from './CalificacionesFinales.styles';

interface Final {
  id: string;
  fecha: string;
  fechaObj: Date;
}

interface Alumno {
  dni: string;
  nombre: string;
  apellido: string;
  calificacion: string;
}

const CalificacionesFinales: React.FC = () => {
  const { showNotification, showSuccess, showError, showWarning, replaceNotification, isDisabled } = useNotification();
  const [isClient, setIsClient] = useState(false);
  const [selectedMateria, setSelectedMateria] = useState('');
  const [finales, setFinales] = useState<Final[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [currentFinal, setCurrentFinal] = useState<Final | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);
  const [alumnosOriginales, setAlumnosOriginales] = useState<Alumno[]>([]); // Para comparar cambios
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const formatDateToInput = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatDateToDisplay = (dateString: string): string => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleSearch = () => {
    if (!selectedMateria) {
      showError('Por favor selecciona una materia.');
      return;
    }

    setIsLoading(true);
    showNotification('Buscando finales disponibles...', 'info', 2000);

    // Simulamos datos de finales para la materia seleccionada
    setTimeout(() => {
      const finalesMock: Final[] = [
        {
          id: '1',
          fecha: '15/03/2025',
          fechaObj: new Date(2025, 2, 15)
        },
        {
          id: '2', 
          fecha: '22/03/2025',
          fechaObj: new Date(2025, 2, 22)
        },
        {
          id: '3',
          fecha: '29/03/2025', 
          fechaObj: new Date(2025, 2, 29)
        }
      ];
      
      setFinales(finalesMock);
      setIsLoading(false);
      
      // Reemplazar la notificación anterior con el resultado
      replaceNotification(
        `Se encontraron ${finalesMock.length} finales disponibles para ${getMateriaName(selectedMateria)}`, 
        'success'
      );
    }, 1500);
  };

  const handleCargarFinal = (final: Final) => {
    setCurrentFinal(final);
    setSelectedDate(formatDateToInput(final.fechaObj));
    
    // Simulamos datos de alumnos para el final
    const alumnosMock: Alumno[] = [
      {
        dni: '40123456',
        nombre: 'Juan Carlos',
        apellido: 'Pérez',
        calificacion: ''
      },
      {
        dni: '39876543',
        nombre: 'María Elena',
        apellido: 'González',
        calificacion: ''
      },
      {
        dni: '41234567',
        nombre: 'Carlos Alberto',
        apellido: 'Rodríguez',
        calificacion: ''
      },
      {
        dni: '42345678',
        nombre: 'Ana Sofía',
        apellido: 'López',
        calificacion: ''
      },
      {
        dni: '38765432',
        nombre: 'Pedro Miguel',
        apellido: 'Martínez',
        calificacion: ''
      }
    ];
    
    setAlumnos(alumnosMock);
    setAlumnosOriginales(alumnosMock.map(a => ({ ...a }))); // Copia para comparar cambios
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentFinal(null);
    setAlumnos([]);
    setAlumnosOriginales([]);
  };

  const handleCalificacionChange = (dni: string, calificacion: string) => {
    setAlumnos(prev => 
      prev.map(alumno => 
        alumno.dni === dni 
          ? { ...alumno, calificacion }
          : alumno
      )
    );
    // NO mostramos notificación aquí, solo actualizamos el estado
  };

  const handleSave = () => {
    // Contar cambios realizados
    const cambiosRealizados = alumnos.filter((alumno, index) => {
      const original = alumnosOriginales[index];
      return original && alumno.calificacion !== original.calificacion;
    });
    
    if (cambiosRealizados.length === 0) {
      showWarning('No se han realizado cambios en las calificaciones.');
      return;
    }

    // Aquí iría la lógica para guardar las calificaciones
    console.log('Guardando calificaciones:', {
      finalId: currentFinal?.id,
      fecha: selectedDate,
      fechaFormateada: formatDateToDisplay(selectedDate),
      cambios: cambiosRealizados
    });
    
    // Cerrar modal primero
    handleCloseModal();
    
    // Mostrar notificación de éxito después de cerrar
    setTimeout(() => {
      showSuccess(
        `Calificaciones actualizadas exitosamente para ${cambiosRealizados.length} alumno${cambiosRealizados.length > 1 ? 's' : ''}.`
      );
    }, 100);
  };

  const getMateriaName = (materiaId: string) => {
    const materias = {
      '1': 'Programación I',
      '2': 'Base de Datos',
      '3': 'Sistemas Operativos',
      '4': 'Redes y Comunicaciones',
      '5': 'Ingeniería de Software'
    };
    return materias[materiaId as keyof typeof materias] || '';
  };

  if (!isClient) return null;

  return (
    <Container>
      <h2>CARGAR FINALES</h2>
      
      <FilterContainer>
        <label>MATERIAS:</label>
        <Select 
          value={selectedMateria} 
          onChange={(e) => setSelectedMateria(e.target.value)}
          disabled={isDisabled}
        >
          <option value="">Seleccionar...</option>
          <option value="1">Programación I</option>
          <option value="2">Base de Datos</option>
          <option value="3">Sistemas Operativos</option>
          <option value="4">Redes y Comunicaciones</option>
          <option value="5">Ingeniería de Software</option>
        </Select>
        
        <SearchButton 
          onClick={handleSearch} 
          disabled={!selectedMateria || isLoading || isDisabled}
        >
          {isLoading ? 'CARGANDO...' : 'BUSCAR'}
        </SearchButton>
      </FilterContainer>

      {finales.length > 0 && (
        <CardsContainer>
          {finales.map((final) => (
            <FinalCard key={final.id}>
              <FinalDate>
                <FaCalendarAlt />
                FINAL - {final.fecha}
              </FinalDate>
              <LoadButton 
                onClick={() => handleCargarFinal(final)}
                disabled={isDisabled}
              >
                CARGAR
              </LoadButton>
            </FinalCard>
          ))}
        </CardsContainer>
      )}

      {/* Modal para cargar calificaciones */}
      {showModal && currentFinal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>
                Cargar Final - {getMateriaName(selectedMateria)}
              </ModalTitle>
              <CloseButton onClick={handleCloseModal}>
                <FaTimes />
              </CloseButton>
            </ModalHeader>

            <DatePickerContainer>
              <label>Fecha del Final:</label>
              <DateInput
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                disabled={isDisabled}
              />
            </DatePickerContainer>

            <TableWrapper>
              <Table>
                <thead>
                  <tr>
                    <th>DNI</th>
                    <th>Nombre y Apellido</th>
                    <th>Calificación</th>
                  </tr>
                </thead>
                <tbody>
                  {alumnos.map((alumno) => (
                    <tr key={alumno.dni}>
                      <td>{alumno.dni}</td>
                      <td>{`${alumno.apellido}, ${alumno.nombre}`}</td>
                      <td>
                        <CalificacionSelect
                          value={alumno.calificacion}
                          onChange={(e) => handleCalificacionChange(alumno.dni, e.target.value)}
                          disabled={isDisabled}
                        >
                          <option value="">--</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </CalificacionSelect>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableWrapper>

            <ModalActions>
              <CancelButton onClick={handleCloseModal} disabled={isDisabled}>
                <FaTimes /> CANCELAR
              </CancelButton>
              <SaveButton onClick={handleSave} disabled={isDisabled}>
                <FaSave /> GUARDAR
              </SaveButton>
            </ModalActions>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default CalificacionesFinales;