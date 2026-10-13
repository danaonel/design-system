import * as React from 'react';

export interface CalendarDateProps {
  date?: number | string;
  isSelected?: boolean;
  isToday?: boolean;
  isOutsideMonth?: boolean;
  onClick?: (date: number | string) => void;
  className?: string;
}

/**
 * CalendarDate - Individual date cell component
 * Supports selected state (blue background) and regular state
 */
export const CalendarDate = React.forwardRef<HTMLDivElement, CalendarDateProps>(
  ({ date, isSelected = false, isToday = false, isOutsideMonth = false, onClick, className = '', ...props }, ref) => {
    const handleClick = () => {
      if (onClick && date) {
        onClick(date);
      }
    };

    return (
      <div
        ref={ref}
        className={`flex items-center justify-center bg-white ${className}`}
        {...props}
      >
        <div
          className={`
            flex items-center justify-center
            rounded-[11px] cursor-pointer
            transition-colors duration-200
            hover:bg-gray-100
            ${
              isSelected
                ? 'bg-[#CAE6FF]'
                : 'bg-white'
            }
          `}
          onClick={handleClick}
          role="button"
          tabIndex={0}
          aria-label={`Select date ${date}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleClick();
            }
          }}
        >
          <div className="flex items-center justify-center bg-transparent rounded-[6px] w-full h-full">
            <span
              className={`
                text-[11px] font-medium leading-[1.171875em] text-center font-roboto
                ${
                  isSelected
                    ? 'text-[#0085FF]'
                    : 'text-black'
                }
                ${
                  isOutsideMonth
                    ? 'opacity-40'
                    : ''
                }
              `}
            >
              {date}
            </span>
          </div>
        </div>
      </div>
    );
  }
);

CalendarDate.displayName = 'CalendarDate';
