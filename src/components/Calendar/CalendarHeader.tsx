import * as React from 'react';

export interface CalendarHeaderProps {
  month: string;
  year: number;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
  onPrevYear?: () => void;
  onNextYear?: () => void;
  className?: string;
}

/**
 * CalendarHeader - Month/year display with navigation arrows
 * Includes 4 navigation buttons: prev year, prev month, next month, next year
 */
export const CalendarHeader = React.forwardRef<HTMLDivElement, CalendarHeaderProps>(
  ({ month, year, onPrevMonth, onNextMonth, onPrevYear, onNextYear, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative flex flex-col bg-white ${className}`}
        {...props}
      >
        <div className="flex items-center justify-center bg-white p-4">
          {/* Previous Year Button */}
          <button
            onClick={onPrevYear}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            aria-label="Previous year"
            type="button"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M10 3L6 7L10 11" stroke="#929292" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 3L2 7L6 11" stroke="#929292" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Previous Month Button */}
          <button
            onClick={onPrevMonth}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            aria-label="Previous month"
            type="button"
          >
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
              <path d="M8 3L4 7L8 11" stroke="#929292" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Month and Year Display */}
          <div className="flex-1 flex items-center justify-center">
            <span className="text-[14px] font-bold leading-[1.171875em] text-center text-black font-roboto">
              {month} {year}
            </span>
          </div>

          {/* Next Month Button */}
          <button
            onClick={onNextMonth}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            aria-label="Next month"
            type="button"
          >
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
              <path d="M2 3L6 7L2 11" stroke="#929292" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Next Year Button */}
          <button
            onClick={onNextYear}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            aria-label="Next year"
            type="button"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M4 3L8 7L4 11" stroke="#929292" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 3L12 7L8 11" stroke="#929292" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-[#E4E4E4]"></div>
      </div>
    );
  }
);

CalendarHeader.displayName = 'CalendarHeader';
