'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaEye, FaTimes, FaPrint } from 'react-icons/fa';
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
  HiddenIframe
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
  const [isPrinting, setIsPrinting] = useState(false);
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
  
  // Referencia al iframe oculto para impresión
  const iframeRef = useRef<HTMLIFrameElement>(null);

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
  };

const handlePrint = () => {
  if (isPrinting || !iframeRef.current) return;
  setIsPrinting(true);

  const printContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Acta Examen</title>
      <style>
        @page {
          size: A4 portrait;
          margin: 1.5cm;
        }

        body {
          font-family: "Times New Roman", Times, serif;
          font-size: 11pt;
          margin: 0;
          padding: 0;
        }

        .acta-container {
          width: 100%;
        }

        .header {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }

        .logo {
          width: 90px;
          height: 110px;
          margin-right: 15px;
        }

        .header-info h1 {
          font-size: 14pt;
          font-weight: bold;
          margin: 0 0 4px 0;
        }

        .header-info h2 {
          font-size: 12pt;
          font-weight: bold;
          margin: 0 0 4px 0;
        }

        .header-info p {
          font-size: 10pt;
          margin: 0 0 3px 0;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          table-layout: fixed;
          margin-bottom: 30px;
        }

        thead tr:nth-child(1) th {
          border-bottom: none;
        }

        thead tr:nth-child(2) th {
          border-top: none;
          padding-top: 6px;
          padding-bottom: 6px;
        }

        tr {
          height: 25px;
        }

        th, td {
          border: 1px solid black;
          padding: 4px 4px;
          text-align: center;
          vertical-align: middle;
          font-size: 10pt;
          white-space: nowrap;
          overflow: hidden;
        }

        th:nth-child(1), td:nth-child(1) { width: 5%; }
        th:nth-child(2), td:nth-child(2) { width: 30%; text-align: left; padding-left: 5px; }
        th:nth-child(3), td:nth-child(3),
        th:nth-child(4), td:nth-child(4),
        th:nth-child(5), td:nth-child(5),
        th:nth-child(6), td:nth-child(6),
        th:nth-child(7), td:nth-child(7) { width: 10%; }
        th:nth-child(8), td:nth-child(8) { width: 15%; }

        .firmas-container {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
        }

        .firma {
          width: 30%;
          text-align: center;
        }

        .firma-linea {
          width: 100%;
          border-top: 2px solid black;
          margin-bottom: 4px;
        }

        .firma-texto {
          font-size: 10pt;
        }

        .resultados {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          font-size: 10pt;
        }

        .ubicacion-fecha {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          font-size: 10pt;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
          font-size: 9pt;
        }

        .contacto {
          display: flex;
          gap: 15px;
        }

        @media print {
          body {
            -webkit-print-color-adjust: exact;
          }
          table {
            page-break-inside: avoid;
          }
        }
      </style>
    </head>
    <body>
      <div class="acta-container">
        <div class="header">
          <img class="logo" src="/assets/escudo.png" alt="Logo" />
          <div class="header-info">
            <h1>INSTITUTO SUPERIOR PARTICULAR INCORPORADO Nº 9233</h1>
            <h2>ESTUDIOS SUPERIORES DE SANTA FE</h2>
            <p>TUCUMAN 2731 1½ PISO - Tel : 0342-4558371 / 0342-4525658</p>
            <p>EXAMEN FINAL : ${currentDetalle.asignatura} (${currentDetalle.carrera})</p>
            <p>TM: ${currentDetalle.materia} - ${currentDetalle.año} &nbsp;&nbsp;&nbsp; TURNO: ${currentDetalle.turno} &nbsp;&nbsp;&nbsp; DIV: ${currentDetalle.division} &nbsp;&nbsp;&nbsp; TIPO-EXA.: ${currentDetalle.tipo}</p>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th rowspan="2">Nº</th>
              <th rowspan="2">ALUMNO</th>
              <th colspan="3">CALIFICACION</th>
              <th colspan="2">Nº BOL.</th>
              <th rowspan="2">DNI</th>
            </tr>
            <tr>
              <th>ESC</th>
              <th>ORAL</th>
              <th>PROM</th>
              <th>ESC</th>
              <th>ORAL</th>
            </tr>
          </thead>
          <tbody>
            ${currentDetalle.alumnos.map((alumno, index) => `
              <tr>
                <td>${index + 1}</td>
                <td>${alumno.apellido} - ${alumno.nombre}</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>${alumno.dni}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="firmas-container">
          <div class="firma">
            <div class="firma-linea"></div>
            <div class="firma-texto">FIRMA PRESIDENTE</div>
          </div>
          <div class="firma">
            <div class="firma-linea"></div>
            <div class="firma-texto">FIRMA VOCAL</div>
          </div>
          <div class="firma">
            <div class="firma-linea"></div>
            <div class="firma-texto">FIRMA VOCAL</div>
          </div>
        </div>

        <div class="resultados">
          <div>APROBADOS:___________</div>
          <div>APLAZADOS:___________</div>
          <div>AUSENTES:___________</div>
        </div>

        <div class="ubicacion-fecha">
          <div>LUGAR : SANTA FE</div>
          <div>FECHA: ${currentDetalle.fecha.split('/').reverse().join('/')}</div>
        </div>

        <div class="footer">
          <div class="contacto">
            <span>ies@iessantafe.edu.ar</span>
            <span>www.iessantafe.edu.ar</span>
          </div>
          <div>1 of 1</div>
        </div>
      </div>

      <script>
        window.onload = function() {
          document.title = '';
          setTimeout(function() {
            try {
              window.print();
              setTimeout(function() {
                window.parent.postMessage('printClosed', '*');
              }, 1000);
            } catch (e) {
              window.parent.postMessage('printClosed', '*');
            }
          }, 500);
        };
      </script>
    </body>
    </html>
  `;

  const iframeDoc = iframeRef.current.contentDocument || 
                   (iframeRef.current.contentWindow && iframeRef.current.contentWindow.document);

  if (iframeDoc) {
    iframeDoc.open();
    iframeDoc.write(printContent);
    iframeDoc.close();

    const messageHandler = function(event: MessageEvent) {
      if (event.data === 'printClosed') {
        setIsPrinting(false);
        window.removeEventListener('message', messageHandler);
      }
    };

    window.addEventListener('message', messageHandler);

    setTimeout(() => {
      setIsPrinting(false);
    }, 10000);
  }
};



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
      )}
      
      {/* Modal para mostrar detalles de inscriptos */}
      {showDetalle && (
        <DetalleModal>
          <DetalleModalContent>
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
                onClick={handlePrint}
                disabled={isPrinting}
              >
                <FaPrint /> {isPrinting ? 'PROCESANDO...' : 'IMPRIMIR ACTA'}
              </PrintButton>
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
          </DetalleModalContent>
        </DetalleModal>
      )}
      
      {/* Iframe oculto para impresión */}
      <HiddenIframe ref={iframeRef} title="Print Frame" />
    </InscriptosMesasContainer>
  );
};

export default InscriptosMesas;