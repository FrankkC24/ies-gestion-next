import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  height: calc(100vh - 80px); /* Ajusta al tamaño del header */
  background-color: #860000; /* Rojo oscuro */
  user-select: none;
  overflow: hidden;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #860000;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MenuItem = styled.div`
  position: relative;
  display: flex;
  align-items: center; /* Asegura que el ícono y texto estén alineados */
  justify-content: space-between;
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: #d32f2f;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  white-space: nowrap; /* Evita salto de línea */

  span {
    display: flex;
    align-items: center; /* Asegura que el texto y el ícono estén alineados */
    gap: 0.5rem;
  }

  &:hover {
    background-color: #b71c1c;
    box-shadow: 0 4px 6px rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 2rem;

  h1 {
    font-size: 2rem;
    color: #860000;
  }

  p {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

export const ReportButton = styled(MenuItem)`
  background-color: #6a1b9a;

  &:hover {
    background-color: #4a148c;
  }
`;
