'use client';

import React, { useState } from 'react';
import {
  NotificarContainer,
  FilterContainer,
  DocentesList,
  DocenteItem,
  StyledInput,
  StyledTextarea,
  StyledCheckbox,
  SendButton,
  SlideNotification,
  ProgressBar,
  CloseButton,
  StyledSelect,
} from '@/components/DashboardViews/Coordinador/NotificarDocentes/NotificarDocentes.styles';

const NotificarDocentes: React.FC = () => {
  const [selectedCarrera, setSelectedCarrera] = useState<string>('');
  const [selectedAno, setSelectedAno] = useState<string>('');
  const [selectedDivision, setSelectedDivision] = useState<string>('');
  const [asunto, setAsunto] = useState<string>('');
  const [mensaje, setMensaje] = useState<string>('');
  const [docentes, setDocentes] = useState(
    [
      { id: 1, name: 'BERTONI - GASPAR', selected: true },
      { id: 2, name: 'LAROCCA - RUBÉN', selected: true },
      { id: 3, name: 'RONTOME - ROMINA', selected: true },
      { id: 4, name: 'ABBA - GUILLERMO RICARDO', selected: true },
    ]
  );
  const [notification, setNotification] = useState<string | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const carreras = [
    { id: '1', name: 'Desarrollo de Software' },
    { id: '2', name: 'Relaciones Públicas' },
  ];

  const handleCheckboxChange = (id: number) => {
    setDocentes((prevDocentes) =>
      prevDocentes.map((docente) =>
        docente.id === id ? { ...docente, selected: !docente.selected } : docente
      )
    );
  };

  const handleSend = () => {
    setNotification('Correo enviado a los docentes seleccionados.');
    setIsDisabled(true);

    setTimeout(() => {
      setNotification(null);
      setIsDisabled(false);
      setAsunto('');
      setMensaje('');
    }, 3000);
  };

  const isAnoDisabled = !selectedCarrera;
  const isDivisionDisabled = !selectedAno;
  const showDocentesList = selectedCarrera && selectedAno && selectedDivision;
  const allFieldsFilled =
    selectedCarrera && selectedAno && selectedDivision && asunto.trim() !== '' && mensaje.trim() !== '';

  return (
    <NotificarContainer>
      <h2>NOTIFICAR DOCENTES</h2>
      <FilterContainer>
        <div>
          <label>CARRERA</label>
          <StyledSelect
            value={selectedCarrera}
            onChange={(e) => {
              setSelectedCarrera(e.target.value);
              setSelectedAno('');
              setSelectedDivision('');
            }}
            disabled={isDisabled}
          >
            <option value="">Selecciona una carrera</option>
            {carreras.map((carrera) => (
              <option key={carrera.id} value={carrera.id}>
                {carrera.name}
              </option>
            ))}
          </StyledSelect>
        </div>
        <div>
          <label>AÑO</label>
          <StyledSelect
            value={selectedAno}
            onChange={(e) => {
              setSelectedAno(e.target.value);
              setSelectedDivision('');
            }}
            disabled={isDisabled || isAnoDisabled}
          >
            <option value="">Selecciona un año</option>
            <option value="1">1° Año</option>
            <option value="2">2° Año</option>
          </StyledSelect>
        </div>
        <div>
          <label>DIVISIÓN</label>
          <StyledSelect
            value={selectedDivision}
            onChange={(e) => setSelectedDivision(e.target.value)}
            disabled={isDisabled || isDivisionDisabled}
          >
            <option value="">Selecciona una división</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </StyledSelect>
        </div>
      </FilterContainer>

      {showDocentesList && (
        <>
          <StyledInput
            type="text"
            placeholder="Asunto"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            disabled={isDisabled}
          />
          <StyledTextarea
            placeholder="Escribe tu mensaje aquí..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            disabled={isDisabled}
          />

          <DocentesList>
            {docentes.map((docente) => (
              <DocenteItem key={docente.id}>
                <StyledCheckbox
                  type="checkbox"
                  checked={docente.selected}
                  onChange={() => handleCheckboxChange(docente.id)}
                  disabled={isDisabled}
                />
                {docente.name}
              </DocenteItem>
            ))}
          </DocentesList>

          <SendButton onClick={handleSend} disabled={!allFieldsFilled || isDisabled}>
            ENVIAR
          </SendButton>
        </>
      )}

      {notification && (
        <SlideNotification>
          <span>{notification}</span>
          <ProgressBar />
          <CloseButton onClick={() => setNotification(null)}>&times;</CloseButton>
        </SlideNotification>
      )}
    </NotificarContainer>
  );
};

export default NotificarDocentes;
