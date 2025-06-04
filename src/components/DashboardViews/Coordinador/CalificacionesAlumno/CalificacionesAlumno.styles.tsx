import styled from 'styled-components';

export const CalificacionesAlumnoContainer = styled.div`
  padding: 1rem 1.5rem 3rem 1.5rem; /* Agregado padding bottom para el botón */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  height: 100%;
  position: relative; /* Para posicionar el botón relativo a este contenedor */

  h2 {
    font-size: 2rem;
    color: #860000;
    margin-bottom: 1.5rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: end;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

export const FormGroup = styled.div<{ $compact?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: ${props => props.$compact ? '0 0 auto' : '1'};
  min-width: ${props => props.$compact ? 'auto' : '180px'};
`;

export const Label = styled.label`
  font-size: 0.85rem;
  font-weight: bold;
  color: #860000;
  text-transform: uppercase;
`;

const inputHeight = '2.2rem';

export const Select = styled.select<{ $compact?: boolean }>`
  padding: 0.5rem;
  height: ${inputHeight};
  border: 2px solid #d32f2f;
  border-radius: 4px;
  font-size: 0.9rem;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  width: ${props => props.$compact ? 'auto' : '100%'};
  min-width: ${props => props.$compact ? '90px' : 'auto'};

  &:focus {
    outline: none;
    border-color: #860000;
    box-shadow: 0 0 4px rgba(134, 0, 0, 0.3);
  }

  &:hover {
    border-color: #b71c1c;
  }

  option {
    padding: 0.4rem;
  }
`;

export const Input = styled.input<{ $isReadOnly?: boolean }>`
  padding: 0.5rem;
  height: ${inputHeight};
  border: 2px solid ${props => props.$isReadOnly ? '#cccccc' : '#d32f2f'};
  border-radius: 4px;
  font-size: 0.9rem;
  background-color: ${props => props.$isReadOnly ? '#f5f5f5' : 'white'};
  color: ${props => props.$isReadOnly ? '#666666' : 'black'};
  cursor: ${props => props.$isReadOnly ? 'not-allowed' : 'text'};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.$isReadOnly ? '#cccccc' : '#860000'};
    box-shadow: ${props => props.$isReadOnly ? 'none' : '0 0 4px rgba(134, 0, 0, 0.3)'};
  }

  &::placeholder {
    color: #999999;
    font-style: italic;
  }
`;

export const SearchButton = styled.button`
  padding: 0.5rem 1.5rem;
  height: ${inputHeight};
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  background-color: #d32f2f;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 100px;

  &:hover:not(:disabled) {
    background-color: #b71c1c;
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const MateriasContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1.2rem;
  margin-top: 1.5rem;
  padding-bottom: 2rem; /* Espacio para que no se tapen con el botón */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-bottom: 3rem; /* Más espacio en móviles */
  }
`;

export const MateriaCard = styled.div`
  background-color: #f8f9fa;
  border: 2px solid #d32f2f;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const MateriaTitle = styled.h3`
  color: #860000;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  text-align: center;
  border-bottom: 2px solid #860000;
  padding-bottom: 0.4rem;
`;

export const NotasGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const NotaRow = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1.2fr 1.4fr 1fr 1.2fr 1.4fr;
  gap: 0.5rem;
  align-items: center;
  padding: 0.6rem 0.4rem;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #e0e0e0;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0.4rem;
    padding: 0.8rem;
    
    & > * {
      justify-self: stretch;
    }
  }
`;

export const NotaLabel = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: #860000;
  
  @media (max-width: 1024px) {
    margin-top: 0.4rem;
    font-size: 0.75rem;
    
    &:first-child {
      margin-top: 0;
      font-size: 0.85rem;
      text-decoration: underline;
    }
  }
`;

export const DatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container input {
    width: 100%;
    height: ${inputHeight};
    padding: 0.5rem;
    border: 2px solid #d32f2f;
    border-radius: 4px;
    font-size: 0.9rem;
    background-color: white;
    transition: all 0.3s ease;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: #860000;
      box-shadow: 0 0 4px rgba(134, 0, 0, 0.3);
    }

    &::placeholder {
      color: #999999;
      font-style: italic;
    }
  }

  .react-datepicker-popper {
    z-index: 1000 !important;
  }

  .react-datepicker {
    border: 2px solid #860000;
    border-radius: 6px;
    font-family: inherit;
    font-size: 0.9rem;
    z-index: 1000;
  }

  .react-datepicker__header {
    background-color: #860000;
    border-bottom: 1px solid #860000;
    border-radius: 4px 4px 0 0;
  }

  .react-datepicker__current-month,
  .react-datepicker__day-name {
    color: white;
    font-size: 0.9rem;
  }

  .react-datepicker__navigation {
    top: 10px;
  }

  .react-datepicker__navigation--previous {
    border-right-color: white;
  }

  .react-datepicker__navigation--next {
    border-left-color: white;
  }

  .react-datepicker__day {
    color: #333;
    font-size: 0.8rem;
    
    &:hover {
      background-color: #f0f0f0;
      border-radius: 3px;
    }
  }

  .react-datepicker__day--selected {
    background-color: #860000 !important;
    color: white !important;
    border-radius: 3px;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #d32f2f;
    color: white;
    border-radius: 3px;
  }

  .react-datepicker__day--today {
    font-weight: bold;
    color: #860000;
  }

  .react-datepicker__month-container {
    font-size: 0.85rem;
  }

  /* Nombres de meses en español */
  .react-datepicker__month-select option[value="0"]::after { content: "Enero"; }
  .react-datepicker__month-select option[value="1"]::after { content: "Febrero"; }
  .react-datepicker__month-select option[value="2"]::after { content: "Marzo"; }
  .react-datepicker__month-select option[value="3"]::after { content: "Abril"; }
  .react-datepicker__month-select option[value="4"]::after { content: "Mayo"; }
  .react-datepicker__month-select option[value="5"]::after { content: "Junio"; }
  .react-datepicker__month-select option[value="6"]::after { content: "Julio"; }
  .react-datepicker__month-select option[value="7"]::after { content: "Agosto"; }
  .react-datepicker__month-select option[value="8"]::after { content: "Septiembre"; }
  .react-datepicker__month-select option[value="9"]::after { content: "Octubre"; }
  .react-datepicker__month-select option[value="10"]::after { content: "Noviembre"; }
  .react-datepicker__month-select option[value="11"]::after { content: "Diciembre"; }
`;

export const FloatingButton = styled.button`
  position: absolute; /* Cambiado de fixed a absolute */
  bottom: 1rem; /* Posicionado relativo al contenedor */
  right: 1.5rem;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #2e7d32;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(46, 125, 50, 0.4);
  z-index: 100; /* Reducido para que no interfiera */
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: slideInUp 0.5s ease;

  &:hover {
    background-color: #1b5e20;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(46, 125, 50, 0.6);
  }

  &:active {
    transform: translateY(0);
  }

  @keyframes slideInUp {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }
`;
