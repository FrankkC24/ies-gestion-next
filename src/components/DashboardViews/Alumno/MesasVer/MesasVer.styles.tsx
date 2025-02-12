import styled from 'styled-components';

export const MesasBuscarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; /* Se asegura de ocupar todo el espacio disponible */
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: calc(85vh - 150px); /* Ajusta la altura total menos el header y el footer */
  overflow-y: auto; /* Activa el desplazamiento si el contenido excede */
  box-sizing: border-box; /* Asegura que padding y border se incluyan en el tamaño total */
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Ajusta el ancho mínimo */
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