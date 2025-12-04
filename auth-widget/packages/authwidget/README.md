# @pigeon-ui/auth-widget

A customizable, themeable authentication widget for React applications.

## Installation

```bash
npm install @pigeon-ui/auth-widget
```

## Peer Dependencies

This package requires the following peer dependencies:

```bash
npm install react react-dom
```

## Usage

```tsx
import { AuthWidget, useAuthStatus } from '@pigeon-ui/auth-widget';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Your login logic
    return {
      status: 'success',
      message: 'Login successful!',
      durationMs: 3000
    };
  };

  const handleSignup = async () => {
    // Your signup logic
    return {
      status: 'success',
      message: 'Account created!',
      durationMs: 3000
    };
  };

  return (
    <AuthWidget
      theme="modern"
      behavior={{
        handleEmail: (e) => setEmail(e.target.value),
        handleUsername: (e) => setUsername(e.target.value),
        handlePassword: (e) => setPassword(e.target.value),
        onLogin: handleLogin,
        onSignup: handleSignup,
      }}
      state={{
        email,
        username,
        password,
      }}
    />
  );
}
```

## Features

- Three built-in themes: modern, light, dark
- Fully customizable styles via `styleOverrides` prop
- TypeScript support with full type definitions
- Lightweight with tree-shaking support
- Zero configuration required
- Built with styled-components and React 19

## API

### AuthWidget Props

```typescript
interface AuthWidgetProps {
  behavior: AuthWidgetBehaviors;
  state: AuthWidgetState;
  styleOverrides?: StyleOverrides;
  theme?: "modern" | "light" | "dark";
  title?: string;
  subtitle?: string;
}
```

### Behavior Callbacks

Your `onLogin` and `onSignup` functions should return an `AuthStatus` object:

```typescript
{
  status: 'success' | 'error',
  message: string,
  durationMs: number
}
```

## License

MIT
