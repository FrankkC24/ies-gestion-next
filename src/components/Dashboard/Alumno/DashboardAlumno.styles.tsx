// import styled from 'styled-components';
// import shouldForwardProp from '@styled-system/should-forward-prop';

// export const DashboardContainer = styled.div`
//   display: flex;
//   height: calc(100vh - 80px); /* Ajusta al tamaño del header */
//   background-color: #860000;
//   user-select: none;
//   overflow: hidden;
// `;

// export const Sidebar = styled.div`
//   width: 250px;
//   background-color: #860000; /* Rojo oscuro del footer */
//   padding: 2rem 1rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem; /* Espaciado uniforme entre los botones */
// `;

// export const MenuItem = styled.div.withConfig({
//   shouldForwardProp: (prop) => prop !== 'isActive', // Filtramos la prop
// })<{ isActive?: boolean }>`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   padding: 0.8rem 1rem;
//   font-size: 1rem;
//   font-weight: bold;
//   background-color: #d32f2f;
//   color: white;
//   border: 2px solid white;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;

//   span {
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;
//   }

//   &:hover {
//     background-color: #b71c1c;
//     box-shadow: 0 4px 6px rgba(255, 255, 255, 0.4);
//   }

//   ${({ isActive }) =>
//     isActive &&
//     `
//     transform: translateY(2px);
//   `}
// `;

// export const ContentArea = styled.div`
//   flex: 1;
//   background-color: #fff;
//   padding: 2rem;

//   h1 {
//     font-size: 2rem;
//     color: #860000;
//   }

//   p {
//     font-size: 1rem;
//     margin-top: 1rem;
//   }
// `;

// export const ReportButton = styled(MenuItem)`
//   background-color: #6a1b9a;

//   &:hover {
//     background-color: #4a148c;
//   }

//   &:active {
//     transform: translateY(2px);
//   }
// `;

import styled from 'styled-components';
import shouldForwardProp from '@styled-system/should-forward-prop';

export const DashboardContainer = styled.div`
  display: flex;
  height: calc(100vh - 80px); /* Ajusta al tamaño del header */
  background-color: #860000;
  user-select: none;
  overflow: hidden;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #860000; /* Rojo oscuro del footer */
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Espaciado uniforme entre los botones */
`;

export const MenuItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive', // Filtramos la prop
})<{ isActive?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
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
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  &:hover {
    background-color: #b71c1c;
    box-shadow: 0 4px 6px rgba(255, 255, 255, 0.4);
  }
  
  ${({ isActive }) =>
    isActive &&
    `
    transform: translateY(2px);
  `}
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
  margin-top: auto; /* Empuja el botón al final del sidebar */
  
  &:hover {
    background-color: #4a148c;
  }
  
  &:active {
    transform: translateY(2px);
  }
`;

export const ProfileButton = styled(MenuItem)`
  background-color: #009688;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  
  &:hover {
    background-color: #00796b;
  }
  
  &:active {
    transform: translateY(2px);
  }
`;