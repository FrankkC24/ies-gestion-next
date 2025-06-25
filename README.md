# 🎓 IES Management System

A comprehensive management system for higher education institutions built with Next.js and TypeScript. Features role-based dashboards for students, teachers, and coordinators with modern UI components and PDF generation capabilities.

## ✨ Key Features

- **Role-based Authentication** - Separate dashboards for Students, Teachers, and Coordinators
- **Academic Management** - Grade tracking, attendance, schedules, and exam registration
- **PDF Generation** - Automated reports and academic documents
- **Responsive Design** - Optimized for desktop and mobile devices
- **Real-time Notifications** - Toast notifications for user interactions
- **Modern UI** - Styled with Tailwind CSS and Styled Components

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Styled Components
- **UI/UX**: Framer Motion animations, React Icons
- **Forms**: React Hook Form with Zod validation
- **PDF Generation**: React PDF Renderer
- **Date Handling**: date-fns, React Datepicker

## 📸 Screenshots

### Login
![Login](./screenshots/login.png)

### Student Dashboard
![Student Dashboard](./screenshots/student.png)

### Teacher Dashboard  
![Teacher Dashboard](./screenshots/teacher.png)

### Coordinator Dashboard
![Coordinator Dashboard](./screenshots/coordinator.png)

## 📁 Project Structure

```
src/
├── app/                    
│   ├── dashboard/         # Role-based dashboard routes
│   │   ├── alumno/       
│   │   ├── coordinador/  
│   │   └── docente/      
│   └── login/            # Authentication
├── components/           # Reusable React components
│   ├── Dashboard/        
│   ├── DashboardViews/   
│   └── Layout/           
├── contexts/             
├── hooks/               
├── interfaces/          
├── styles/              
├── types/               
└── utils/               
```

## 🎯 User Roles & Features

### 👨‍🎓 Students (Alumno)
- View grades and attendance
- Check class schedules
- Register for exams
- View subject correlatives

### 👩‍🏫 Teachers (Docente)
- Manage attendance
- Grade assignments and exams
- View teaching schedules
- Access student lists

### 👨‍💼 Coordinators (Coordinador)
- Search students, teachers, and subjects
- Manage schedules and exam sessions
- Generate academic reports
- Send notifications

## 🔧 Development Notes

- Built with Next.js 15 App Router
- Uses Turbopack for faster development builds
- Styled Components with SSR support via babel plugin
- PDF generation for academic documents and reports
- Responsive design with mobile-first approach

## 📄 License

This project is licensed under the MIT License.

⭐ If you found this project helpful, please give it a star!