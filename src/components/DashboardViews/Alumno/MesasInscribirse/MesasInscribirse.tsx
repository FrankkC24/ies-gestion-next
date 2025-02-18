'use client';

import React, { useState } from 'react';
import {
  MesasInscribirseContainer,
  FilterContainer,
  CardGrid,
  ExamCard,
  Label,
  Select,
  SearchButton,
  InscriptionButton,
  PrintButton,
  SlideNotification,
  CloseButton,
  ProgressBar,
} from './MesasInscribirse.styles';
import { FaCheck, FaTimes, FaPrint } from 'react-icons/fa';

const MesasInscribirse: React.FC = () => {
  const examList = [
    { id: '1', title: 'Ingeniería de Software II', date: '10/03/2024', time: '14:00', professor: 'Mario Finos' },
    { id: '2', title: 'Programación I', date: '11/03/2024', time: '09:00', professor: 'Ana Pérez' },
    { id: '3', title: 'Bases de Datos', date: '12/03/2024', time: '10:00', professor: 'Luis Gómez' },
    { id: '4', title: 'Diseño de Interfaces', date: '13/03/2024', time: '15:00', professor: 'Laura Martínez' },
  ];

  const [inscriptions, setInscriptions] = useState<{ [key: string]: boolean }>({});
  const [notification, setNotification] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);
  const [timerId, setTimerId] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleInscriptionToggle = (examId: string, examTitle: string) => {
    if (isButtonDisabled) return;

    setInscriptions((prev) => ({
      ...prev,
      [examId]: !prev[examId],
    }));

    const isCurrentlyInscribed = inscriptions[examId];
    const notificationMessage = isCurrentlyInscribed
      ? `Has cancelado tu inscripción en la mesa de ${examTitle}.`
      : `Te has inscrito en la mesa de ${examTitle}.
Puedes imprimir el comprobante haciendo clic en el icono de la impresora.`;

    setNotification(notificationMessage);
    setIsFading(false);
    setIsButtonDisabled(true);

    if (timerId) clearTimeout(timerId);

    const newTimerId = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setNotification(null);
        setIsButtonDisabled(false);
      }, 1000);
    }, 4000);

    setTimerId(newTimerId);
  };

  const handleCloseNotification = () => {
    if (timerId) clearTimeout(timerId);
    setIsFading(true);
    setTimeout(() => {
      setNotification(null);
      setIsButtonDisabled(false);
    }, 50);
  };

  const handlePrint = (examTitle: string) => {
    console.log(`Imprimiendo comprobante para: ${examTitle}`);
  };

  return (
    <MesasInscribirseContainer>
      <h2>INSCRIBIRSE EN MESAS DE EXAMEN</h2>
      <FilterContainer>
        <div>
          <Label>CARRERA</Label>
          <Select>
            <option value="ingenieria">Desarrollo de Software</option>
            <option value="relaciones-publicas">Relaciones Públicas</option>
            <option value="diseño-grafico">Diseño Gráfico</option>
          </Select>
        </div>
        <div>
          <Label>TURNO</Label>
          <Select>
            <option value="2024-feb-mar">2024 - Febrero/Marzo</option>
            <option value="2024-jul-ago">2024 - Julio/Agosto</option>
          </Select>
        </div>
        <div>
          <Label>LLAMADO:</Label>
          <Select>
            <option value="1">1°</option>
            <option value="2">2°</option>
          </Select>
        </div>
        <SearchButton>BUSCAR</SearchButton>
      </FilterContainer>

      {notification && (
        <SlideNotification $isFading={isFading}>
          <span>{notification}</span>
          <CloseButton onClick={handleCloseNotification}>&times;</CloseButton>
          <ProgressBar />
        </SlideNotification>
      )}

      <CardGrid>
        {examList.map((exam) => (
          <ExamCard key={exam.id}>
            <div>
              <h3>{exam.title}</h3>
              <p>
                <strong>Fecha:</strong> {exam.date}
              </p>
              <p>
                <strong>Hora:</strong> {exam.time}
              </p>
              <p>
                <strong>Profesor:</strong> {exam.professor}
              </p>
            </div>
            {inscriptions[exam.id] && (
              <PrintButton onClick={() => handlePrint(exam.title)}>
                <FaPrint />
              </PrintButton>
            )}
            <InscriptionButton
              $isInscribed={inscriptions[exam.id]}
              onClick={() => handleInscriptionToggle(exam.id, exam.title)}
              disabled={isButtonDisabled}
            >
              {inscriptions[exam.id] ? (
                <>
                  <FaTimes /> CANCELAR INSCRIPCIÓN
                </>
              ) : (
                <>
                  <FaCheck /> INSCRIBIRSE
                </>
              )}
            </InscriptionButton>
          </ExamCard>
        ))}
      </CardGrid>
    </MesasInscribirseContainer>
  );
};

export default MesasInscribirse;
