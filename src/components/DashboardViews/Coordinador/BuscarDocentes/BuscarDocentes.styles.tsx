import styled from 'styled-components';

export const BuscarDocentesContainer = styled.div`
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
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #d32f2f;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #860000;
    box-shadow: 0 0 4px rgba(134, 0, 0, 0.8);
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
