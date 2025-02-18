import styled from 'styled-components';

export const MesasContainer = styled.div`
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: calc(85vh - 150px); /* Ajusta la altura */
  overflow-y: auto;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    color: #860000;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  align-items: center;

  label {
    font-size: 1rem;
    font-weight: bold;
    color: #860000;
    margin-right: 0.5rem;
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
  padding: 0.6rem 1.2rem;
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

export const MesasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

export const Header = styled.div`
  margin-bottom: 1rem;

  h3 {
    font-size: 1.2rem;
    color: #860000;
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }
`;

export const Info = styled.div`
  p {
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  strong {
    color: #BLACK;
  }
`;

export const MesaCard = styled.div`
  background-color: #f8f8f8;
  border: 2px solid #d32f2f;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const ViewInscriptosButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
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

