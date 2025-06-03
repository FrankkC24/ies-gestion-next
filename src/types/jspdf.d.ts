// types/jspdf.d.ts
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: {
      head?: any[][];
      body?: any[][];
      startY?: number;
      margin?: { left?: number; right?: number; top?: number; bottom?: number };
      styles?: {
        fontSize?: number;
        cellPadding?: number;
        lineColor?: number[];
        lineWidth?: number;
        font?: string;
      };
      headStyles?: {
        fillColor?: number[];
        textColor?: number[];
        fontStyle?: string;
        halign?: string;
        valign?: string;
      };
      columnStyles?: {
        [key: number]: {
          cellWidth?: number;
          halign?: string;
        };
      };
      theme?: string;
      tableLineColor?: number[];
      tableLineWidth?: number;
      didParseCell?: (data: any) => void;
    }) => jsPDF;
    lastAutoTable?: {
      finalY: number;
    };
  }
}

declare module 'jspdf-autotable' {
  // Módulo de extensión para autoTable
}