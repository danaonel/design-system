import * as React from 'react';
import { CalendarHeader } from './CalendarHeader';
import { CalendarBody } from './CalendarBody';
import { CalendarFooter } from './CalendarFooter';

export interface CalendarProps {
  /** Current selected date */
  selectedDate?: Date;
  /** Callback when a date is selected */
  onDateSelect?: (date: Date) => void;
  /** Callback when "Today" button is clicked */
  onTodayClick?: () => void;
  /** Initial month to display (defaults to current month) */
  initialMonth?: Date;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Calendar - Main calendar component
 * Displays a full monthly calendar with navigation and date selection
 * Based on Figma design: Calendar/light
 */
export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ 
    selectedDate, 
    onDateSelect, 
    onTodayClick,
    initialMonth = new Date(),
    className = '',
    ...props 
  }, ref) => {
    const [currentMonth, setCurrentMonth] = React.useState(initialMonth);

    // Month names
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Get month and year
    const month = monthNames[currentMonth.getMonth()];
    const year = currentMonth.getFullYear();

    // Navigation handlers
    const handlePrevMonth = () => {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
      setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const handlePrevYear = () => {
      setCurrentMonth(new Date(currentMonth.getFullYear() - 1, currentMonth.getMonth(), 1));
    };

    const handleNextYear = () => {
      setCurrentMonth(new Date(currentMonth.getFullYear() + 1, currentMonth.getMonth(), 1));
    };

    const handleTodayClick = () => {
      const today = new Date();
      setCurrentMonth(today);
      if (onTodayClick) {
        onTodayClick();
      }
      if (onDateSelect) {
        onDateSelect(today);
      }
    };

    // Generate calendar weeks
    const generateCalendarWeeks = () => {
      const weeks: Array<Array<{
        date: number | string;
        isSelected?: boolean;
        isToday?: boolean;
        isOutsideMonth?: boolean;
      }>> = [];

      const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
      const lastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
      const startingDayOfWeek = firstDay.getDay();
      const daysInMonth = lastDay.getDate();

      let currentWeek: typeof weeks[0] = [];
      
      // Fill in previous month's days
      const prevMonthLastDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0).getDate();
      for (let i = startingDayOfWeek - 1; i >= 0; i--) {
        currentWeek.push({
          date: prevMonthLastDay - i,
          isOutsideMonth: true
        });
      }

      // Fill in current month's days
      const today = new Date();
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        const isToday = 
          date.getDate() === today.getDate() &&
          date.getMonth() === today.getMonth() &&
          date.getFullYear() === today.getFullYear();
        
        const isSelected = selectedDate
          ? date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getFullYear() === selectedDate.getFullYear()
          : false;

        currentWeek.push({
          date: day,
          isSelected,
          isToday,
          isOutsideMonth: false
        });

        if (currentWeek.length === 7) {
          weeks.push(currentWeek);
          currentWeek = [];
        }
      }

      // Fill in next month's days
      if (currentWeek.length > 0) {
        let nextMonthDay = 1;
        while (currentWeek.length < 7) {
          currentWeek.push({
            date: nextMonthDay++,
            isOutsideMonth: true
          });
        }
        weeks.push(currentWeek);
      }

      return weeks;
    };

    const handleDateClick = (date: number | string) => {
      if (typeof date === 'number' && onDateSelect) {
        const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), date);
        onDateSelect(newDate);
      }
    };

    const weeks = generateCalendarWeeks();

    return (
      <div
        ref={ref}
        className={`
          inline-flex flex-col
          bg-white
          rounded-lg
          shadow-[0px_8px_15px_rgba(0,0,0,0.25)]
          overflow-hidden
          ${className}
        `}
        {...props}
      >
        <CalendarHeader
          month={month}
          year={year}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
          onPrevYear={handlePrevYear}
          onNextYear={handleNextYear}
        />

        <CalendarBody
          weeks={weeks}
          onDateClick={handleDateClick}
        />

        <CalendarFooter onTodayClick={handleTodayClick} />
      </div>
    );
  }
);

Calendar.displayName = 'Calendar';
