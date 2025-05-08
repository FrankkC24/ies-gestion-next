'use client';

import { createGlobalStyle } from 'styled-components';

const PrintStyles = createGlobalStyle`
  @media print {
    /* Ocultar elementos de navegación y UI */
    header, footer, nav, aside, button {
      display: none !important;
    }
    
    /* Ocultar cualquier elemento que no queramos que aparezca en la impresión */
    .screen-only, .PrintButton, .FilterContainer {
      display: none !important;
    }
    
    /* Ocultar todo el dashboard por defecto */
    body > div, main, #__next, [class*="Layout"], [class*="Container"] {
      padding: 0 !important;
      margin: 0 !important;
      background: white !important;
      box-shadow: none !important;
    }
    
    /* Solo mostrar el contenido para impresión */
    .PrintContent {
      display: block !important;
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: auto !important;
      padding: 20mm 15mm !important;
      background: white !important;
      color: black !important;
      font-family: "Times New Roman", Times, serif !important;
      font-size: 12pt !important;
    }
    
    /* Estilo para las tablas de impresión */
    .PrintContent table {
      width: 100% !important;
      border-collapse: collapse !important;
      margin-top: 10mm !important;
    }
    
    .PrintContent table th,
    .PrintContent table td {
      border: 1px solid black !important;
      padding: 2mm !important;
      text-align: left !important;
      font-size: 10pt !important;
    }
    
    .PrintContent table th {
      font-weight: bold !important;
    }
    
    /* Filas alternantes */
    .PrintContent table tr.row-alternate {
      background-color: #f2f2f2 !important;
      -webkit-print-color-adjust: exact !important;
      color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    
    /* Asegurar que el encabezado de tabla aparezca en cada página */
    .PrintContent table thead {
      display: table-header-group !important;
    }
    
    /* Evitar que las filas se dividan entre páginas */
    .PrintContent table tr {
      page-break-inside: avoid !important;
    }
    
    /* Estilo para el pie de página */
    .PrintContent .PrintFooter {
      margin-top: 10mm !important;
      font-size: 10pt !important;
    }
    
    /* Estilos para el encabezado */
    .PrintContent .PrintHeader {
      margin-bottom: 10mm !important;
    }
    
    .PrintContent .PrintHeader h1 {
      font-size: 16pt !important;
      font-weight: bold !important;
      margin: 0 !important;
    }
    
    .PrintContent .PrintHeader h2 {
      font-size: 14pt !important;
      font-weight: bold !important;
      margin: 0 !important;
    }
    
    .PrintContent .PrintHeader p {
      font-size: 10pt !important;
      margin: 2mm 0 !important;
    }
    
    /* Configuración de página */
    @page {
      margin: 0 !important;
      size: portrait !important;
    }
  }
`;

export default PrintStyles;