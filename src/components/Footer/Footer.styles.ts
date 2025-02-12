import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #d32f2f; /* Color del footer */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

export const ContactInfo = styled.div`
  text-align: left;

  p {
    margin: 0.2rem 0;
    font-size: 0.9rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: white;
    font-size: 1.5rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2); /* Efecto de agrandamiento al pasar el mouse */
    }
  }
`;
