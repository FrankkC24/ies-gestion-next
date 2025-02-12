'use client';

import { NoticeContainer, IconWrapper, ContentWrapper } from './Notice.styles';
import { FaExclamationCircle } from 'react-icons/fa';

interface NoticeProps {
  active: boolean;
}

const Notice: React.FC<NoticeProps> = ({ active }) => {
  if (!active) return null;

  return (
    <NoticeContainer>
      <IconWrapper>
        <FaExclamationCircle />
      </IconWrapper>
      <ContentWrapper>
        <h3>AVISO</h3>
        <p>
          INSCRIPCIONES A MESAS DE EXÁMENES <br />
          <strong>Primer llamado:</strong> 15/11 al 18/11 <br />
          <strong>Segundo llamado:</strong> 02/12 al 05/12
        </p>
      </ContentWrapper>
    </NoticeContainer>
  );
};

export default Notice;