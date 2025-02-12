import styled from 'styled-components';

export const CalificacionesContainer = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  height: calc(85vh - 150px);

  h2 {
    font-size: 2rem;
    color: #860000;
    margin-bottom: 1.5rem;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;

  label {
    font-size: 1.2rem; /* Tamaño ajustado */
    font-weight: bold;
    color: #860000;
  }
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 2px solid #d32f2f;
  border-radius: 5px;
  font-size: 1rem;
  width: auto;

  &:focus {
    outline: none;
    border-color: #860000;
    box-shadow: 0 0 4px rgba(134, 0, 0, 0.8);
  }
`;

export const SubjectCard = styled.div`
  background-color: #f8f8f8;
  border: 2px solid #d32f2f;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SubjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #860000;
  margin-bottom: 1rem;
`;

export const GradesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const GradeItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: #333;
  }
`;

export const GradeHeader = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #860000;
`;
