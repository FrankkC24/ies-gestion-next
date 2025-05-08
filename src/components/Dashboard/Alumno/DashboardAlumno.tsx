// 'use client';

// import { useState } from 'react';
// import {
//   FaEdit,
//   FaBug,
//   FaChevronRight,
//   FaClipboardList,
//   FaCalendarAlt,
//   FaSearch,
//   FaBookOpen,
//   FaClock,
//   FaGraduationCap,
// } from 'react-icons/fa';
// import {
//   DashboardContainer,
//   Sidebar,
//   MenuItem,
//   ContentArea,
//   ReportButton,
// } from './DashboardAlumno.styles';
// import AppLayout from '@/components/Layout/AppLayout';
// import { SubMenu } from '@/components/Dashboard/Shared/SubMenu';

// import MesasVer from '@/components/DashboardViews/Alumno/MesasVer/MesasVer';
// import AsistenciasVer from '@/components/DashboardViews/Alumno/AsistenciasVer/AsistenciasVer';
// import MateriasCalificaciones from '@/components/DashboardViews/Alumno/MateriasCalificaciones/MateriasCalificaciones';
// import MesasInscribirse from '@/components/DashboardViews/Alumno/MesasInscribirse/MesasInscribirse';
// import MateriasCorrelativas from '@/components/DashboardViews/Alumno/MateriasCorrelativas/MateriasCorrelativas';
// import MateriasHorarios from '@/components/DashboardViews/Alumno/MateriasHorarios/MateriasHorarios';
// import ReportarProblema from '@/components/ReportarProblema/ReportarProblema';

// const DashboardAlumno = () => {
//   const [visibleSubMenu, setVisibleSubMenu] = useState<string | null>(null);
//   const [currentView, setCurrentView] = useState<string>('Bienvenido');
//   const [activeMenu, setActiveMenu] = useState<string | null>(null); // 👈 Nuevo estado

//   const handleMouseEnter = (menu: string) => setVisibleSubMenu(menu);
//   const handleMouseLeave = () => setVisibleSubMenu(null);

//   const handleMenuClick = (menu: string) => {
//     setActiveMenu(menu); // Activar animación solo en el botón principal
//     setTimeout(() => setActiveMenu(null), 150); // Quitar animación después de 150ms
//   };

//   const handleSubMenuClick = (view: string) => {
//     setCurrentView(view);
//     setVisibleSubMenu(null);
//   };

//   const renderContent = () => {
//     switch (currentView) {
//       case 'MesasBuscar': return <MesasVer />;
//       case 'MesasInscripciones': return <MesasInscribirse />;
//       case 'MateriasCorrelativas': return <MateriasCorrelativas />;
//       case 'MateriasHorarios': return <MateriasHorarios />;
//       case 'MateriasCalificaciones': return <MateriasCalificaciones />;
//       case 'AsistenciasVer': return <AsistenciasVer />;
//       case 'ReportarProblema': return <ReportarProblema />;
//       default: return (
//         <>
//           <h1>Bienvenido USER</h1>
//           <p>Aquí encontrarás todo lo que necesites relacionado a tu carrera.</p>
//         </>
//       );
//     }
//   };

//   return (
//     <AppLayout variant="dashboard">
//       <DashboardContainer>
//         <Sidebar>
//           {/* Menú Mesas */}
//           <MenuItem
//             isActive={activeMenu === 'mesas'}
//             onMouseEnter={() => handleMouseEnter('mesas')}
//             onMouseLeave={handleMouseLeave}
//             onClick={() => handleMenuClick('mesas')}
//           >
//             <span>
//               <FaCalendarAlt style={{ marginRight: '0.5rem' }} />
//               MESAS <FaChevronRight style={{ marginLeft: '0.5rem' }} />
//             </span>
//             <SubMenu $isVisible={visibleSubMenu === 'mesas'}>
//               <li onClick={() => handleSubMenuClick('MesasBuscar')}>
//                 <FaSearch style={{ marginRight: '0.5rem' }} />
//                 VER FECHAS
//               </li>
//               <li onClick={() => handleSubMenuClick('MesasInscripciones')}>
//                 <FaEdit style={{ marginRight: '0.5rem' }} />
//                 INSCRIBIRSE
//               </li>
//             </SubMenu>
//           </MenuItem>

