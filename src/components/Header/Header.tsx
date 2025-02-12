'use client';

import { useRouter } from 'next/navigation';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import {
  HeaderContainer,
  LogoContainer,
  TextContainer,
  YearsContainer,
  ProfileButton,
  LogoutButtonContainer,
} from './Header.styles';

interface HeaderProps {
  variant: 'login' | 'dashboard';
}

const Header: React.FC<HeaderProps> = ({ variant }) => {
  const router = useRouter();

  const handleProfileClick = () => {
    router.push('/perfil');
  };

  const handleLogoutClick = () => {
    console.log('Cerrando sesión...');
    // Lógica de logout aquí
  };

  return (
    <HeaderContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <LogoContainer>
          <span className="letter">I</span>
          <span className="dot">•</span>
          <span className="letter">E</span>
          <span className="dot">•</span>
          <span className="letter">S</span>
        </LogoContainer>
        <TextContainer>
          <div>INSTITUTO</div>
          <div>DE ESTUDIOS</div>
          <div>SUPERIORES</div>
        </TextContainer>
      </div>
      {variant === 'login' && (
        <YearsContainer>
          <div>42 AÑOS</div>
          <div>FORMANDO</div>
          <div>LÍDERES</div>
        </YearsContainer>
      )}
      {variant === 'dashboard' && (
        <LogoutButtonContainer>
          <ProfileButton onClick={handleProfileClick}>
            <FaUserCircle style={{ fontSize: '2.5rem', marginRight: '0.5rem' }} />
          </ProfileButton>
          <ProfileButton onClick={handleLogoutClick}>
            <FaSignOutAlt style={{ fontSize: '2rem', marginRight: '0.5rem' }} />
          </ProfileButton>
        </LogoutButtonContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;