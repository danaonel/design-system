import * as React from 'react';
import { CalendarWeekDay } from './CalendarWeekDay';
import { CalendarWeekRow } from './CalendarWeekRow';

export interface CalendarBodyProps {
  weeks: Array<
    Array<{
      date: number | string;
      isSelected?: boolean;
      isToday?: boolean;
      isOutsideMonth?: boolean;
    }>
  >;
  onDateClick?: (date: number | string) => void;
  className?: string;
}

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * CalendarBody - Contains weekday labels and date grid
 * Displays the full calendar grid with week rows
 */
export const CalendarBody = React.forwardRef<HTMLDivElement, CalendarBodyProps>(
  ({ weeks, onDateClick, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col bg-white p-4 ${className}`}
        {...props}
      >
        {/* Weekday Headers */}
        <div className="flex items-center justify-between mb-3 w-full">
          {WEEK_DAYS.map((day) => (
            <CalendarWeekDay key={day}>{day}</CalendarWeekDay>
          ))}
        </div>

        {/* Date Grid - Week Rows */}
        <div className="flex flex-col gap-2">
          {weeks.map((week, weekIndex) => (
            <CalendarWeekRow
              key={weekIndex}
              dates={week}
              onDateClick={onDateClick}
            />
          ))}
        </div>
      </div>
    );
  }
);

CalendarBody.displayName = 'CalendarBody';
