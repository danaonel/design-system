# @vftn/design-system

> Design System for Voice For The Needy

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/@vftn/design-system.svg)](https://www.npmjs.com/package/@vftn/design-system)
[![Storybook](https://img.shields.io/badge/Storybook-Live%20Demo-ff4785?logo=storybook&logoColor=white)](https://danaonel.github.io/design-system/)

A modern, lightweight React component library built with TypeScript, providing accessible and customizable UI components for Voice For The Needy projects.

## 🎭 Live Demo

**[View Interactive Component Documentation →](https://danaonel.github.io/design-system/)**

Explore all components with live examples, interactive props, and usage documentation in our Storybook.

## 📦 Installation

This package **requires pnpm** as the package manager.

```bash
pnpm add @vftn/design-system
```

### Prerequisites

- Node.js >= 20
- pnpm >= 10.33.0
- React >= 18
- React DOM >= 18

## 🚀 Quick Start

### 1. Install the package

```bash
pnpm add @vftn/design-system
```

### 2. Import styles

Import the CSS file in your application entry point (e.g., `main.tsx`, `App.tsx`, or `index.tsx`):

```tsx
import '@vftn/design-system/styles.css';
```

### 3. Import and use components

```tsx
import { Button, Input } from '@vftn/design-system';

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
      
      <Input 
        variant="primary" 
        placeholder="Enter your name" 
        type="text"
      />
    </div>
  );
}

export default App;
```

## 📚 Components

### Button

A flexible button component that supports different variants and all standard HTML button attributes.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual style variant of the button |
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `React.ReactNode` | - | Button content |
| `...props` | `React.ButtonHTMLAttributes` | - | All standard HTML button attributes |

#### Usage Examples

**Primary Button (default)**
```tsx
import { Button } from '@vftn/design-system';

<Button onClick={() => console.log('Primary clicked')}>
  Primary Button
</Button>
```

**Secondary Button**
```tsx
<Button variant="secondary" onClick={() => console.log('Secondary clicked')}>
  Secondary Button
</Button>
```

**With custom className**
```tsx
<Button className="my-custom-class" variant="primary">
  Custom Styled Button
</Button>
```

**Disabled Button**
```tsx
<Button disabled variant="primary">
  Disabled Button
</Button>
```

**Button with type attribute**
```tsx
<Button type="submit" variant="primary">
  Submit Form
</Button>
```

#### TypeScript

The Button component is fully typed and provides full IntelliSense support:

```tsx
import { Button, ButtonProps } from '@vftn/design-system';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

---

### Input

A versatile input component that supports different variants and all standard HTML input attributes.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual style variant of the input |
| `className` | `string` | `undefined` | Additional CSS classes |
| `...props` | `React.InputHTMLAttributes` | - | All standard HTML input attributes |

#### Usage Examples

**Basic Input**
```tsx
import { Input } from '@vftn/design-system';

<Input 
  type="text" 
  placeholder="Enter your name" 
/>
```

**Secondary Input**
```tsx
<Input 
  variant="secondary" 
  type="email" 
  placeholder="Email address" 
/>
```

**With onChange handler**
```tsx
const [value, setValue] = useState('');

<Input 
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Controlled input"
/>
```

**Different input types**
```tsx
{/* Email input */}
<Input type="email" placeholder="Email" />

{/* Password input */}
<Input type="password" placeholder="Password" />

{/* Number input */}
<Input type="number" placeholder="Age" min={0} max={120} />

{/* Date input */}
<Input type="date" />
```

**Disabled Input**
```tsx
<Input disabled placeholder="Disabled input" />
```

**Required Input**
```tsx
<Input required placeholder="Required field" />
```

#### TypeScript

The Input component is fully typed and provides full IntelliSense support:

```tsx
import { Input, InputProps } from '@vftn/design-system';

const MyInput: React.FC<InputProps> = (props) => {
  return <Input {...props} />;
};
```

---

## 🎨 Styling

All components use CSS class naming with the `ds-` prefix to avoid conflicts:

- **Button classes**: `ds-button`, `ds-button--primary`, `ds-button--secondary`
- **Input classes**: `ds-input`, `ds-input--primary`, `ds-input--secondary`

You can override styles by:

1. **Using the className prop**:
```tsx
<Button className="my-custom-button">Custom Button</Button>
```

2. **Targeting the component classes in your CSS**:
```css
.ds-button--primary {
  /* Your custom styles */
}
```

## 🔧 Advanced Usage

### Form Integration

```tsx
import { Button, Input } from '@vftn/design-system';
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      
      <Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      
      <Button type="submit" variant="primary">
        Log In
      </Button>
      
      <Button type="button" variant="secondary" onClick={() => console.log('Reset')}>
        Reset
      </Button>
    </form>
  );
}
```

### Using Refs

Both components support React refs via `forwardRef`:

```tsx
import { useRef } from 'react';
import { Button, Input } from '@vftn/design-system';

function MyComponent() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <Input ref={inputRef} placeholder="Focus me" />
      <Button ref={buttonRef} onClick={focusInput}>
        Focus Input
      </Button>
    </>
  );
}
```

## 🏗️ Development

### Storybook

This package includes Storybook for component development and documentation.

**Live Demo:** [https://danaonel.github.io/design-system/](https://danaonel.github.io/design-system/)

Run Storybook locally:

```bash
pnpm storybook
```

Storybook will start at `http://localhost:6006`

### Building

```bash
pnpm build
```

This command will:
- Build TypeScript files using `tsup`
- Generate type definitions
- Build and minify CSS using Tailwind CLI

### Package Validation

```bash
pnpm lint:package
```

Validates the package structure and exports using `publint` and `@arethetypeswrong/cli`.

## 📖 API Reference

### Exported Components

```typescript
import { Button, Input } from '@vftn/design-system';
```

### Exported Types

```typescript
import type { ButtonProps, InputProps } from '@vftn/design-system';
```

### CSS Import

```typescript
import '@vftn/design-system/styles.css';
```

## 🤝 Contributing

Contributions are welcome! Please check out our [GitHub repository](https://github.com/danaonel/design-system) for more information.

## 📄 License

MIT © Daniela Glint

## 🔗 Links

- [📚 Live Storybook Demo](https://danaonel.github.io/design-system/)
- [GitHub Repository](https://github.com/danaonel/design-system)
- [npm Package](https://www.npmjs.com/package/@vftn/design-system)
- [Report Issues](https://github.com/danaonel/design-system/issues)

## 🆘 Support

If you encounter any issues or have questions:

1. Check the documentation above
2. Review existing [GitHub Issues](https://github.com/danaonel/design-system/issues)
3. Create a new issue with a detailed description

---

**Built with ❤️ for Voice For The Needy**