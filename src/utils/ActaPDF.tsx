import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

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

interface ActaPDFProps {
  asignatura: string;
  fecha: string;
  turno: string;
  division: string;
  tipo: string;
  carrera: string;
  año: string;
  materia: string;
  alumnos: Alumno[];
}

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
    marginBottom: 15,
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
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 3,
    fontFamily: 'Times-Bold',
  },
  subtitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 3,
    fontFamily: 'Times-Bold',
  },
  address: {
    fontSize: 9,
    marginBottom: 8,
    fontFamily: 'Times-Roman',
  },
  examInfo: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 3,
    fontFamily: 'Times-Bold',
  },
  examDetails: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Times-Bold',
  },

  tableContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 15,
    width: 500,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    backgroundColor: '#ffffff',
    fontWeight: 'bold',
    fontSize: 9,
    textAlign: 'center',
    fontFamily: 'Times-Bold',
  },
  tableCell: {
    fontSize: 11,
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000000',
    padding: 3,
    textAlign: 'center',
    fontFamily: 'Times-Roman',
  },
  
  // Celdas especiales que necesitan borde izquierdo (primera columna)
  tableCellFirst: {
    borderLeftWidth: 1,
  },
  
  // Celdas de la primera fila que necesitan borde superior
  tableCellTopRow: {
    borderTopWidth: 1,
  },
  
  // Dimensiones exactas del original basadas en el PHP
  tableCellNumber: {
    width: 25,
  },
  tableCellAlumno: {
    width: 225,
    textAlign: 'left',
    paddingLeft: 5,
  },
  tableCellEsc1: {
    width: 31,
  },
  tableCellOral1: {
    width: 31,
  },
  tableCellProm: {
    width: 32,
  },
  tableCellEsc2: {
    width: 31,
  },
  tableCellOral2: {
    width: 31,
  },
  tableCellDni: {
    width: 90,
  },
  
  signatures: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
  },
  signatureLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  signatureBox: {
    width: 150,
    borderBottomWidth: 1, // Línea más fina
    borderBottomColor: '#000',
    borderStyle: 'dotted', // Línea punteada
    height: 15,
  },
  signatureLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 8,
    fontWeight: 'bold',
    marginBottom: 15,
    fontFamily: 'Times-Bold',
  },
  signatureLabel: {
    width: 150,
    textAlign: 'center',
  },
  results: {
    fontSize: 8,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    marginLeft: 15,
    marginRight: 15,
    fontFamily: 'Times-Bold',
  },
  locationDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 8,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    fontFamily: 'Times-Bold',
  },
  footer: {
    position: 'absolute',
    bottom: 21,
    left: 15,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 9,
    fontFamily: 'Times-Roman',
  },
});

