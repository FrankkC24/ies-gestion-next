import styled, { keyframes } from 'styled-components';

export const PerfilContainer = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: calc(85vh - 150px);
  overflow-y: auto;
`;

export const PerfilHeader = styled.h2`
  font-size: 2rem;
  color: #860000;
  margin-bottom: 2rem;
  text-align: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #860000;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: 2px solid #d32f2f;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #860000;
    box-shadow: 0 0 4px rgba(134, 0, 0, 0.8);
  }
`;

export const Select = styled.select`
  padding: 0.8rem;
  border: 2px solid #d32f2f;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #860000;
    box-shadow: 0 0 4px rgba(134, 0, 0, 0.8);
  }
`;

export const PasswordSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
  background-color: #f8f8f8;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #d32f2f;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #d32f2f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  align-self: center;
  
  &:hover {
    background-color: #b71c1c;
  }
  
  &:active {
    transform: translateY(2px);
  }
  
  &:disabled {
    background-color: #999;
    cursor: not-allowed;
    
    &:hover {
      background-color: #999;
    }
    
    &:active {
      transform: none;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  button:first-child {
    background-color: #6c757d;
    
    &:hover {
      background-color: #5a6268;
    }
  }
`;

export const CustomDatePickerWrapper = styled.div`
  .custom-datepicker-input {
    padding: 0.8rem;
    border: 2px solid #d32f2f;
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    
    &:focus {
      outline: none;
      border-color: #860000;
      box-shadow: 0 0 4px rgba(134, 0, 0, 0.8);
    }
  }
  
  .custom-datepicker-popper {
    .react-datepicker__header {
      background-color: #d32f2f;
      color: white;
    }
    
    .react-datepicker__day--selected,
    .react-datepicker__day--keyboard-selected {
      background-color: #860000;
      color: white;
    }
    
    .react-datepicker__day:hover {
      background-color: #b71c1c;
      color: white;
    }
    
    .react-datepicker__current-month {
      font-weight: bold;
      color: #860000;
    }
    
    .react-datepicker__day-name {
      color: #860000;
      font-weight: bold;
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SuccessMessage = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #28a745;
  color: white;
  padding: 1rem 2rem;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.3s ease;
  z-index: 1000;
`;