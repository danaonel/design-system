import * as React from 'react';

export interface CalendarFooterProps {
  onTodayClick?: () => void;
  className?: string;
}

/**
 * CalendarFooter - Contains the "Today" button
 * Includes top divider line matching Figma design
 */
export const CalendarFooter = React.forwardRef<HTMLDivElement, CalendarFooterProps>(
  ({ onTodayClick, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col bg-white ${className}`}
        {...props}
      >
        {/* Divider Line */}
        <div className="w-full h-[1px] bg-[#E4E4E4]"></div>

        {/* Today Button Container */}
        <div className="flex items-center justify-center p-4">
          <button
            onClick={onTodayClick}
            className="
              flex items-center justify-center
              bg-[#CAE6FF] hover:bg-[#B5D9FF]
              rounded-[12px]
              px-6 py-2
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-[#0085FF] focus:ring-offset-2
            "
            type="button"
            aria-label="Go to today"
          >
            <span className="text-[14px] font-bold leading-[1.171875em] text-center text-[#0085FF] font-roboto">
              Today
            </span>
          </button>
        </div>
      </div>
    );
  }
);

CalendarFooter.displayName = 'CalendarFooter';
