import * as React from 'react';
import { CalendarDate } from './CalendarDate';

export interface CalendarWeekRowProps {
  dates: Array<{
    date: number | string;
    isSelected?: boolean;
    isToday?: boolean;
    isOutsideMonth?: boolean;
  }>;
  onDateClick?: (date: number | string) => void;
  className?: string;
}

/**
 * CalendarWeekRow - A row containing 7 date cells
 * Represents one week in the calendar grid
 */
export const CalendarWeekRow = React.forwardRef<HTMLDivElement, CalendarWeekRowProps>(
  ({ dates, onDateClick, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex items-center justify-between bg-white w-full ${className}`}
        {...props}
      >
        {dates.map((dateInfo, index) => (
          <CalendarDate
            key={index}
            date={dateInfo.date}
            isSelected={dateInfo.isSelected}
            isToday={dateInfo.isToday}
            isOutsideMonth={dateInfo.isOutsideMonth}
            onClick={onDateClick}
          />
        ))}
      </div>
    );
  }
);

CalendarWeekRow.displayName = 'CalendarWeekRow';
