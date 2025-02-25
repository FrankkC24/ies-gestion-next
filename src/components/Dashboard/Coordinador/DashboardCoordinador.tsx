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
import EditarHorarios from '@/components/DashboardViews/Coordinador/EditarHorarios/EditarHorarios';
import NuevoHorario from '@/components/DashboardViews/Coordinador/NuevoHorario/NuevoHorario';

const DashboardCoordinador: React.FC = () => {
  const [visibleSubMenu, setVisibleSubMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<string>('Bienvenido');

  const handleMouseEnter = (menu: string) => {
    setVisibleSubMenu(menu);
    setActiveSubMenu(menu);
  };

  const handleMouseLeave = (menu: string) => {
    // Se usa un pequeño delay para evitar el cierre inmediato
    setTimeout(() => {
      if (activeSubMenu !== menu) {
        setVisibleSubMenu(null);
      }
    }, 200);
  };

  const handleSubMenuClick = (view: string) => {
    setCurrentView(view);
    setVisibleSubMenu(null);
    setActiveSubMenu(null);
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
      case 'EditarHorarios':
        return <EditarHorarios />;
      case 'NuevoHorario':
        return <NuevoHorario />;
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
          <MenuItem
            onMouseEnter={() => handleMouseEnter('docentes')}
            onMouseLeave={() => handleMouseLeave('docentes')}
          >
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
          <MenuItem
            onMouseEnter={() => handleMouseEnter('alumnos')}
            onMouseLeave={() => handleMouseLeave('alumnos')}
          >
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

          {/* Menú MATERIAS */}
          <MenuItem
            onMouseEnter={() => handleMouseEnter('materias')}
            onMouseLeave={() => handleMouseLeave('materias')}
          >
            <span>
              <FaBook style={{ marginRight: '0.2rem' }} />
              MATERIAS <FaChevronRight style={{ marginLeft: '-0.2rem' }} />
            </span>
            <SubMenu $isVisible={visibleSubMenu === 'materias'}>
              <li onClick={() => handleSubMenuClick('BuscarMaterias')}>
                <FaBook style={{ marginRight: '0.5rem' }} />
                BUSCAR
              </li>
              {/* Submenú HORARIOS */}
              <li
                onMouseEnter={() => handleMouseEnter('horarios')}
                onMouseLeave={() => handleMouseLeave('horarios')}
              >
                <span>
                  HORARIOS <FaChevronRight style={{ marginLeft: '-0.2rem' }} />
                </span>
                <SubMenu $isVisible={visibleSubMenu === 'horarios'}>
                  <li onClick={() => handleSubMenuClick('EditarHorarios')}>
                    <FaEdit style={{ marginRight: '0.5rem' }} />
                    EDITAR
                  </li>
                  <li onClick={() => handleSubMenuClick('NuevoHorario')}>
                    <FaBook style={{ marginRight: '0.5rem' }} />
                    NUEVO
                  </li>
                </SubMenu>
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
