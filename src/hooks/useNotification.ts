export { useNotification as useNotifications } from '@/contexts/NotificationContext';

// También puedes crear funciones helper si quieres:
import { useNotification } from '@/contexts/NotificationContext';

export const useToast = () => {
  const { showSuccess, showError, showWarning, showInfo } = useNotification();
  
  return {
    success: showSuccess,
    error: showError,
    warning: showWarning,
    info: showInfo,
  };
};