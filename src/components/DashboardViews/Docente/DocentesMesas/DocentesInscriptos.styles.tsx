import styled from 'styled-components';

export const InscriptosContainer = styled.div`
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: calc(85vh - 150px); /* Ajusta la altura al viewport */
  overflow-y: auto; /* Habilita el desplazamiento vertical */

  h2 {
    font-size: 2rem;
    color: #860000;
    margin-bottom: 1rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem; /* Deja espacio debajo de la tabla para el botón */

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
`;

export const BackButton = styled.button`
  display: block;
  margin: 0 auto; /* Centra horizontalmente el botón */
  margin-top: 1rem; /* Espacio adicional entre la tabla y el botón */
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #860000;
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
`;
