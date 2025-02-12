import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d32f2f;
  padding: 1rem 2rem;
  height: 100px;
  color: white;
  user-select: none;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 3.5rem;
  font-weight: bold;

  .letter {
    margin: 0 0.2rem;
  }

  .dot {
    font-size: 2rem;
    font-weight: normal;
    margin: 0 0.2rem;
    line-height: 1;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;

  div {
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 1.2;
  }
`;

export const YearsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-transform: uppercase;
  text-align: right;

  div:first-child {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.2rem;
    -webkit-text-stroke: 1px black;
    text-stroke: 1px black;
  }

  div:not(:first-child) {
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1.2;
  }
`;

export const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  svg {
    font-size: 1.5rem;
  }
`;

export const LogoutButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; /* Espaciado entre los botones de perfil y logout */
`;