const ActaPDF: React.FC<ActaPDFProps> = ({
  asignatura,
  fecha,
  turno,
  division,
  tipo,
  carrera,
  año,
  materia,
  alumnos
}) => {
  // Completar hasta 22 filas
  const alumnosCompletos = [...alumnos];
  for (let i = alumnosCompletos.length; i < 22; i++) {
    alumnosCompletos.push({
      legajo: '',
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      fechaInscripcion: '',
      condicion: '',
      dni: ''
    });
  }

  const fechaFormateada = fecha.split('/').reverse().join('/');

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
              TUCUMAN 2731 1er PISO - Tel : 0342-4558371 / 0342-4525658
            </Text>
            <Text style={styles.examInfo}>
              EXAMEN FINAL : {asignatura} ({carrera})
            </Text>
            <Text style={styles.examDetails}>
              TM: {materia} - {año}     TURNO: {turno}     DIV: {division}     TIPO-EXA.: {tipo}
            </Text>
          </View>
        </View>

        {/* Tabla - Sin contenedor extra, estructura exacta del original */}
        <View style={styles.tableContainer}>
          {/* Header superior con CALIFICACION y Nº BOL. */}
          <View style={styles.tableRow}>
            {/* Espacio vacío para Nº y ALUMNO */}
            <View style={[styles.tableCell, styles.tableCellNumber, styles.tableCellFirst, styles.tableCellTopRow, { borderBottomWidth: 1, borderRightWidth: 1 }]}></View>
            <View style={[styles.tableCell, styles.tableCellAlumno, styles.tableCellTopRow, { borderBottomWidth: 1, borderRightWidth: 1 }]}></View>
            
            {/* Headers combinados */}
            <View style={[styles.tableCell, styles.tableHeader, styles.tableCellTopRow, { width: 94, borderRightWidth: 1 }]}>
              <Text>CALIFICACION</Text>
            </View>
            <View style={[styles.tableCell, styles.tableHeader, styles.tableCellTopRow, { width: 62, borderRightWidth: 1 }]}>
              <Text>Nº BOL.</Text>
            </View>
            
            {/* Espacio vacío para DNI */}
            <View style={[styles.tableCell, styles.tableCellDni, styles.tableCellTopRow, { borderBottomWidth: 1, borderRightWidth: 1 }]}></View>
          </View>

          {/* Header principal con todos los títulos */}
          <View style={styles.tableRow}>
            <View style={[styles.tableCell, styles.tableCellNumber, styles.tableHeader, styles.tableCellFirst]}>
              <Text>Nº</Text>
            </View>
            <View style={[styles.tableCell, styles.tableCellAlumno, styles.tableHeader]}>
              <Text>ALUMNO</Text>
            </View>
            <View style={[styles.tableCell, styles.tableCellEsc1, styles.tableHeader]}>
              <Text>ESC</Text>
            </View>
            <View style={[styles.tableCell, styles.tableCellOral1, styles.tableHeader]}>
              <Text>ORAL</Text>
            </View>
            <View style={[styles.tableCell, styles.tableCellProm, styles.tableHeader]}>
              <Text>PROM</Text>
            </View>
            <View style={[styles.tableCell, styles.tableCellEsc2, styles.tableHeader]}>
              <Text>ESC</Text>
            </View>
            <View style={[styles.tableCell, styles.tableCellOral2, styles.tableHeader]}>
              <Text>ORAL</Text>
            </View>
            <View style={[styles.tableCell, styles.tableCellDni, styles.tableHeader, { borderRightWidth: 1 }]}>
              <Text>DNI</Text>
            </View>
          </View>

          {/* Filas de datos - 22 filas como el original */}
          {alumnosCompletos.map((alumno, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={[styles.tableCell, styles.tableCellNumber, styles.tableCellFirst]}>
                <Text>{index + 1}</Text>
              </View>
              <View style={[styles.tableCell, styles.tableCellAlumno]}>
                <Text>
                  {alumno.apellido ? `${alumno.apellido} - ${alumno.nombre}` : ''}
                </Text>
              </View>
              <View style={[styles.tableCell, styles.tableCellEsc1]}>
                <Text></Text>
              </View>
              <View style={[styles.tableCell, styles.tableCellOral1]}>
                <Text></Text>
              </View>
              <View style={[styles.tableCell, styles.tableCellProm]}>
                <Text></Text>
              </View>
              <View style={[styles.tableCell, styles.tableCellEsc2]}>
                <Text></Text>
              </View>
              <View style={[styles.tableCell, styles.tableCellOral2]}>
                <Text></Text>
              </View>
              <View style={[styles.tableCell, styles.tableCellDni, { borderRightWidth: 1 }]}>
                <Text></Text>
              </View>
            </View>
          ))}
        </View>

        {/* Firmas */}
        <View style={styles.signatures}>
          <View style={styles.signatureLine}>
            <View style={styles.signatureBox}></View>
            <View style={styles.signatureBox}></View>
            <View style={styles.signatureBox}></View>
          </View>
          <View style={styles.signatureLabels}>
            <Text style={styles.signatureLabel}>FIRMA PRESIDENTE</Text>
            <Text style={styles.signatureLabel}>FIRMA VOCAL</Text>
            <Text style={styles.signatureLabel}>FIRMA VOCAL</Text>
          </View>
        </View>

        {/* Resultados */}
        <View style={styles.results}>
          <Text>APROBADOS:___________             APLAZADOS:___________             AUSENTES:___________</Text>
        </View>

        {/* Lugar y fecha */}
        <View style={styles.locationDate}>
          <Text>LUGAR : SANTA FE</Text>
          <Text>FECHA: {fechaFormateada}</Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>ies@iessantafe.edu.ar    www.iessantafe.edu.ar</Text>
          <Text>1 of 1</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ActaPDF;