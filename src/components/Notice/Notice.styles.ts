import styled from 'styled-components';

export const NoticeContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fffbea; /* Fondo suave */
  border: 2px solid #ffc107; /* Borde amarillo */
  border-radius: 10px; /* Bordes redondeados */
  padding: 1.5rem;
  max-width: 450px;
  margin: 1rem auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  color: #333;
`;

export const IconWrapper = styled.div`
  font-size: 2.5rem; /* Tamaño del icono */
  color: #ff9800; /* Color del icono */
  margin-right: 1rem;
`;

export const ContentWrapper = styled.div`
  h3 {
    font-size: 1.4rem; /* Tamaño del título */
    color: #d17b00; /* Color del título */
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem; /* Tamaño del texto */
    color: #333;

    strong {
      color: #d17b00; /* Color para "Primer llamado" y "Segundo llamado" */
    }
  }
`;
