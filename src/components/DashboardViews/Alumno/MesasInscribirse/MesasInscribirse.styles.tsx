import styled, { keyframes } from 'styled-components';

export const MesasInscribirseContainer = styled.div`
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: calc(85vh - 150px); /* Ajusta la altura para ocupar el espacio restante */
  overflow-y: auto; /* Activa scroll vertical si el contenido excede */

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: #00000;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #860000;
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 2px solid #d32f2f;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #860000;
    box-shadow: 0 0 4px rgba(134, 0, 0, 0.8);
  }
`;

export const SearchButton = styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #d32f2f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  align-self: flex-end;
  margin-top: 0.2rem;

  &:hover {
    background-color: #b71c1c;
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Fijas dos columnas */
  gap: 1.5rem; /* Espaciado entre tarjetas */
  width: 100%;
`;

export const ExamCard = styled.div`
  background-color: #f8f8f8;
  border: 2px solid #d32f2f;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; /* Asegura que los elementos estén en columna */
  justify-content: space-between;
  position: relative; /* Para posicionar el botón */
  text-align: left;

  h3 {
    font-size: 1.2rem;
    color: #860000;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
`;

export const InscriptionButton = styled.button<{ $isInscribed?: boolean }>`
  display: flex;
  align-items: center; /* Centra ícono y texto verticalmente */
  justify-content: center; /* Centra ícono y texto horizontalmente */
  gap: 0.5rem; /* Espaciado entre ícono y texto */
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  background-color: ${(props) => (props.$isInscribed ? '#d32f2f' : '#28a745')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.$isInscribed ? '#b71c1c' : '#218838')};
  }

  &:active {
    transform: translateY(2px);
  }

  svg {
    font-size: 1.2rem; /* Asegura que el ícono tenga un tamaño adecuado */
  }
`;


export const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem; /* Espaciado entre ícono y texto */
  font-size: 1rem; /* Tamaño del ícono */
`;

export const PrintButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px; /* Posiciona el botón de impresión en la esquina superior derecha */
  background-color: #009c8c;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #218838;
  }

  &:active {
    transform: translateY(2px);
  }

  svg {
    font-size: 1.5rem; /* Tamaño del ícono */
  }

  /* Tooltip */
  &::after {
    content: 'Imprimir'; /* Texto del tooltip */
    position: absolute;
    bottom: -30px; /* Ajusta la posición */
    right: 50%;
    transform: translateX(50%);
    background-color: #000;
    color: white;
    padding: 0.3rem 0.5rem;
    border-radius: 4px;
    font-size: 0.78rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
    visibility: visible;
  }
`;

export const Notification = styled.div`
  position: fixed;
  top: 10%;
  right: 5%;
  background-color: #28a745;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  z-index: 1000;
  animation: fadeInOut 5s ease-in-out;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    10%, 90% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
`;

export const SlideNotification = styled.div<{ $isFading: boolean }>`
  position: fixed;
  top: 20%;
  right: 5%;
  background-color: white; /* Fondo blanco */
  color: black; /* Texto negro */
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  border: 2px solid #d32f2f; /* Borde rojo */
  font-size: 1rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  animation: ${({ $isFading }) => ($isFading ? fadeOut : slideIn)} 0.5s ease;

  ${({ $isFading }) =>
    $isFading &&
    `
    animation-delay: 4.5s;
    animation-fill-mode: forwards;
  `}

  white-space: pre-line; /* Permite saltos de línea */
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #fff; /* Fondo blanco */
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  margin-top: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #d32f2f; /* Rojo */
    animation: progressBar 5s linear;
  }

  @keyframes progressBar {
    0% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: black; /* Texto negro */
  font-size: 1.2rem;
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;

  &:hover {
    color: #860000; /* Rojo oscuro al pasar el mouse */
  }
`;

