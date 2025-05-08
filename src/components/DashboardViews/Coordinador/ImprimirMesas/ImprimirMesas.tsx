'use client';

import React, { useState, useEffect } from 'react';
import { FaPrint } from 'react-icons/fa';
import {
  ImprimirMesasContainer,
  FilterContainer,
  Select,
  SearchButton,
  TableWrapper,
  Table,
  PrintButton,
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

  // Estados para controlar la habilitación en cascada
  const isCarreraEnabled = searchType !== '';
  const isTurnoEnabled = isCarreraEnabled && selectedCarrera !== '';
  const isLlamadoEnabled = isTurnoEnabled && selectedTurno !== '';
  const isSearchEnabled = isLlamadoEnabled && selectedLlamado !== '';

  useEffect(() => {
    setIsClient(true);
  }, []);

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
    const turnoText = selectedTurno || '2026-Feb-Mar';
    const llamadoText = selectedLlamado === '1' ? '1º Llamado' : selectedLlamado === '2' ? '2º Llamado' : '1º Llamado';
    const carreraInfoText = carreraText ? carreraText : 'ADMINISTRACION DE EMPRESAS';
    
    // Crear la página de impresión
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    
    if (!printWindow) {
      alert('Por favor, permite las ventanas emergentes para imprimir');
      return;
    }
    
    // Estilos y contenido para la nueva ventana
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Mesas de Exámenes - Vista Previa</title>
        <style>
          @media print {
            @page {
              size: portrait;
              margin: 10mm;
            }
          }
          
          body {
            font-family: "Times New Roman", Times, serif;
            margin: 0;
            padding: 20px;
          }
          
          .preview-header {
            background-color: #860000;
            color: white;
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            border-radius: 4px;
          }
          
          .preview-header h1 {
            margin: 0;
            font-size: 18px;
          }
          
          .print-button {
            background-color: #009688;
            color: white;
            border: none;
            padding: 10px 15px;
            font-size: 14px;
            cursor: pointer;
            border-radius: 4px;
            display: flex;
            align-items: center;
            gap: 5px;
          }
          
          .print-button:hover {
            background-color: #00796b;
          }
          
          @media print {
            .preview-header {
              display: none;
            }
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
            border: 2px solid black; /* Líneas más gruesas */
            padding: 8px;
            text-align: left;
            font-size: 10pt;
          }
          
          th {
            font-weight: bold;
          }
          
          /* Alternancia de colores más definida */
          tr:nth-child(odd) {
            background-color: white;
          }
          
          tr:nth-child(even) {
            background-color: #f2f2f2;
          }
          
          .footer {
            display: flex;
            justify-content: space-between;
            font-size: 10pt;
            margin-top: 20px;
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
        <div class="preview-header">
          <h1>Vista Previa para Impresión</h1>
          <button class="print-button" onclick="window.print(); window.close();">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
              <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
            </svg>
            Imprimir
          </button>
        </div>
        
        <div class="header">
          <img class="logo" src="/assets/escudo.png" alt="IES Logo" />
          <div class="title">
            <h1>INSTITUTO SUPERIOR PARTICULAR INCORPORADO Nº 9233</h1>
            <h2>ESTUDIOS SUPERIORES DE SANTA FE</h2>
            <p>TUCUMAN 2731 1½ PISO - Tel : 0342-4558371 / 0342-4525658</p>
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
              <tr>
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
            1 of ${mesas.length > 10 ? 2 : 1}
          </div>
        </div>
      </body>
      </html>
    `);
    
    printWindow.document.close();
    
    // Esperar a que se cargue la imagen y otros recursos
    printWindow.onload = function() {
      // El usuario debe hacer clic en el botón para imprimir
    };
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
          <PrintButton onClick={handlePrint}>
            <FaPrint /> IMPRIMIR LISTADO
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
        </>
      )}
    </ImprimirMesasContainer>
  );
};

export default ImprimirMesas;