//           {/* Menú Materias */}
//           <MenuItem
//             isActive={activeMenu === 'materias'}
//             onMouseEnter={() => handleMouseEnter('materias')}
//             onMouseLeave={handleMouseLeave}
//             onClick={() => handleMenuClick('materias')}
//           >
//             <span>
//               <FaBookOpen style={{ marginRight: '0.5rem' }} />
//               MATERIAS <FaChevronRight style={{ marginLeft: '0.5rem' }} />
//             </span>
//             <SubMenu $isVisible={visibleSubMenu === 'materias'}>
//               <li onClick={() => handleSubMenuClick('MateriasCorrelativas')}>
//                 <FaGraduationCap style={{ marginRight: '0.5rem' }} />
//                 CORRELATIVAS
//               </li>
//               <li onClick={() => handleSubMenuClick('MateriasHorarios')}>
//                 <FaClock style={{ marginRight: '0.5rem' }} />
//                 HORARIOS
//               </li>
//               <li onClick={() => handleSubMenuClick('MateriasCalificaciones')}>
//                 <FaClipboardList style={{ marginRight: '0.5rem' }} />
//                 CALIFICACIONES
//               </li>
//             </SubMenu>
//           </MenuItem>

//           {/* Menú Asistencias */}
//           <MenuItem
//             isActive={activeMenu === 'asistencias'}
//             onMouseEnter={() => handleMouseEnter('asistencias')}
//             onMouseLeave={handleMouseLeave}
//             onClick={() => handleMenuClick('asistencias')}
//           >
//             <span>
//               <FaClipboardList style={{ marginRight: '0.5rem' }} />
//               ASISTENCIAS <FaChevronRight style={{ marginLeft: '0.5rem' }} />
//             </span>
//             <SubMenu $isVisible={visibleSubMenu === 'asistencias'}>
//               <li onClick={() => handleSubMenuClick('AsistenciasVer')}>
//                 <FaEdit style={{ marginRight: '0.5rem' }} />
//                 VER
//               </li>
//             </SubMenu>
//           </MenuItem>

//           {/* Reportar Problema */}
//           <ReportButton onClick={() => handleSubMenuClick('ReportarProblema')}>
//             <FaBug style={{ marginRight: '0.5rem' }} />
//             Reportar Problema
//           </ReportButton>
//         </Sidebar>

//         <ContentArea>{renderContent()}</ContentArea>
//       </DashboardContainer>
//     </AppLayout>
//   );
// };

// export default DashboardAlumno;

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  FaEdit,
  FaBug,
  FaChevronRight,
  FaClipboardList,
  FaCalendarAlt,
  FaSearch,
  FaBookOpen,
  FaClock,
  FaGraduationCap,
  FaUser,
} from 'react-icons/fa';
import {
  DashboardContainer,
  Sidebar,
  MenuItem,
  ContentArea,
  ReportButton,
  ProfileButton,
} from './DashboardAlumno.styles';
import AppLayout from '@/components/Layout/AppLayout';
import { SubMenu } from '@/components/Dashboard/Shared/SubMenu';

import MesasVer from '@/components/DashboardViews/Alumno/MesasVer/MesasVer';
import AsistenciasVer from '@/components/DashboardViews/Alumno/AsistenciasVer/AsistenciasVer';
import MateriasCalificaciones from '@/components/DashboardViews/Alumno/MateriasCalificaciones/MateriasCalificaciones';
import MesasInscribirse from '@/components/DashboardViews/Alumno/MesasInscribirse/MesasInscribirse';
import MateriasCorrelativas from '@/components/DashboardViews/Alumno/MateriasCorrelativas/MateriasCorrelativas';
import MateriasHorarios from '@/components/DashboardViews/Alumno/MateriasHorarios/MateriasHorarios';
import ReportarProblema from '@/components/ReportarProblema/ReportarProblema';

