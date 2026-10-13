# Tailwind CSS Configuration for Calendar Component

## Required Tailwind Configuration

To use the Calendar component with exact Figma design specifications, you need to extend your Tailwind configuration.

### 1. Add Custom Font Family

The Calendar component uses **Roboto** font family as specified in Figma.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
}
```

### 2. Include Roboto Font

Add Roboto font to your project. You can use Google Fonts:

**Option A: Via HTML (in your `index.html`)**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
```

**Option B: Via CSS (in your main CSS file)**
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
```

**Option A: Via npm (recommended for production)**
```bash
npm install @fontsource/roboto
```

Then in your main entry file:
```tsx
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

### 3. Custom Colors (Optional)

While the component uses arbitrary Tailwind values for exact color matching, you can add these to your theme for reusability:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'calendar-blue': '#0085FF',
        'calendar-blue-light': '#CAE6FF',
        'calendar-gray': '#929292',
        'calendar-border': '#E4E4E4',
      },
    },
  },
}
```

### 4. Custom Box Shadows (Optional)

For the calendar shadow:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'calendar': '0px 8px 15px rgba(0, 0, 0, 0.25)',
      },
    },
  },
}
```

## Complete Tailwind Config Example

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'calendar-blue': '#0085FF',
        'calendar-blue-light': '#CAE6FF',
        'calendar-gray': '#929292',
        'calendar-border': '#E4E4E4',
      },
      boxShadow: {
        'calendar': '0px 8px 15px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
```

## Styles Used in Calendar Components

The following Tailwind classes and arbitrary values are used:

### Typography
- `font-roboto` - Roboto font family
- `text-[11px]` - 11px font size (dates, weekdays)
- `text-[14px]` - 14px font size (header, button)
- `font-medium` - 500 weight
- `font-bold` - 700 weight
- `leading-[1.171875em]` - Line height from Figma

### Colors
- `bg-[#FFFFFF]` - White backgrounds
- `bg-[#CAE6FF]` - Light blue (selected state, button)
- `text-[#000000]` - Black text
- `text-[#0085FF]` - Blue text (selected)
- `border-[#0085FF]` - Blue border (trigger)
- `bg-[#E4E4E4]` - Border gray (dividers)

### Border Radius
- `rounded-[6px]` - Date cells inner
- `rounded-[11px]` - Date cells outer
- `rounded-[12px]` - Today button

### Shadows
- `shadow-[0px_8px_15px_rgba(0,0,0,0.25)]` - Calendar container shadow

### Borders
- `border` with `border-[color]` - 1px borders
- `h-[1px]` - Divider lines

## Note on Arbitrary Values

The component uses Tailwind's arbitrary value syntax (e.g., `text-[11px]`, `bg-[#0085FF]`) to match exact Figma specifications. This ensures pixel-perfect implementation without requiring extensive Tailwind configuration.

If you prefer using standard Tailwind utilities, you can extend the configuration as shown above and update the component class names accordingly.
