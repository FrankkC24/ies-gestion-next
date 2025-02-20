'use client';

import React, { useState } from 'react';
import {
  FaClipboardList,
  FaChevronRight,
  FaCalendarAlt,
  FaEdit,
  FaUsers,
  FaBook,
  FaBug,
  FaBell,
} from 'react-icons/fa';
import {
  DashboardContainer,
  Sidebar,
  MenuItem,
  SubMenu,
  ContentArea,
  ReportButton,
} from '@/components/Dashboard/Coordinador/DashboardCoordinador.styles';
import ReportarProblema from '@/components/ReportarProblema/ReportarProblema';
import AppLayout from '@/components/Layout/AppLayout';
import BuscarDocentes from '@/components/DashboardViews/Coordinador/BuscarDocentes/BuscarDocentes';
import NotificarDocentes from '@/components/DashboardViews/Coordinador/NotificarDocentes/NotificarDocentes';
import BuscarAlumnos from '@/components/DashboardViews/Coordinador/BuscarAlumnos/BuscarAlumnos';
import NotificarAlumnos from '@/components/DashboardViews/Coordinador/NotificarAlumnos/NotificarAlumnos';
import BuscarMaterias from '@/components/DashboardViews/Coordinador/BuscarMaterias/BuscarMaterias';

const DashboardCoordinador: React.FC = () => {
  const [visibleSubMenu, setVisibleSubMenu] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<string>('Bienvenido');

  const handleMouseEnter = (menu: string) => setVisibleSubMenu(menu);
  const handleMouseLeave = () => setVisibleSubMenu(null);
  const handleSubMenuClick = (view: string) => {
    setCurrentView(view);
    setVisibleSubMenu(null);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'BuscarDocente':
        return <BuscarDocentes />;
      case 'NotificarDocentes':
        return <NotificarDocentes />;
      case 'BuscarAlumno':
        return <BuscarAlumnos />;
      case 'NotificarAlumnos':
        return <NotificarAlumnos />;
      case 'BuscarMaterias':
        return <BuscarMaterias />;
      case 'ReportarProblema':
        return <ReportarProblema />;
      default:
        return (
          <>
            <h1>Bienvenido COORDINADOR</h1>
            <p>Aquí podrás gestionar asignaturas, horarios y reportes de asistencia.</p>
          </>
        );
    }
  };

  return (
    <AppLayout variant="dashboard">
      <DashboardContainer>
        <Sidebar>
          {/* Menú DOCENTES */}
          <MenuItem onMouseEnter={() => handleMouseEnter('docentes')} onMouseLeave={handleMouseLeave}>
            <span>
              <FaClipboardList style={{ marginRight: '0.2rem' }} />
              DOCENTES <FaChevronRight style={{ marginLeft: '-0.2rem' }} />
            </span>
            <SubMenu $isVisible={visibleSubMenu === 'docentes'}>
              <li onClick={() => handleSubMenuClick('BuscarDocente')}>
                <FaBook style={{ marginRight: '0.5rem' }} />
                BUSCAR
              </li>
              <li onClick={() => handleSubMenuClick('NotificarDocentes')}>
                <FaBell style={{ marginRight: '0.5rem' }} />
                NOTIFICAR
              </li>
            </SubMenu>
          </MenuItem>

          {/* Menú ALUMNOS */}
          <MenuItem onMouseEnter={() => handleMouseEnter('alumnos')} onMouseLeave={handleMouseLeave}>
            <span>
              <FaUsers style={{ marginRight: '0.2rem' }} />
              ALUMNOS <FaChevronRight style={{ marginLeft: '-0.2rem' }} />
            </span>
            <SubMenu $isVisible={visibleSubMenu === 'alumnos'}>
              <li onClick={() => handleSubMenuClick('BuscarAlumno')}>
                <FaBook style={{ marginRight: '0.5rem' }} />
                BUSCAR
              </li>
              <li onClick={() => handleSubMenuClick('NotificarAlumnos')}>
                <FaBell style={{ marginRight: '0.5rem' }} />
                NOTIFICAR
              </li>
            </SubMenu>
          </MenuItem>

          {/* Menú MATERIAS (Nuevo Submenú) */}
          <MenuItem onMouseEnter={() => handleMouseEnter('materias')} onMouseLeave={handleMouseLeave}>
            <span>
              <FaBook style={{ marginRight: '0.2rem' }} />
              MATERIAS <FaChevronRight style={{ marginLeft: '-0.2rem' }} />
            </span>
            <SubMenu $isVisible={visibleSubMenu === 'materias'}>
              <li onClick={() => handleSubMenuClick('BuscarMaterias')}>
                <FaBook style={{ marginRight: '0.5rem' }} />
                BUSCAR
              </li>
            </SubMenu>
          </MenuItem>

          {/* Menú MESAS */}
          <MenuItem onClick={() => handleSubMenuClick('EvaluacionesFinales')}>
            <span>
              <FaEdit style={{ marginRight: '0.2rem' }} />
              MESAS
            </span>
          </MenuItem>

          {/* Botón Reportar Problema */}
          <ReportButton onClick={() => handleSubMenuClick('ReportarProblema')}>
            <FaBug style={{ marginRight: '0.5rem' }} />
            Reportar Problema
          </ReportButton>
        </Sidebar>

        {/* Área de contenido dinámico */}
        <ContentArea>{renderContent()}</ContentArea>
      </DashboardContainer>
    </AppLayout>
  );
};

export default DashboardCoordinador;
