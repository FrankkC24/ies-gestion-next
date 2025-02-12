import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px); /* Altura dinámica */
  background-color: ${theme.colors.primary};
  padding: 2rem 1rem;
`;

export const Form = styled.form`
  background: ${theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  margin-top: 1rem;
`;
export const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid ${theme.colors.secondary};
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: ${theme.colors.primary};
  }
`;

export const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: ${theme.colors.secondary};
  }
`;

export const ForgotPasswordLink = styled.span`
  font-size: 0.9rem;
  color: ${theme.colors.primary};
  text-align: center;
  margin-top: -0.5rem;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: ${theme.colors.secondary};
  }
`;
