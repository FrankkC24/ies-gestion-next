'use client';

import { useState } from 'react';
import {
  FaCalendarAlt,
  FaClipboardList,
  FaChevronRight,
  FaEdit,
  FaGraduationCap,
  FaClock,
  FaBug,
} from 'react-icons/fa';
import {
  DashboardContainer,
  Sidebar,
  MenuItem,
  ContentArea,
  ReportButton,
} from '@/components/Dashboard/Docente/DashboardDocente.styles';
import { SubMenu } from '@/components/Dashboard/Shared/SubMenu';

import DocenteMesas from '@/components/DashboardViews/Docente/DocentesMesas/DocentesMesas';
import CargarNotas from '@/components/DashboardViews/Docente/CargarNotas/CargarNotas';
import CargarFinales from '@/components/DashboardViews/Docente/CargarFinales/CargarFinales';
import DocentesHorarios from '@/components/DashboardViews/Docente/DocentesHorarios/DocentesHorarios';
import ReportarProblema from '@/components/ReportarProblema/ReportarProblema';
import CargarAsistencias from '@/components/DashboardViews/Docente/CargaAsistencias/CargaAsistencias';
import VerAsistencias from '@/components/DashboardViews/Docente/VerAsistencias/VerAsistencias';

import AppLayout from '@/components/Layout/AppLayout';

const DashboardDocente = () => {
  const [visibleSubMenu, setVisibleSubMenu] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<string>('Bienvenido');

  const handleMouseEnter = (menu: string) => {
    setVisibleSubMenu(menu);
  };

  const handleMouseLeave = () => {
    setVisibleSubMenu(null);
  };

  const handleSubMenuClick = (view: string) => {
    setCurrentView(view);
    setVisibleSubMenu(null);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'Mesas':
        return <DocenteMesas />;
      case 'CargarNotas':
        return <CargarNotas />;
      case 'CargarFinales':
        return <CargarFinales />;
      case 'Horarios':
        return <DocentesHorarios />;
      case 'ReportarProblema':
        return <ReportarProblema />
      case 'CargarAsistencias':
        return <CargarAsistencias />;
      case 'VerAsistencias':
        return <VerAsistencias />;
      default:
        return (
          <>
            <h1>Bienvenido DOCENTE</h1>
            <p>Aquí podrás gestionar tus clases y estudiantes.</p>
          </>
        );
    }
  };

  return (
    <AppLayout variant="dashboard">
      <DashboardContainer>
        <Sidebar>
          <MenuItem onClick={() => handleSubMenuClick('Mesas')}>
            <span>
              <FaCalendarAlt style={{ marginRight: '0.2rem' }} />
              MESAS
            </span>
          </MenuItem>
          <MenuItem
            onMouseEnter={() => handleMouseEnter('calificaciones')}
            onMouseLeave={handleMouseLeave}
          >
            <span>
              <FaClipboardList style={{ marginRight: '0.2rem' }} />
              CALIFICACIONES <FaChevronRight style={{ marginLeft: '-0.2rem' }} />
            </span>
            <SubMenu $isVisible={visibleSubMenu === 'calificaciones'}>
              <li onClick={() => handleSubMenuClick('CargarNotas')}>
                <FaEdit style={{ marginRight: '0.5rem' }} />
                CARGAR NOTAS
              </li>
              <li onClick={() => handleSubMenuClick('CargarFinales')}>
                <FaGraduationCap style={{ marginRight: '0.5rem' }} />
                CARGAR FINALES
              </li>
            </SubMenu>
          </MenuItem>
          <MenuItem onClick={() => handleSubMenuClick('Horarios')}>
            <span>
              <FaClock style={{ marginRight: '0.2rem' }} />
              HORARIOS
            </span>
          </MenuItem>
          <MenuItem
            onMouseEnter={() => handleMouseEnter('asistencias')}
            onMouseLeave={handleMouseLeave}
          >
            <span>
              <FaClipboardList style={{ marginRight: '0.2rem' }} />
              ASISTENCIAS <FaChevronRight style={{ marginLeft: '-0.2rem' }} />
            </span>
            <SubMenu $isVisible={visibleSubMenu === 'asistencias'}>
              <li onClick={() => handleSubMenuClick('CargarAsistencias')}>
                <FaEdit style={{ marginRight: '0.5rem' }} />
                CARGAR ASISTENCIAS
              </li>
              <li onClick={() => handleSubMenuClick('VerAsistencias')}>
                <FaGraduationCap style={{ marginRight: '0.5rem' }} />
                VER ASISTENCIAS
              </li>
            </SubMenu>
          </MenuItem>
          <ReportButton onClick={() => handleSubMenuClick('ReportarProblema')}>
            <FaBug style={{ marginRight: '0.5rem' }} />
            Reportar Problema
          </ReportButton>
        </Sidebar>
        <ContentArea>{renderContent()}</ContentArea>
      </DashboardContainer>
    </AppLayout>
  );
};

export default DashboardDocente;
