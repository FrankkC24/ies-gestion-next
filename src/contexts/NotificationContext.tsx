'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';

interface Notification {
  id: string;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

interface NotificationContextProps {
  showNotification: (message: string, type?: 'success' | 'error' | 'warning' | 'info', duration?: number) => void;
  showSuccess: (message: string, duration?: number) => void;
  showError: (message: string, duration?: number) => void;
  showWarning: (message: string, duration?: number) => void;
  showInfo: (message: string, duration?: number) => void;
  hideNotification: (id: string) => void;
  isDisabled: boolean;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<(Notification & { isFading: boolean })[]>([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const showNotification = (
    message: string, 
    type: 'success' | 'error' | 'warning' | 'info' = 'info', 
    duration: number = 5000
  ) => {
    const id = Date.now().toString();
    const newNotification = { id, message, type, duration, isFading: false };
    
    setNotifications(prev => [...prev, newNotification]);
    setIsDisabled(true);

    // Auto-hide después del duration
    setTimeout(() => {
      setNotifications(prev => 
        prev.map(notif => 
          notif.id === id ? { ...notif, isFading: true } : notif
        )
      );
      
      // Remover después de la animación
      setTimeout(() => {
        setNotifications(prev => prev.filter(notif => notif.id !== id));
        setIsDisabled(false);
      }, 500);
    }, duration);
  };

  const showSuccess = (message: string, duration?: number) => 
    showNotification(message, 'success', duration);

  const showError = (message: string, duration?: number) => 
    showNotification(message, 'error', duration);

  const showWarning = (message: string, duration?: number) => 
    showNotification(message, 'warning', duration);

  const showInfo = (message: string, duration?: number) => 
    showNotification(message, 'info', duration);

  const hideNotification = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, isFading: true } : notif
      )
    );
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(notif => notif.id !== id));
      if (notifications.length <= 1) {
        setIsDisabled(false);
      }
    }, 500);
  };

  return (
    <NotificationContext.Provider value={{
      showNotification,
      showSuccess,
      showError,
      showWarning,
      showInfo,
      hideNotification,
      isDisabled
    }}>
      {children}
      <NotificationContainer>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            $type={notification.type!}
            $isFading={notification.isFading}
          >
            <span>{notification.message}</span>
            <CloseButton onClick={() => hideNotification(notification.id)}>
              &times;
            </CloseButton>
            <ProgressBar $duration={notification.duration!} />
          </NotificationItem>
        ))}
      </NotificationContainer>
    </NotificationContext.Provider>
  );
};

// Estilos para las notificaciones
const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
`;

const NotificationContainer = styled.div`
  position: fixed;
  top: 20%;
  right: 2%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
`;

const NotificationItem = styled.div<{ 
  $type: 'success' | 'error' | 'warning' | 'info'; 
  $isFading: boolean 
}>`
  background-color: white;
  color: black;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  border: 2px solid ${({ $type }) => {
    switch ($type) {
      case 'success': return '#2e7d32';
      case 'error': return '#d32f2f';
      case 'warning': return '#ff9800';
      default: return '#1976d2';
    }
  }};
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  animation: ${({ $isFading }) => ($isFading ? fadeOut : slideIn)} 0.5s ease;
  white-space: pre-line;
  position: relative;
`;

const ProgressBar = styled.div<{ $duration: number }>`
  width: 100%;
  height: 5px;
  background-color: #fff;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  margin-top: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: currentColor;
    animation: progressBar ${({ $duration }) => $duration}ms linear;
  }

  @keyframes progressBar {
    0% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: black;
  font-size: 1.2rem;
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;

  &:hover {
    color: #860000;
  }
`;