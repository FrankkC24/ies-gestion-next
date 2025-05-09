import styled from 'styled-components';

export const InscriptosMesasContainer = styled.div`
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  
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
  align-items: flex-end;
  
  label {
    font-size: 1rem;
    font-weight: bold;
    color: #860000;
    margin-bottom: 0.3rem;
  }
  
  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 2px solid #d32f2f;
  border-radius: 5px;
  font-size: 1rem;
  width: 200px;
  
  &:focus {
    outline: none;
    border-color: #860000;
    box-shadow: 0 0 4px rgba(134, 0, 0, 0.8);
  }
  
  &:disabled {
    background-color: #f5f5f5;
    color: #aaa;
    cursor: not-allowed;
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
  align-self: flex-end;
  
  &:hover {
    background-color: #b71c1c;
  }
  
  &:active {
    transform: translateY(2px);
  }
  
  &:disabled {
    background-color: #999;
    cursor: not-allowed;
    
    &:hover {
      background-color: #999;
    }
    
    &:active {
      transform: none;
    }
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 1000px;
  
  th,
  td {
    border: 1px solid #ddd;
    padding: 0.8rem;
    text-align: left;
  }
  
  th {
    background-color: #860000;
    color: white;
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

export const DetalleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  background-color: #009688;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background-color: #00796b;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

// Estilos para el modal de detalles
export const DetalleModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const DetalleModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  width: 90%;
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  
  p {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ModalTitle = styled.h3`
  font-size: 1.8rem;
  color: #860000;
  margin: 0;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #860000;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #d32f2f;
  }
`;

export const AlumnosTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
  
  th,
  td {
    border: 1px solid #ddd;
    padding: 0.8rem;
    text-align: left;
  }
  
  th {
    background-color: #860000;
    color: white;
    font-weight: bold;
  }
  
  tr:nth-child(even), tr.row-alternate {
    background-color: #f2f2f2;
  }
  
  tr:hover {
    background-color: #e6e6e6;
  }
`;

export const PrintButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #2e7d32; // Verde para botón de impresión
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background-color: #1b5e20;
  }
  
  &:active {
    transform: translateY(2px);
  }
  
  &:disabled {
    background-color: #999;
    cursor: not-allowed;
    
    &:hover {
      background-color: #999;
    }
    
    &:active {
      transform: none;
    }
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
  gap: 0.8rem;
`;

export const HiddenIframe = styled.iframe`
  position: absolute;
  width: 0;
  height: 0;
  border: 0;
  visibility: hidden;
`;