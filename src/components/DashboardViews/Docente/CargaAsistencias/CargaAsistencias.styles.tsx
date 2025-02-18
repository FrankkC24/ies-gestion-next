import styled, { keyframes } from 'styled-components';

export const CargaAsistenciasContainer = styled.div`
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* Scroll vertical para el contenedor */
  max-height: calc(90vh - 150px); /* Limita la altura del contenedor */
  scroll-behavior: smooth;

  h2 {
    font-size: 2.5rem;
    color: #860000;
    margin-bottom: 1.5rem;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;

  label {
    font-size: 1rem;
    font-weight: bold;
    color: #860000;
    margin-right: 0.5rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 2px solid #d32f2f;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #860000;
    box-shadow: 0 0 4px rgba(134, 0, 0, 0.8);
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #aaa;
  }
`;

export const SearchButton = styled.button`
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #d32f2f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #b71c1c;
  }

  &:active {
    transform: translateY(2px);
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #aaa;
    cursor: not-allowed;
  }
`;

export const AsistenciasTableWrapper = styled.div`
  max-height: 60vh; /* Altura máxima de la tabla */
  scroll-behavior: smooth;
`;

export const AsistenciasTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 0.8rem;
    text-align: left;
  }

  th {
    background-color: #860000;
    color: white;
    position: sticky;
    top: 0; /* Mantiene los encabezados fijos */
    z-index: 1;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1;
  }

  td {
    font-size: 0.95rem;
  }
`;

export const StyledInput = styled.input`
  padding: 0.3rem;
  border: 1px solid #d32f2f;
  border-radius: 4px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #860000;
    box-shadow: 0 0 3px rgba(134, 0, 0, 0.8);
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #aaa;
  }
`;

export const StyledSelect = styled.select`
  padding: 0.3rem;
  border: 1px solid #d32f2f;
  border-radius: 4px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #860000;
    box-shadow: 0 0 3px rgba(134, 0, 0, 0.8);
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #aaa;
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
  background-color: white;
  color: black;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  border: 2px solid #d32f2f;
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
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
  `}
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #fff;
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
    background-color: #d32f2f;
    animation: progressBar 3.5s linear;
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
  color: black;
  font-size: 1.2rem;
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;

  &:hover {
    color: #860000;
  }
`;
