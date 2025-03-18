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
import EditarMesas from '@/components/DashboardViews/Coordinador/EditarMesas/EditarMesas';
import ImprimirMesas from '@/components/DashboardViews/Coordinador/ImprimirMesas/ImprimirMesas';
import InscriptosMesas from '@/components/DashboardViews/Coordinador/InscriptosMesas/InscriptosMesas';
import CalificacionesFinales from '@/components/DashboardViews/Coordinador/CalificacionesFinales/CalificacionesFinales';


const DashboardCoordinador: React.FC = () => {
  const [visibleMenus, setVisibleMenus] = useState<string[]>([]);
  const [currentView, setCurrentView] = useState<string>('Bienvenido');

  const handleMouseEnter = (menu: string) => {
    setVisibleMenus((prev) => [...prev.filter((m) => m !== menu), menu]);
  };

  const handleMouseLeave = (menu: string) => {
    setTimeout(() => {
      setVisibleMenus((prev) => prev.filter((m) => m !== menu));
    }, 50);
  };

  const handleSubMenuClick = (view: string) => {
    setCurrentView(view);
    setVisibleMenus([]);
  };

  const isVisible = (menu: string) => visibleMenus.includes(menu);

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
      case 'EditarMesas':
        return <EditarMesas />;
      case 'ImprimirMesas':
        return <ImprimirMesas />;
      case 'InscriptosMesas':
        return <InscriptosMesas />;
      case 'CalificacionesFinales':
        return <CalificacionesFinales />;
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
          {/* DOCENTES */}
          <MenuItem
            onMouseEnter={() => handleMouseEnter('docentes')}
            onMouseLeave={() => handleMouseLeave('docentes')}
          >
            <span>
              <FaClipboardList style={{ marginRight: '0.2rem' }} />
              DOCENTES <FaChevronRight style={{ marginLeft: '-0.2rem' }} />
            </span>
            <SubMenu $isVisible={isVisible('docentes')}>
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

          {/* ALUMNOS */}
          <MenuItem
            onMouseEnter={() => handleMouseEnter('alumnos')}
            onMouseLeave={() => handleMouseLeave('alumnos')}
          >
            <span>
              <FaUsers style={{ marginRight: '0.2rem' }} />
              ALUMNOS <FaChevronRight style={{ marginLeft: '-0.2rem' }} />
            </span>
            <SubMenu $isVisible={isVisible('alumnos')}>
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

          {/* MATERIAS */}
          <MenuItem
            onMouseEnter={() => handleMouseEnter('materias')}
            onMouseLeave={() => handleMouseLeave('materias')}
          >
            <span>
              <FaBook style={{ marginRight: '0.2rem' }} />
              MATERIAS <FaChevronRight style={{ marginLeft: '-0.2rem' }} />
            </span>
            <SubMenu $isVisible={isVisible('materias')}>
              <li onClick={() => handleSubMenuClick('BuscarMaterias')}>
                <FaBook style={{ marginRight: '0.5rem' }} />
                BUSCAR
              </li>
              <li
                onMouseEnter={() => handleMouseEnter('horarios')}
                onMouseLeave={() => handleMouseLeave('horarios')}
              >
                <span>
                  HORARIOS <FaChevronRight style={{ marginLeft: '-0.2rem' }} />
                </span>
                <SubMenu $isVisible={isVisible('horarios')}>
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
          
          {/* MESAS */}
          <MenuItem
            onMouseEnter={() => handleMouseEnter('mesas')}
            onMouseLeave={() => handleMouseLeave('mesas')}
          >
            <span>
              <FaEdit style={{ marginRight: '0.2rem' }} />
              MESAS <FaChevronRight style={{ marginLeft: '-0.2rem' }} />
            </span>
            <SubMenu $isVisible={isVisible('mesas')}>
              <li onClick={() => handleSubMenuClick('EditarMesas')}>
                <FaEdit style={{ marginRight: '0.5rem' }} />
                EDITAR
              </li>
              <li onClick={() => handleSubMenuClick('ImprimirMesas')}>
                <FaBook style={{ marginRight: '0.5rem' }} />
                IMPRIMIR
              </li>
              <li onClick={() => handleSubMenuClick('InscriptosMesas')}>
                <FaUsers style={{ marginRight: '0.5rem' }} />
                INSCRIPTOS
              </li>
              <li onClick={() => handleSubMenuClick('CalificacionesFinales')}>
                <FaCalendarAlt style={{ marginRight: '0.5rem' }} />
                CALIFICACIONES FINALES
              </li>
            </SubMenu>
          </MenuItem>

          {/* Reportar */}
          <ReportButton onClick={() => handleSubMenuClick('ReportarProblema')}>
            <FaBug style={{ marginRight: '0.5rem' }} />
            Reportar Problema
          </ReportButton>
        </Sidebar>

        {/* Área contenido */}
        <ContentArea>{renderContent()}</ContentArea>
      </DashboardContainer>
    </AppLayout>
  );
};

export default DashboardCoordinador;
