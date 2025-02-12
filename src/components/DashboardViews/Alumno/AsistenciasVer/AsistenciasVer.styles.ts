import styled from 'styled-components';

export const AsistenciasContainer = styled.div`
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: calc(85vh - 150px); /* Ajusta la altura */
  overflow-y: auto;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: #000000;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
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
`;

export const Label = styled.label`
  font-size: 1.2rem; /* Ajustamos al tamaño del texto del selector */
  font-weight: bold;
  color: #860000;
  margin-right: 0.5rem; /* Espacio entre la etiqueta y el selector */
  display: inline-block; /* Aseguramos que se mantenga en línea con el selector */
  line-height: calc(1.8rem + 0.5rem); /* Igualamos la altura al selector */
`;

export const MateriasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

export const MateriaCard = styled.div`
  background-color: #f8f8f8;
  border: 2px solid #d32f2f;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.2rem;
    color: #860000;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #333333;
  }
`;

export const FaltaList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const FaltaItem = styled.li`
  font-size: 1rem;
  color: #333333;
  margin-bottom: 0.5rem;

  strong {
    font-weight: bold;
    color: #black;
  }
`;
