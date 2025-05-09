'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaPrint } from 'react-icons/fa';
import {
  ImprimirMesasContainer,
  FilterContainer,
  Select,
  SearchButton,
  TableWrapper,
  Table,
  PrintButton,
  HiddenIframe
} from './ImprimirMesas.styles';

interface Mesa {
  asignatura: string;
  fecha: string;
  hora: string;
  titular: string;
  adjunto1: string;
  adjunto2: string;
}

const ImprimirMesas: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [selectedCarrera, setSelectedCarrera] = useState('');
  const [selectedTurno, setSelectedTurno] = useState('');
  const [selectedLlamado, setSelectedLlamado] = useState('');
  const [searchType, setSearchType] = useState('');
  const [mesas, setMesas] = useState<Mesa[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [carreraText, setCarreraText] = useState('');
  const [isPrinting, setIsPrinting] = useState(false);
  
  // Referencia al iframe oculto
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Estados para controlar la habilitación en cascada
  const isCarreraEnabled = searchType !== '';
  const isTurnoEnabled = isCarreraEnabled && selectedCarrera !== '';
  const isLlamadoEnabled = isTurnoEnabled && selectedTurno !== '';
  const isSearchEnabled = isLlamadoEnabled && selectedLlamado !== '';

  useEffect(() => {
    setIsClient(true);
    
    // Escuchar el evento afterprint para resetear el estado de impresión
    if (typeof window !== 'undefined') {
      window.addEventListener('afterprint', handleAfterPrint);
      
      // Añadir un controlador para restablecer el estado si el diálogo de impresión se cierra
      const checkPrintState = () => {
        // Si ha pasado más de 5 segundos y seguimos en estado de impresión, asumimos que se canceló
        if (isPrinting) {
          setTimeout(() => {
            // Volver a verificar por si el estado cambió mientras esperábamos
            if (isPrinting) {
              setIsPrinting(false);
            }
          }, 5000);
        }
      };
      
      // Ejecutar la verificación cuando cambia el estado de impresión
      if (isPrinting) {
        checkPrintState();
      }
      
      return () => {
        window.removeEventListener('afterprint', handleAfterPrint);
      };
    }
  }, [isPrinting]);

  const handleAfterPrint = () => {
    // Resetear el estado de impresión
    setIsPrinting(false);
  };

  // Resetear valores cuando se cambia una selección superior
  useEffect(() => {
    if (!isCarreraEnabled) setSelectedCarrera('');
  }, [searchType, isCarreraEnabled]);

  useEffect(() => {
    if (!isTurnoEnabled) setSelectedTurno('');
  }, [selectedCarrera, isTurnoEnabled]);

  useEffect(() => {
    if (!isLlamadoEnabled) setSelectedLlamado('');
  }, [selectedTurno, isLlamadoEnabled]);

  // Actualizar texto de carrera para mostrar en el encabezado del PDF
  useEffect(() => {
    switch (selectedCarrera) {
      case '1':
        setCarreraText('DESARROLLO DE SOFTWARE');
        break;
      case '2':
        setCarreraText('RELACIONES PÚBLICAS');
        break;
      case '3':
        setCarreraText('ADMINISTRACION DE EMPRESAS');
        break;
      default:
        setCarreraText('');
    }
  }, [selectedCarrera]);

  const handleSearch = () => {
    if (!isSearchEnabled) {
      return;
    }

    setIsLoading(true);

    // Simulación de carga
    setTimeout(() => {
      // Datos mock basados en el ejemplo proporcionado
      const mockData: Mesa[] = [
        {
          asignatura: 'ADMINISTRACION',
          fecha: '20/02/2025',
          hora: '17:30',
          titular: 'PRESSER ANALIA GISELA',
          adjunto1: 'PAULI CARLOS MANUEL',
          adjunto2: 'ALI FERNANDO',
        },
        {
          asignatura: 'INVESTIGACION DE MERCADOS',
          fecha: '20/02/2025',
          hora: '19:00',
          titular: 'PAULI CARLOS MANUEL',
          adjunto1: 'PRESSER ANALIA GISELA',
          adjunto2: 'ALI FERNANDO',
        },
        {
          asignatura: 'INFORMATICA',
          fecha: '21/02/2025',
          hora: '17:30',
          titular: 'OCAMPO EDUARDO RENÉ',
          adjunto1: 'GARCILAZO JOAQUIN AND',
          adjunto2: 'BONETTO JESICA GUADAL',
        },
        {
          asignatura: 'TECNICAS CUANTITATIVAS',
          fecha: '24/02/2025',
          hora: '18:00',
          titular: 'VIGNATTI MARÍA AMELI',
          adjunto1: 'ROSENFELD SARA',
          adjunto2: 'RODRIGUEZ NATALIA SOL',
        },
        {
          asignatura: 'CALCULO FINANCIERO',
          fecha: '24/02/2025',
          hora: '18:00',
          titular: 'VIGNATTI MARÍA AMELI',
          adjunto1: 'ROSENFELD SARA',
          adjunto2: 'RODRIGUEZ NATALIA SOL',
        },
      ];

      setMesas(mockData);
      setIsLoading(false);
    }, 800);
  };

  const handlePrint = () => {
    // Si ya estamos en proceso de impresión, no hacer nada
    if (isPrinting || !iframeRef.current) return;
    
    // Marcar que estamos en proceso de impresión
    setIsPrinting(true);
    
    const turnoText = selectedTurno || '2026-Feb-Mar';
    const llamadoText = selectedLlamado === '1' ? '1º Llamado' : selectedLlamado === '2' ? '2º Llamado' : '1º Llamado';
    const carreraInfoText = carreraText ? carreraText : 'ADMINISTRACION DE EMPRESAS';
    
    // Crear contenido HTML para el documento de impresión
    const printContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title></title>
        <style>
          @page {
            size: portrait;
            margin: 15mm;
          }
          
          body {
            font-family: "Times New Roman", Times, serif;
            margin: 0;
            padding: 0;
          }
          
          .header {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
          }
          
          .logo {
            width: 90px;
            height: 120px;
            margin-right: 20px;
          }
          
          .title h1 {
            font-size: 16pt;
            font-weight: bold;
            margin: 0 0 5px 0;
          }
          
          .title h2 {
            font-size: 14pt;
            font-weight: bold;
            margin: 0 0 5px 0;
          }
          
          .title p {
            font-size: 10pt;
            margin: 0 0 5px 0;
          }
          
          .title .report-title {
            font-weight: bold;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          
          th, td {
            border: 2px solid black;
            padding: 8px;
            text-align: left;
            font-size: 10pt;
          }
          
          th {
            font-weight: bold;
          }
          
          /* Estas reglas son realmente importantes para la alternancia de colores */
          tr:nth-child(even) {
            background-color: #d9d9d9 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          tr:nth-child(odd) {
            background-color: white !important;
          }
          
          .footer {
            display: flex;
            justify-content: space-between;
            font-size: 10pt;
            margin-top: 20px;
            position: relative;
            bottom: 0;
          }
          
          .footer .web {
            margin-left: 20px;
          }
          
          .footer .page-number {
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <img class="logo" src="/assets/escudo.png" alt="IES Logo" />
          <div class="title">
            <h1>INSTITUTO SUPERIOR PARTICULAR INCORPORADO Nº 9233</h1>
            <h2>ESTUDIOS SUPERIORES DE SANTA FE</h2>
            <p>TUCUMAN 2731 1° PISO - Tel : 0342-4558371 / 0342-4525658</p>
            <p class="report-title">Mesas de Examenes ${turnoText} ${llamadoText} - ${carreraInfoText} - T:F/C/P/DRH</p>
          </div>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>ASIGNATURA</th>
              <th>FECHA</th>
              <th>HORA</th>
              <th>TITULAR</th>
              <th>ADJUNTO</th>
              <th>ADJUNTO</th>
            </tr>
          </thead>
          <tbody>
            ${mesas.map((mesa, index) => `
              <tr class="${index % 2 === 1 ? 'row-alternate' : ''}">
                <td>${mesa.asignatura}</td>
                <td>${mesa.fecha}</td>
                <td>${mesa.hora}</td>
                <td>${mesa.titular}</td>
                <td>${mesa.adjunto1}</td>
                <td>${mesa.adjunto2}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <div class="footer">
          <div>
            <span>ies@iessantafe.edu.ar</span>
            <span class="web">www.iessantafe.edu.ar</span>
          </div>
          <div class="page-number">
            1 de ${mesas.length > 10 ? 2 : 1}
          </div>
        </div>
        
        <script>
          window.onload = function() {
            // Asegurarse de que no hay título
            document.title = '';
            
            // Función para detectar cierre de diálogo de impresión
            function notifyPrintClosed() {
              window.parent.postMessage('printClosed', '*');
            }
            
            // Registrar eventos para detectar cancelación
            window.addEventListener('afterprint', notifyPrintClosed);
            
            // Dar tiempo para cargar recursos e imprimir
            setTimeout(function() {
              try {
                window.print();
              } catch (e) {
                // Si falla la impresión, notificar también
                notifyPrintClosed();
              }
            }, 500);
            
            // Timeout de seguridad para reset (por si el evento afterprint no se dispara)
            setTimeout(notifyPrintClosed, 10000);
          };
        </script>
      </body>
      </html>
    `;
    
    // Acceder al documento del iframe
    const iframeDoc = iframeRef.current.contentDocument || 
                     (iframeRef.current.contentWindow && iframeRef.current.contentWindow.document);
    
    if (iframeDoc) {
      // Escribir el contenido en el iframe
      iframeDoc.open();
      iframeDoc.write(printContent);
      iframeDoc.close();
      
      // Escuchar mensajes del iframe para detectar cuándo termina el proceso
      const messageHandler = function(event: MessageEvent) {
        if (event.data === 'printClosed') {
          setIsPrinting(false);
          window.removeEventListener('message', messageHandler);
        }
      };
      
      window.addEventListener('message', messageHandler);
      
      // Timeout de seguridad por si no recibimos el mensaje
      setTimeout(() => {
        setIsPrinting(false);
      }, 15000);
    }
  };

  if (!isClient) return null;

  return (
    <ImprimirMesasContainer>
      <h2>IMPRIMIR MESAS DE EXÁMENES</h2>

      <FilterContainer>
        <div>
          <label>BUSCAR POR:</label>
          <Select 
            value={searchType} 
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="">Seleccionar...</option>
            <option value="Docente">Docentes</option>
            <option value="General">General</option>
            <option value="DocenteTodos">Todos los docentes</option>
          </Select>
        </div>

        <div>
          <label>CARRERA:</label>
          <Select
            value={selectedCarrera}
            onChange={(e) => setSelectedCarrera(e.target.value)}
            disabled={!isCarreraEnabled}
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
            <option value="2026-Feb-Mar">2026-Feb-Mar</option>
            <option value="2026-Jul-Ago">2026-Jul-Ago</option>
            <option value="2026-Nov-Dic">2026-Nov-Dic</option>
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

      {/* Botón imprimir y tabla de resultados en pantalla */}
      {mesas.length > 0 && (
        <>
          <PrintButton 
            onClick={handlePrint}
            disabled={isPrinting}
          >
            <FaPrint /> {isPrinting ? 'PROCESANDO...' : 'IMPRIMIR LISTADO'}
          </PrintButton>
          
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <th>ASIGNATURA</th>
                  <th>FECHA</th>
                  <th>HORA</th>
                  <th>TITULAR</th>
                  <th>ADJUNTO</th>
                  <th>ADJUNTO</th>
                </tr>
              </thead>
              <tbody>
                {mesas.map((mesa, index) => (
                  <tr key={index}>
                    <td>{mesa.asignatura}</td>
                    <td>{mesa.fecha}</td>
                    <td>{mesa.hora}</td>
                    <td>{mesa.titular}</td>
                    <td>{mesa.adjunto1}</td>
                    <td>{mesa.adjunto2}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
          
          {/* Iframe oculto para impresión */}
          <HiddenIframe ref={iframeRef} title="Print Frame" />
        </>
      )}
    </ImprimirMesasContainer>
  );
};

export default ImprimirMesas;