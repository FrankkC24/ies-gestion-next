'use client';

import React, { useState, useEffect } from 'react';
import { FaEye, FaTimes, FaPrint, FaDownload, FaList } from 'react-icons/fa';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ActaPDF from '@/utils/ActaPDF';
import ResumenMesasPDF from '@/utils/ResumenMesasPDF';
import {
  InscriptosMesasContainer,
  FilterContainer,
  Select,
  SearchButton,
  TableWrapper,
  Table,
  DetalleButton,
  DetalleModal,
  DetalleModalContent,
  CloseButton,
  PrintButton,
  AlumnosTable,
  ModalTitle,
  ModalHeader,
  ModalActions,
} from './InscriptosMesas.styles';

interface MesaInscriptos {
  asignatura: string;
  llamado: string;
  fecha: string;
  hora: string;
  titular: string;
  adjunto1: string;
  adjunto2: string;
  inscriptos: number;
}

interface Alumno {
  legajo: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  fechaInscripcion: string;
  condicion: string;
  dni: string;
}

const InscriptosMesas: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedCarrera, setSelectedCarrera] = useState('');
  const [selectedTurno, setSelectedTurno] = useState('');
  const [selectedLlamado, setSelectedLlamado] = useState('');
  const [mesas, setMesas] = useState<MesaInscriptos[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDetalle, setShowDetalle] = useState(false);
  const [showPDFPreview, setShowPDFPreview] = useState(false);
  const [currentDetalle, setCurrentDetalle] = useState<{
    asignatura: string;
    fecha: string;
    turno: string;
    division: string;
    tipo: string;
    carrera: string;
    año: string;
    materia: string;
    alumnos: Alumno[];
  }>({
    asignatura: '',
    fecha: '',
    turno: 'T',
    division: '1',
    tipo: 'Presencial',
    carrera: 'DSW',
    año: '1º AÑO',
    materia: 'TALLER',
    alumnos: []
  });

  // Estados para controlar la habilitación en cascada
  const isTurnoEnabled = selectedCarrera !== '';
  const isLlamadoEnabled = isTurnoEnabled && selectedTurno !== '';
  const isSearchEnabled = isLlamadoEnabled && selectedLlamado !== '';

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Resetear valores cuando se cambia una selección superior
  useEffect(() => {
    if (!isTurnoEnabled) setSelectedTurno('');
  }, [selectedCarrera, isTurnoEnabled]);

  useEffect(() => {
    if (!isLlamadoEnabled) setSelectedLlamado('');
  }, [selectedTurno, isLlamadoEnabled]);

  const handleSearch = () => {
    if (!isSearchEnabled) {
      alert('Por favor completa todos los filtros.');
      return;
    }

    setIsLoading(true);

    // Simulamos una carga
    setTimeout(() => {
      setMesas([
        {
          asignatura: 'Comunicación',
          llamado: '1°',
          fecha: '12/03/2025',
          hora: '08:00',
          titular: 'Prof. Pérez',
          adjunto1: 'Prof. López',
          adjunto2: 'Prof. Gómez',
          inscriptos: 15,
        },
        {
          asignatura: 'Programación I',
          llamado: '1°',
          fecha: '14/03/2025',
          hora: '10:00',
          titular: 'Prof. Rodríguez',
          adjunto1: 'Prof. Martínez',
          adjunto2: 'Prof. García',
          inscriptos: 12,
        },
        {
          asignatura: 'Base de Datos',
          llamado: '1°',
          fecha: '16/03/2025',
          hora: '14:00',
          titular: 'Prof. González',
          adjunto1: 'Prof. Fernández',
          adjunto2: 'Prof. Díaz',
          inscriptos: 20,
        },
      ]);
      setIsLoading(false);
    }, 800);
  };

  const handleVerDetalle = (asignatura: string, fecha: string) => {
    // Datos mock de alumnos inscritos en la mesa seleccionada
    const alumnosMock: Alumno[] = [
      {
        legajo: 'A12345',
        nombre: 'Malena',
        apellido: 'Valverdi',
        email: 'malena.valverdi@ejemplo.com',
        telefono: '11-1234-5678',
        fechaInscripcion: '01/03/2025',
        condicion: 'Regular',
        dni: '40123456',
      },
      {
        legajo: 'A12346',
        nombre: 'María',
        apellido: 'González',
        email: 'maria.gonzalez@ejemplo.com',
        telefono: '11-2345-6789',
        fechaInscripcion: '02/03/2025',
        condicion: 'Regular',
        dni: '39876543',
      },
      {
        legajo: 'A12347',
        nombre: 'Carlos',
        apellido: 'Rodríguez',
        email: 'carlos.rodriguez@ejemplo.com',
        telefono: '11-3456-7890',
        fechaInscripcion: '03/03/2025',
        condicion: 'Libre',
        dni: '41234567',
      },
      {
        legajo: 'A12348',
        nombre: 'Ana',
        apellido: 'López',
        email: 'ana.lopez@ejemplo.com',
        telefono: '11-4567-8901',
        fechaInscripcion: '04/03/2025',
        condicion: 'Regular',
        dni: '42345678',
      },
      {
        legajo: 'A12349',
        nombre: 'Pedro',
        apellido: 'Martínez',
        email: 'pedro.martinez@ejemplo.com',
        telefono: '11-5678-9012',
        fechaInscripcion: '05/03/2025',
        condicion: 'Libre',
        dni: '38765432',
      },
    ];

    // Obtener nombre de carrera basado en la selección
    let carreraNombre = 'DSW';
    if (selectedCarrera === '1') {
      carreraNombre = 'DSW';
    } else if (selectedCarrera === '2') {
      carreraNombre = 'RRPP';
    } else if (selectedCarrera === '3') {
      carreraNombre = 'ADE';
    }

    setCurrentDetalle({
      asignatura,
      fecha,
      turno: 'T',
      division: '1',
      tipo: 'Presencial',
      carrera: carreraNombre,
      año: '1º AÑO',
      materia: 'TALLER',
      alumnos: alumnosMock,
    });
    setShowDetalle(true);
  };

  const closeDetalle = () => {
    setShowDetalle(false);
    setShowPDFPreview(false);
  };

  const handleShowPreview = () => {
    setShowPDFPreview(true);
  };

  const fileName = `Acta_${currentDetalle.asignatura}_${currentDetalle.fecha.replace(/\//g, '-')}.pdf`;

  if (!isClient) return null;

  return (
    <InscriptosMesasContainer>
      <h2>INSCRIPTOS A MESAS</h2>
      
      <FilterContainer>
        <div>
          <label>CARRERA:</label>
          <Select
            value={selectedCarrera}
            onChange={(e) => setSelectedCarrera(e.target.value)}
          >
            <option value="">Seleccionar...</option>
            <option value="1">Desarrollo de Software</option>
            <option value="2">Relaciones Públicas</option>
            <option value="3">Administración de Empresas</option>
          </Select>
        </div>
        
        <div>
          <label>TURNO:</label>
          <Select 
            value={selectedTurno} 
            onChange={(e) => setSelectedTurno(e.target.value)}
            disabled={!isTurnoEnabled}
          >
            <option value="">Seleccionar...</option>
            <option value="2025-Feb-Mar">2025-Feb-Mar</option>
            <option value="2025-Jul-Ago">2025-Jul-Ago</option>
            <option value="2025-Nov-Dic">2025-Nov-Dic</option>
          </Select>
        </div>
        
        <div>
          <label>LLAMADO:</label>
          <Select 
            value={selectedLlamado} 
            onChange={(e) => setSelectedLlamado(e.target.value)}
            disabled={!isLlamadoEnabled}
          >
            <option value="">Seleccionar...</option>
            <option value="1">1° Llamado</option>
            <option value="2">2° Llamado</option>
          </Select>
        </div>
        
        <SearchButton 
          onClick={handleSearch}
          disabled={isLoading || !isSearchEnabled}
        >
          {isLoading ? 'CARGANDO...' : 'BUSCAR'}
        </SearchButton>
      </FilterContainer>
      
      {mesas.length > 0 && (
        <>
          {/* Botón de resumen - aparece después de cargar los datos */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            marginBottom: '1rem',
            gap: '0.5rem'
          }}>
            <PDFDownloadLink
              document={
                <ResumenMesasPDF
                  mesas={mesas}
                  carrera={selectedCarrera}
                  turno={selectedTurno}
                  llamado={selectedLlamado}
                  año="2025"
                />
              }
              fileName={`Resumen_Mesas_${selectedTurno}_${selectedLlamado}Llamado.pdf`}
              style={{ textDecoration: 'none' }}
            >
              <PrintButton style={{ backgroundColor: '#ff9800' }}>
                <FaList /> RESUMEN DE MESAS PDF
              </PrintButton>
            </PDFDownloadLink>
          </div>

          <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Asignatura</th>
                <th>Llamado</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Titular</th>
                <th>Adjunto 1</th>
                <th>Adjunto 2</th>
                <th>Inscriptos</th>
                <th>Detalle</th>
              </tr>
            </thead>
            <tbody>
              {mesas.map((mesa, index) => (
                <tr key={index}>
                  <td>{mesa.asignatura}</td>
                  <td>{mesa.llamado}</td>
                  <td>{mesa.fecha}</td>
                  <td>{mesa.hora}</td>
                  <td>{mesa.titular}</td>
                  <td>{mesa.adjunto1}</td>
                  <td>{mesa.adjunto2}</td>
                  <td>{mesa.inscriptos}</td>
                  <td>
                    <DetalleButton 
                      onClick={() => handleVerDetalle(mesa.asignatura, mesa.fecha)}
                    >
                      <FaEye /> Ver
                    </DetalleButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
        </>
      )}
      
      {/* Modal para mostrar detalles de inscriptos */}
      {showDetalle && (
        <DetalleModal>
          <DetalleModalContent>
            {!showPDFPreview ? (
              <>
                <ModalHeader>
                  <ModalTitle>
                    ALUMNOS INSCRIPTOS - {currentDetalle.asignatura}
                  </ModalTitle>
                  <CloseButton onClick={closeDetalle}>
                    <FaTimes />
                  </CloseButton>
                </ModalHeader>
                
                <p>Fecha: {currentDetalle.fecha}</p>
                <p>Total inscriptos: {currentDetalle.alumnos.length}</p>
                
                <ModalActions>
                  <PrintButton
                    onClick={handleShowPreview}
                    style={{ backgroundColor: '#1976d2' }}
                  >
                    <FaEye /> VISTA PREVIA PDF
                  </PrintButton>
                  
                  <PDFDownloadLink
                    document={
                      <ActaPDF
                        asignatura={currentDetalle.asignatura}
                        fecha={currentDetalle.fecha}
                        turno={currentDetalle.turno}
                        division={currentDetalle.division}
                        tipo={currentDetalle.tipo}
                        carrera={currentDetalle.carrera}
                        año={currentDetalle.año}
                        materia={currentDetalle.materia}
                        alumnos={currentDetalle.alumnos}
                      />
                    }
                    fileName={fileName}
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <PrintButton>
                      <FaDownload /> DESCARGAR ACTA PDF
                    </PrintButton>
                  </PDFDownloadLink>
                </ModalActions>
                
                <AlumnosTable>
                  <thead>
                    <tr>
                      <th>Legajo</th>
                      <th>Apellido</th>
                      <th>Nombre</th>
                      <th>Email</th>
                      <th>Teléfono</th>
                      <th>Fecha Inscripción</th>
                      <th>Condición</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentDetalle.alumnos.map((alumno, index) => (
                      <tr key={index} className={index % 2 === 1 ? 'row-alternate' : ''}>
                        <td>{alumno.legajo}</td>
                        <td>{alumno.apellido}</td>
                        <td>{alumno.nombre}</td>
                        <td>{alumno.email}</td>
                        <td>{alumno.telefono}</td>
                        <td>{alumno.fechaInscripcion}</td>
                        <td>{alumno.condicion}</td>
                      </tr>
                    ))}
                  </tbody>
                </AlumnosTable>
              </>
            ) : (
              <>
                <ModalHeader>
                  <ModalTitle>
                    VISTA PREVIA - ACTA {currentDetalle.asignatura}
                  </ModalTitle>
                  <CloseButton onClick={() => setShowPDFPreview(false)}>
                    <FaTimes />
                  </CloseButton>
                </ModalHeader>
                
                <div style={{ height: '70vh', width: '100%' }}>
                  <PDFViewer style={{ width: '100%', height: '100%' }}>
                    <ActaPDF
                      asignatura={currentDetalle.asignatura}
                      fecha={currentDetalle.fecha}
                      turno={currentDetalle.turno}
                      division={currentDetalle.division}
                      tipo={currentDetalle.tipo}
                      carrera={currentDetalle.carrera}
                      año={currentDetalle.año}
                      materia={currentDetalle.materia}
                      alumnos={currentDetalle.alumnos}
                    />
                  </PDFViewer>
                </div>
                
                <ModalActions style={{ marginTop: '10px' }}>
                  <PrintButton
                    onClick={() => setShowPDFPreview(false)}
                    style={{ backgroundColor: '#757575' }}
                  >
                    <FaEye /> VOLVER A LISTA
                  </PrintButton>
                  
                  <PDFDownloadLink
                    document={
                      <ActaPDF
                        asignatura={currentDetalle.asignatura}
                        fecha={currentDetalle.fecha}
                        turno={currentDetalle.turno}
                        division={currentDetalle.division}
                        tipo={currentDetalle.tipo}
                        carrera={currentDetalle.carrera}
                        año={currentDetalle.año}
                        materia={currentDetalle.materia}
                        alumnos={currentDetalle.alumnos}
                      />
                    }
                    fileName={fileName}
                    style={{ textDecoration: 'none' }}
                  >
                    <PrintButton>
                      <FaDownload /> DESCARGAR
                    </PrintButton>
                  </PDFDownloadLink>
                </ModalActions>
              </>
            )}
          </DetalleModalContent>
        </DetalleModal>
      )}
    </InscriptosMesasContainer>
  );
};

export default InscriptosMesas;