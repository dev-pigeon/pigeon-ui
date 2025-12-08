# pigeon-ui

A customizable, themeable authentication widget for modern React applications.

## Installation

```bash
npm install pigeon-ui
```

## Peer Dependencies

This package requires the following peer dependencies:

```bash
npm install react react-dom
```

## Features

- Three built-in themes: modern, light, dark
- TypeScript support with full type definitions
- Lightweight with tree-shaking support
- Zero configuration required
- Built with styled-components and React 19

## Examples

### Modern

<img src="https://raw.githubusercontent.com/dev-pigeon/pigeon-ui/auth-widget-theme-examples/demo/assets/AuthWidgetModern.png" width="300" height="300">

### Dark

<img src="https://raw.githubusercontent.com/dev-pigeon/pigeon-ui/auth-widget-theme-examples/demo/assets/AuthWidgetDark.png" width="300" height="300">

### Light

<img src="https://raw.githubusercontent.com/dev-pigeon/pigeon-ui/auth-widget-theme-examples/demo/assets/AuthWidgetLight.png" width="300" height="300">

## Usage

```tsx
import { AuthWidget } from "pigeon-ui";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Your login logic
    return {
      status: "success",
      message: "Login successful!",
      durationMs: 3000,
    };
  };

  const handleSignup = async () => {
    // Your signup logic
    return {
      status: "success",
      message: "Account created!",
      durationMs: 3000,
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

### AuthWidgetBehaviors

```typescript
interface AuthWidgetBehaviors {
  handleUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLogin: () => any;
  onSignup: () => any;
}
```

### AuthWidgetState

```typescript
interface AuthWidgetState {
  username: string;
  email: string;
  password: string;
}
```

### StyleOverrides

```typescript
interface StyleOverrides {
  input?: InputStyleOverride;
  button?: ButtonStyleOverride;
}

interface InputStyleOverride {
  sx?: React.CSSProperties;
  focusColor?: string;
  shadowColor?: string;
  placeholderColor?: string;
}

interface ButtonStyleOverride {
  sx?: React.CSSProperties;
  hoverBgColor?: string;
  hoverBoxShadow?: string;
}
```

### AuthStatus (Optional Return Type)

The `onLogin` and `onSignup` callbacks can **optionally** return an `AuthStatus` object to display feedback messages to the user. The widget has a built-in wrapper function that uses a type guard to detect `AuthStatus` return values, extract the message, and display it temporarily.

If you want the widget to display a message to the user (e.g., login error, success notification), simply return an `AuthStatus` object from your callback.

```typescript
interface AuthStatus {
  status: "success" | "error";
  message: string;
  durationMs: number;
}
```

**Example with status feedback:**

```typescript
const handleLogin = async () => {
  try {
    await api.login(email, password);
    return {
      status: "success",
      message: "Login successful!",
      durationMs: 3000,
    };
  } catch (error) {
    return {
      status: "error",
      message: "Invalid credentials",
      durationMs: 5000,
    };
  }
};
```

**Example without status feedback (no return value):**

```typescript
const handleLogin = async () => {
  await api.login(email, password);
  // No return - widget won't display any status message
};
```

## License

MIT
