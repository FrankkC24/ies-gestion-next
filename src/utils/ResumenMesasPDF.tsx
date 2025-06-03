import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

interface MesaResumen {
  asignatura: string;
  fecha: string;
  hora: string;
  titular: string;
  adjunto1: string;
  adjunto2: string;
  inscriptos: number;
}

interface ResumenMesasPDFProps {
  mesas: MesaResumen[];
  carrera: string;
  turno: string;
  llamado: string;
  año: string;
}

// Estilos para el PDF de resumen
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 0,
    fontSize: 10,
    fontFamily: 'Times-Roman',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    alignItems: 'flex-start',
  },
  logo: {
    width: 60,
    height: 80,
    marginRight: 15,
    marginTop: 5,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 3,
    fontFamily: 'Times-Bold',
  },
  subtitle: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 3,
    fontFamily: 'Times-Bold',
  },
  address: {
    fontSize: 8,
    marginBottom: 8,
    fontFamily: 'Times-Roman',
  },
  resumenTitle: {
    fontSize: 9,
    marginBottom: 3,
    fontFamily: 'Times-Roman',
  },
  carreraInfo: {
    fontSize: 9,
    marginBottom: 20,
    fontFamily: 'Times-Roman',
  },
  
  // Tabla de resumen
  tableContainer: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    // backgroundColor: '#e0e0e0',
    fontWeight: 'bold',
    fontSize: 7,
    textAlign: 'center',
    fontFamily: 'Courier-BoldOblique', // Como el original PHP
    padding: 3,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#000000',
  },
  tableCell: {
    fontSize: 7,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#000000',
    padding: 3,
    textAlign: 'center',
    fontFamily: 'Courier-BoldOblique',
  },
  
  // Fila alternada con fondo gris claro
  tableCellAlternate: {
    fontSize: 7,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: '#000000',
    padding: 3,
    textAlign: 'center',
    fontFamily: 'Courier-BoldOblique',
    backgroundColor: '#aaaaaa', // Gris muy claro
  },
  
  // Dimensiones de columnas del resumen
  tableCellMateria: {
    width: 205, // Como el original PHP
    textAlign: 'left',
    paddingLeft: 5,
  },
  tableCellFecha: {
    width: 60,
  },
  tableCellHora: {
    width: 45,
  },
  tableCellTitular: {
    width: 80,
  },
  tableCellAdjunto1: {
    width: 80,
  },
  tableCellAdjunto2: {
    width: 80,
  },
  tableCellTotal: {
    width: 25,
  },
  
  footer: {
    position: 'absolute',
    bottom: 21,
    left: 15,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 7,
    fontFamily: 'Times-Roman',
  },
  
  pageNumber: {
    position: 'absolute',
    bottom: 21,
    right: 15,
    fontSize: 7,
    fontFamily: 'Times-Roman',
  },
});

const ResumenMesasPDF: React.FC<ResumenMesasPDFProps> = ({
  mesas,
  carrera,
  turno,
  llamado,
  año
}) => {
  
  // Función para truncar texto como en el original
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) : text;
  };

  // Convertir carrera a nombre completo
  const getCarreraNombre = (carreraId: string) => {
    switch(carreraId) {
      case '1': return 'Desarrollo de Software';
      case '2': return 'Relaciones Públicas';
      case '3': return 'Administración de Empresas';
      default: return 'DSW';
    }
  };

  const carreraNombre = getCarreraNombre(carrera);
  const turnoNombre = turno.replace('2025-', ''); // Ej: "Feb-Mar"

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            style={styles.logo}
            src="/assets/escudo.png"
          />
          <View style={styles.headerText}>
            <Text style={styles.title}>
              INSTITUTO SUPERIOR PARTICULAR INCORPORADO Nº 9233
            </Text>
            <Text style={styles.subtitle}>
              ESTUDIOS SUPERIORES DE SANTA FE
            </Text>
            <Text style={styles.address}>
              TUCUMAN 2731 1½ PISO - Tel : 0342-4558371 / 0342-4525658
            </Text>
            <Text style={styles.resumenTitle}>
              INSCRIPCIONES A MESAS DE EXAMENES {año} (Resumen)
            </Text>
            <Text style={styles.carreraInfo}>
              {carreraNombre}   {llamado}° Llamado    ({turnoNombre})
            </Text>
          </View>
        </View>

        {/* Tabla de resumen */}
        <View style={styles.tableContainer}>
          {/* Header de la tabla */}
          <View style={styles.tableRow}>
            <View style={[styles.tableHeader, styles.tableCellMateria]}>
              <Text>MATERIA</Text>
            </View>
            <View style={[styles.tableHeader, styles.tableCellFecha]}>
              <Text>FECHA</Text>
            </View>
            <View style={[styles.tableHeader, styles.tableCellHora]}>
              <Text>HORA</Text>
            </View>
            <View style={[styles.tableHeader, styles.tableCellTitular]}>
              <Text>TITULAR</Text>
            </View>
            <View style={[styles.tableHeader, styles.tableCellAdjunto1]}>
              <Text>ADJUNTO</Text>
            </View>
            <View style={[styles.tableHeader, styles.tableCellAdjunto2]}>
              <Text>ADJUNTO</Text>
            </View>
            <View style={[styles.tableHeader, styles.tableCellTotal]}>
              <Text>TL</Text>
            </View>
          </View>

          {/* Filas de datos */}
          {mesas.map((mesa, index) => {
            // Determinar si la fila es par (gris) o impar (blanco)
            const isAlternate = index % 2 === 1;
            const cellStyle = isAlternate ? styles.tableCellAlternate : styles.tableCell;
            
            return (
              <View key={index} style={styles.tableRow}>
                <View style={[cellStyle, styles.tableCellMateria]}>
                  <Text>{mesa.asignatura}</Text>
                </View>
                <View style={[cellStyle, styles.tableCellFecha]}>
                  <Text>{mesa.fecha.substring(0, 5)}</Text> {/* Solo día/mes */}
                </View>
                <View style={[cellStyle, styles.tableCellHora]}>
                  <Text>{mesa.hora}</Text>
                </View>
                <View style={[cellStyle, styles.tableCellTitular]}>
                  <Text>{truncateText(mesa.titular, 17)}</Text>
                </View>
                <View style={[cellStyle, styles.tableCellAdjunto1]}>
                  <Text>{truncateText(mesa.adjunto1, 17)}</Text>
                </View>
                <View style={[cellStyle, styles.tableCellAdjunto2]}>
                  <Text>{truncateText(mesa.adjunto2, 17)}</Text>
                </View>
                <View style={[cellStyle, styles.tableCellTotal]}>
                  <Text>{mesa.inscriptos}</Text>
                </View>
              </View>
            );
          })}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>ies@iessantafe.edu.ar    www.iessantafe.edu.ar</Text>
        </View>
        
        <View style={styles.pageNumber}>
          <Text>Pag. 1 de 1</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ResumenMesasPDF;