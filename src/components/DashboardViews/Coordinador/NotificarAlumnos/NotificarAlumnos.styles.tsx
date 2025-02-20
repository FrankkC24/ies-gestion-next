import styled, { keyframes } from 'styled-components';

export const NotificarContainer = styled.div`
  padding: 0.8rem;
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
  margin-bottom: 0.5rem;

  label {
    font-size: 1.2rem;
    font-weight: bold;
    color: #860000;
    margin-right: 0.1rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const StyledSelect = styled.select`
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

  &:disabled {
    background-color: #f5f5f5;
    color: #aaa;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #d32f2f;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #860000;
    box-shadow: 0 0 3px rgba(134, 0, 0, 0.8);
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #aaa;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 0.5rem;
  border: 1px solid #d32f2f;
  border-radius: 5px;
  resize: none;
  margin-bottom: 1.5rem;

  &:focus {
    outline: none;
    border-color: #860000;
    box-shadow: 0 0 3px rgba(134, 0, 0, 0.8);
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #aaa;
  }
`;

export const AlumnosList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 300px;
  overflow-y: auto;
  padding: 0.5rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const AlumnoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    color: #333;
  }
`;

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin: 0;
  accent-color: #860000;
`;

export const SendButton = styled.button`
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

  &:disabled {
    background-color: #f5f5f5;
    color: #aaa;
    cursor: not-allowed;
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const SlideNotification = styled.div`
  position: fixed;
  top: 20%;
  right: 5%;
  background-color: white;
  color: black;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  border: 2px solid #d32f2f;
  font-size: 1rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  animation: ${slideIn} 0.5s ease-out, ${fadeOut} 3s ease-out 3s forwards;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ddd;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  margin-top: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #d32f2f;
    animation: progressBar 3s linear forwards;
  }

  @keyframes progressBar {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: black;
  font-size: 1.2rem;
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;

  &:hover {
    color: #860000;
  }
`;