declare module 'react-datepicker' {
  import React from 'react';
  
  interface ReactDatePickerProps {
    selected?: Date | null;
    onChange: (date: Date | null, event?: React.SyntheticEvent<any> | undefined) => void;
    dateFormat?: string;
    placeholderText?: string;
    className?: string;
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    showTimeSelect?: boolean;
    timeFormat?: string;
    timeIntervals?: number;
    locale?: string;
    renderCustomHeader?: (params: {
      date: Date;
      decreaseMonth: () => void;
      increaseMonth: () => void;
      prevMonthButtonDisabled?: boolean;
      nextMonthButtonDisabled?: boolean;
    }) => React.ReactNode;
    formatWeekDay?: (nameOfDay: string) => string;
    popperPlacement?: string;
    popperModifiers?: any[];
    [key: string]: any;
  }
  
  const DatePicker: React.FC<ReactDatePickerProps>;
  export default DatePicker;
  
  // Agregar la función registerLocale
  export function registerLocale(localeName: string, localeData: any): void;
}