const DashboardAlumno = () => {
  const router = useRouter();
  const [visibleSubMenu, setVisibleSubMenu] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<string>('Bienvenido');
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => setVisibleSubMenu(menu);
  const handleMouseLeave = () => setVisibleSubMenu(null);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    setTimeout(() => setActiveMenu(null), 150);
  };

  const handleSubMenuClick = (view: string) => {
    setCurrentView(view);
    setVisibleSubMenu(null);
  };

  const handleProfileClick = () => {
    router.push('/dashboard/alumno/perfil');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'MesasBuscar': return <MesasVer />;
      case 'MesasInscripciones': return <MesasInscribirse />;
      case 'MateriasCorrelativas': return <MateriasCorrelativas />;
      case 'MateriasHorarios': return <MateriasHorarios />;
      case 'MateriasCalificaciones': return <MateriasCalificaciones />;
      case 'AsistenciasVer': return <AsistenciasVer />;
      case 'ReportarProblema': return <ReportarProblema />;
      default: return (
        <>
          <h1>Bienvenido USER</h1>
          <p>Aquí encontrarás todo lo que necesites relacionado a tu carrera.</p>
        </>
      );
    }
  };

  return (
    <AppLayout variant="dashboard">
      <DashboardContainer>
        <Sidebar>
          {/* Perfil de Usuario */}
          <ProfileButton
            isActive={activeMenu === 'perfil'}
            onClick={() => {
              handleMenuClick('perfil');
              handleProfileClick();
            }}
          >
            <FaUser style={{ marginRight: '0.5rem' }} />
            MI PERFIL
          </ProfileButton>

          {/* Menú Mesas */}
          <MenuItem
            isActive={activeMenu === 'mesas'}
            onMouseEnter={() => handleMouseEnter('mesas')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMenuClick('mesas')}
          >
            <span>
              <FaCalendarAlt style={{ marginRight: '0.5rem' }} />
              MESAS <FaChevronRight style={{ marginLeft: '0.5rem' }} />
            </span>
            <SubMenu $isVisible={visibleSubMenu === 'mesas'}>
              <li onClick={() => handleSubMenuClick('MesasBuscar')}>
                <FaSearch style={{ marginRight: '0.5rem' }} />
                VER FECHAS
              </li>
              <li onClick={() => handleSubMenuClick('MesasInscripciones')}>
                <FaEdit style={{ marginRight: '0.5rem' }} />
                INSCRIBIRSE
              </li>
            </SubMenu>
          </MenuItem>

          {/* Menú Materias */}
          <MenuItem
            isActive={activeMenu === 'materias'}
            onMouseEnter={() => handleMouseEnter('materias')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMenuClick('materias')}
          >
            <span>
              <FaBookOpen style={{ marginRight: '0.5rem' }} />
              MATERIAS <FaChevronRight style={{ marginLeft: '0.5rem' }} />
            </span>
            <SubMenu $isVisible={visibleSubMenu === 'materias'}>
              <li onClick={() => handleSubMenuClick('MateriasCorrelativas')}>
                <FaGraduationCap style={{ marginRight: '0.5rem' }} />
                CORRELATIVAS
              </li>
              <li onClick={() => handleSubMenuClick('MateriasHorarios')}>
                <FaClock style={{ marginRight: '0.5rem' }} />
                HORARIOS
              </li>
              <li onClick={() => handleSubMenuClick('MateriasCalificaciones')}>
                <FaClipboardList style={{ marginRight: '0.5rem' }} />
                CALIFICACIONES
              </li>
            </SubMenu>
          </MenuItem>

          {/* Menú Asistencias */}
          <MenuItem
            isActive={activeMenu === 'asistencias'}
            onMouseEnter={() => handleMouseEnter('asistencias')}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleMenuClick('asistencias')}
          >
            <span>
              <FaClipboardList style={{ marginRight: '0.5rem' }} />
              ASISTENCIAS <FaChevronRight style={{ marginLeft: '0.5rem' }} />
            </span>
            <SubMenu $isVisible={visibleSubMenu === 'asistencias'}>
              <li onClick={() => handleSubMenuClick('AsistenciasVer')}>
                <FaEdit style={{ marginRight: '0.5rem' }} />
                VER
              </li>
            </SubMenu>
          </MenuItem>

          {/* Reportar Problema */}
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

export default DashboardAlumno;