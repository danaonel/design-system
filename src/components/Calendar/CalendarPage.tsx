import * as React from 'react';
import { Calendar } from './Calendar';
import { CalendarTrigger } from './CalendarTrigger';

/**
 * CalendarPage - Complete Calendar/light page implementation
 * This component demonstrates the full calendar functionality as shown in Figma
 * with both the trigger input and the calendar popup
 */
export const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date(2021, 0, 7)); // 7th January 2021
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(true);

  // Format date for display in trigger (e.g., "7th January 2021")
  const formatDate = (date: Date): string => {
    const day = date.getDate();
    const suffix = 
      day === 1 || day === 21 || day === 31 ? 'st' :
      day === 2 || day === 22 ? 'nd' :
      day === 3 || day === 23 ? 'rd' : 'th';
    
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    return `${day}${suffix} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  const handleTodayClick = () => {
    setSelectedDate(new Date());
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto space-y-4">
        <h1 className="text-2xl font-bold mb-6">Calendar Component</h1>
        
        {/* Calendar Trigger */}
        <div>
          <CalendarTrigger
            value={formatDate(selectedDate)}
            onTriggerClick={() => setIsCalendarOpen(!isCalendarOpen)}
          />
        </div>

        {/* Calendar Popup */}
        {isCalendarOpen && (
          <div className="inline-block">
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
              onTodayClick={handleTodayClick}
              initialMonth={selectedDate}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
