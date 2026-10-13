import * as React from 'react';

export interface CalendarWeekDayProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * CalendarWeekDay - Individual weekday label component
 * Displays day names (Sun, Mon, Tue, etc.)
 */
export const CalendarWeekDay = React.forwardRef<HTMLDivElement, CalendarWeekDayProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex items-center justify-center bg-white rounded-[6px] ${className}`}
        {...props}
      >
        <span className="text-[11px] font-medium leading-[1.171875em] text-center text-black font-roboto">
          {children}
        </span>
      </div>
    );
  }
);

CalendarWeekDay.displayName = 'CalendarWeekDay';
