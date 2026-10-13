# Calendar Component

A fully-featured calendar component built from Figma design specifications with complete date selection, navigation, and accessibility features.

## Overview

The Calendar component suite provides a complete calendar implementation with:
- Monthly calendar view with date grid
- Navigation controls (previous/next month and year)
- Date selection with visual feedback
- "Today" button for quick navigation
- Optional trigger input for date picking
- Full keyboard accessibility
- TypeScript support

## Components

### Calendar (Main Component)

The primary calendar component displaying a monthly view.

```tsx
import { Calendar } from '@vftn/design-system';

<Calendar
  selectedDate={new Date()}
  onDateSelect={(date) => console.log('Selected:', date)}
  onTodayClick={() => console.log('Today clicked')}
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `selectedDate` | `Date` | `undefined` | Currently selected date |
| `onDateSelect` | `(date: Date) => void` | `undefined` | Callback when a date is selected |
| `onTodayClick` | `() => void` | `undefined` | Callback when "Today" button is clicked |
| `initialMonth` | `Date` | `new Date()` | Initial month to display |
| `className` | `string` | `''` | Additional CSS classes |

### CalendarTrigger

An input field that can trigger the calendar popup.

```tsx
import { CalendarTrigger } from '@vftn/design-system';

<CalendarTrigger
  value="7th January 2021"
  onTriggerClick={() => setIsOpen(true)}
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `'7th January 2021'` | Date string to display |
| `onTriggerClick` | `() => void` | `undefined` | Callback when trigger is clicked |
| `className` | `string` | `''` | Additional CSS classes |
| ...props | `InputHTMLAttributes` | - | All standard input attributes |

## Sub-components

The calendar is built from several composable sub-components:

- **CalendarHeader** - Month/year display with navigation arrows
- **CalendarBody** - Weekday labels and date grid
- **CalendarFooter** - Contains the "Today" button
- **CalendarWeekDay** - Individual weekday label (Sun, Mon, etc.)
- **CalendarWeekRow** - A row of 7 date cells
- **CalendarDate** - Individual date cell with selection states

These can be imported and used individually if you need custom calendar layouts.

## Complete Example

```tsx
import { useState } from 'react';
import { Calendar, CalendarTrigger } from '@vftn/design-system';

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const formatDate = (date: Date) => {
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

  return (
    <div>
      <CalendarTrigger
        value={formatDate(selectedDate)}
        onTriggerClick={() => setIsOpen(!isOpen)}
      />
      
      {isOpen && (
        <Calendar
          selectedDate={selectedDate}
          onDateSelect={(date) => {
            setSelectedDate(date);
            setIsOpen(false);
          }}
          initialMonth={selectedDate}
        />
      )}
    </div>
  );
}
```

## Design System Alignment

### Colors (from Figma)

- **Primary Blue**: `#0085FF` - Selected date text, borders
- **Light Blue**: `#CAE6FF` - Selected date background, Today button
- **Black**: `#000000` - Default text
- **White**: `#FFFFFF` - Backgrounds
- **Gray**: `#929292` - Navigation arrows
- **Border Gray**: `#E4E4E4` - Divider lines

### Typography (from Figma)

- **Font Family**: Roboto
- **Header**: 14px, Bold (700)
- **Dates**: 11px, Medium (500)
- **Button**: 14px, Bold (700)
- **Line Height**: 1.171875em

### Spacing & Layout

- **Border Radius**: 6px (dates), 11px (selected state), 12px (button)
- **Shadow**: `0px 8px 15px rgba(0, 0, 0, 0.25)`
- **Borders**: 1px solid

## Accessibility Features

✅ **Keyboard Navigation**
- All interactive elements are keyboard accessible
- Enter/Space keys trigger actions
- Focus indicators on all focusable elements

✅ **ARIA Labels**
- Proper `aria-label` attributes on buttons
- Semantic HTML structure
- Role attributes where needed

✅ **Screen Reader Support**
- Descriptive labels for navigation buttons
- Date selection announcements

## Customization

### Custom Styling

You can extend or override styles using the `className` prop:

```tsx
<Calendar className="shadow-xl border-2" />
```

### Custom Date Formatting

Implement your own date formatting logic:

```tsx
const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- React >= 18
- Tailwind CSS (for styling)

## License

MIT © Daniela Glint
