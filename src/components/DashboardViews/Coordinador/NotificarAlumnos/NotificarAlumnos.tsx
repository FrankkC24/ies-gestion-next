import React, { useState, useEffect } from 'react';
import {
  NotificarContainer,
  FilterContainer,
  AlumnosList,
  AlumnoItem,
  StyledInput,
  StyledTextarea,
  StyledCheckbox,
  SendButton,
  SlideNotification,
  ProgressBar,
  CloseButton,
  StyledSelect,
} from './NotificarAlumnos.styles';

const NotificarAlumnos: React.FC = () => {
  const [selectedCarrera, setSelectedCarrera] = useState<string>('');
  const [selectedAno, setSelectedAno] = useState<string>('');
  const [selectedDivision, setSelectedDivision] = useState<string>('');
  const [asunto, setAsunto] = useState<string>('');
  const [mensaje, setMensaje] = useState<string>('');
  const [alumnos, setAlumnos] = useState(
    [
      { id: 1, name: 'ACEVEDO JESÚS GABRIEL', selected: true },
      { id: 2, name: 'LOPEZ MARIA', selected: true },
    ]
  );
  const [notification, setNotification] = useState<string | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const carreras = [
    { id: '1', name: 'Desarrollo de Software' },
    { id: '2', name: 'Relaciones Públicas' },
  ];

  const handleCheckboxChange = (id: number) => {
    setAlumnos((prevAlumnos) =>
      prevAlumnos.map((alumno) =>
        alumno.id === id ? { ...alumno, selected: !alumno.selected } : alumno
      )
    );
  };

  const handleSend = () => {
    setNotification('Correo enviado a los alumnos seleccionados.');
    setIsDisabled(true);

    // Eliminar la notificación después de 3 segundos (coincide con la animación)
    setTimeout(() => {
      setNotification(null);
      setIsDisabled(false);
      setAsunto('');
      setMensaje('');
    }, 3000);
  };

  const isAnoDisabled = !selectedCarrera;
  const isDivisionDisabled = !selectedAno;
  const showAlumnosList = selectedCarrera && selectedAno && selectedDivision;
  const allFieldsFilled =
    selectedCarrera && selectedAno && selectedDivision && asunto.trim() !== '' && mensaje.trim() !== '';

  return (
    <NotificarContainer>
      <h2>NOTIFICAR ALUMNOS</h2>
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

      {showAlumnosList && (
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

          <AlumnosList>
            {alumnos.map((alumno) => (
              <AlumnoItem key={alumno.id}>
                <StyledCheckbox
                  type="checkbox"
                  checked={alumno.selected}
                  onChange={() => handleCheckboxChange(alumno.id)}
                  disabled={isDisabled}
                />
                {alumno.name}
              </AlumnoItem>
            ))}
          </AlumnosList>

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

export default NotificarAlumnos;
