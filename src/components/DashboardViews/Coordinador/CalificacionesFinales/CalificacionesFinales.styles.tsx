import styled from 'styled-components';

export const Container = styled.div`
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
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  label {
    font-size: 1rem;
    font-weight: bold;
    color: #860000;
  }
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 2px solid #d32f2f;
  border-radius: 5px;
  font-size: 1rem;
  width: 300px;
  
  &:focus {
    outline: none;
    border-color: #860000;
    box-shadow: 0 0 4px rgba(134, 0, 0, 0.8);
  }
  
  &:disabled {
    background-color: #f5f5f5;
    color: #999;
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
  
  &:hover:not(:disabled) {
    background-color: #b71c1c;
  }
  
  &:active:not(:disabled) {
    transform: translateY(2px);
  }
  
  &:disabled {
    background-color: #999;
    color: #fff;
    cursor: not-allowed;
    
    &:hover {
      background-color: #999;
    }
    
    &:active {
      transform: none;
    }
  }
`;

// Nuevos estilos para las tarjetas de finales
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const FinalCard = styled.div`
  background-color: #ffffff;
  border: 2px solid #d32f2f;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const FinalDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #860000;
  margin-bottom: 1rem;
  
  svg {
    color: #d32f2f;
  }
`;

export const LoadButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #2e7d32;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: #1b5e20;
  }
  
  &:active:not(:disabled) {
    transform: translateY(1px);
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

// Estilos para el modal
export const Modal = styled.div`
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

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
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
  padding: 0.5rem;
  border-radius: 50%;
  
  &:hover {
    background-color: #f5f5f5;
    color: #d32f2f;
  }
`;

// Estilos para el input de fecha
export const DatePickerContainer = styled.div`
  margin-bottom: 2rem;
  
  label {
    display: block;
    font-size: 1rem;
    font-weight: bold;
    color: #860000;
    margin-bottom: 0.5rem;
  }
`;

export const DateInput = styled.input`
  width: 200px;
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
    color: #999;
    cursor: not-allowed;
  }
`;

// export const DateInput = styled.input`
//   width: 200px;
//   padding: 0.5rem;
//   border: 2px solid #d32f2f;
//   border-radius: 5px;
//   font-size: 1rem;
  
//   &:focus {
//     outline: none;
//     border-color: #860000;
//     box-shadow: 0 0 4px rgba(134, 0, 0, 0.8);
//   }
// `;

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin-bottom: 2rem;
`;

export const Table = styled.table`
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
    font-weight: bold;
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

// Select para calificaciones
export const CalificacionSelect = styled.select`
  width: 100%;
  padding: 0.4rem;
  border: 2px solid #d32f2f;
  border-radius: 4px;
  font-size: 0.95rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #860000;
    box-shadow: 0 0 3px rgba(134, 0, 0, 0.5);
  }
  
  &:disabled {
    background-color: #f5f5f5;
    color: #999;
    cursor: not-allowed;
  }
  
  option {
    padding: 0.2rem;
  }
`;

// Botones del modal
export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 2px solid #f0f0f0;
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #2e7d32;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover:not(:disabled) {
    background-color: #1b5e20;
  }
  
  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #757575;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover:not(:disabled) {
    background-color: #424242;
  }
  
  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;