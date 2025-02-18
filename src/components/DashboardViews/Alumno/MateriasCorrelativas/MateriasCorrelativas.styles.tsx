import styled from 'styled-components';

export const CorrelativasContainer = styled.div`
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: calc(85vh - 150px);
  overflow-y: auto;

  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #860000;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1rem;
    color: #333;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto; /* Permite desplazar la tabla horizontalmente si es necesario */
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;

  thead {
    background-color: #860000;
    color: white;
  }

  th,
  td {
    text-align: left;
    padding: 0.8rem;
    border: 1px solid #ddd;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:nth-child(odd) {
    background-color: #fff;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }
`;

export const TableFooter = styled.div`
  margin-top: 1rem;
  text-align: right;
  font-size: 0.9rem;
  color: #333;
`;
