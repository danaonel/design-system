import * as React from 'react';

export interface CalendarTriggerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The selected date to display */
  value?: string;
  /** Callback when trigger is clicked */
  onTriggerClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * CalendarTrigger - Input field that triggers the calendar
 * Displays selected date and calendar icon
 */
export const CalendarTrigger = React.forwardRef<HTMLInputElement, CalendarTriggerProps>(
  ({ value = '7th January 2021', onTriggerClick, className = '', ...props }, ref) => {
    return (
      <div
        className={`
          relative inline-flex items-center
          bg-white
          border border-[#0085FF]
          rounded
          px-4 py-2
          cursor-pointer
          hover:bg-gray-50
          transition-colors duration-200
          ${className}
        `}
        onClick={onTriggerClick}
        role="button"
        tabIndex={0}
        aria-label="Open calendar"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onTriggerClick?.();
          }
        }}
      >
        <input
          ref={ref}
          type="text"
          value={value}
          readOnly
          className="
            bg-transparent
            border-none
            outline-none
            text-[11px] font-medium leading-[1.171875em]
            text-black font-roboto
            cursor-pointer
            pr-2
          "
          {...props}
        />
        
        {/* Calendar Icon */}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
          <path 
            d="M2 3L6 7L2 11" 
            stroke="#929292" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
);

CalendarTrigger.displayName = 'CalendarTrigger';
