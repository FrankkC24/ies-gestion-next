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
    [key: string]: any;
  }

  const DatePicker: React.FC<ReactDatePickerProps>;
  export default DatePicker;
}