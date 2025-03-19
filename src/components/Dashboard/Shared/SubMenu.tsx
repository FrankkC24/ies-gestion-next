import styled, { keyframes } from 'styled-components';

const deployEffect = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const SubMenu = styled.ul<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 100%;
  background-color: #d32f2f; 
  list-style: none;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.8);
  z-index: 10;
  transform-origin: top left; /* Aquí la magia */
  animation: ${deployEffect} 0.20s ease-out;

  li {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    color: white;
    cursor: pointer;
    font-size: 0.9rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: #b71c1c;
      transform: scale(1.05);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }
  }

  li:last-child {
    border-bottom: none;
  }
`;