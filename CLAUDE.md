# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **npm workspaces monorepo** containing **AuthWidget**, a themeable React authentication widget component library published as `@pigeon-ui/auth-widget`.

**Repository structure:**
- `auth-widget/` - Monorepo root directory
  - `packages/authwidget/` - Publishable library package
  - `demo/authwidget/` - Demo application that consumes the library

## Development Commands

All commands should be run from the `auth-widget/` (monorepo root) directory:

```bash
# Start demo development server with HMR
npm run dev

# Watch library in development mode (with rebuild on change)
npm run dev:lib

# Build both library and demo
npm run build

# Build library only
npm run build:lib

# Build demo only
npm run build:demo

# Lint all workspaces
npm run lint

# Typecheck all workspaces
npm run typecheck

# Preview demo production build
npm run preview:demo
```

## Architecture

### Theme System

The widget uses a **theme object architecture** where themes are complete style dictionaries rather than CSS classes:

- Theme definitions are in `packages/authwidget/src/themes/` (modern.ts, dark.ts, light.ts)
- Each theme exports a complete `Theme` object with React.CSSProperties for every component part
- Themes include both static styles and dynamic style values (InputStyles, ButtonStyles, StatusContainerIcon)
- Theme selection happens at the component level via the `theme` prop
- Themes are exported from the library for consumer use

**Key pattern**: Themes are converted to CSS strings using `cssPropertiesToString()` utility and injected into styled-components via transient props (`$styleString`).

### Styled Components Pattern

All styled components use **transient props** (prefixed with `$`) to pass dynamic styles:

```tsx
// Pattern used throughout the codebase
const Component = styled.div<{ $styleString: string }>`
  ${(props) => props.$styleString}
`;
```

This prevents style props from leaking to the DOM while allowing dynamic theme injection.

### State Management

The widget uses a **behavior/state separation pattern**:

- `AuthWidgetProps` splits concerns into `behavior` (callbacks/handlers) and `state` (data)
- Library exports `useAuthStatus` hook for authentication status feedback with auto-timeout
- Demo provides `useAuthWidget` hook as an example implementation of state management

**Hook flow**: `useAuthStatus.submitCallbackWrapper()` wraps auth callbacks (onLogin/onSignup), extracts `AuthStatus` return values, displays them temporarily, then auto-clears after `durationMs`.

**Library vs Demo distinction:**
- **Library** (`packages/authwidget/`): Contains only `useAuthStatus` hook (exported for consumers)
- **Demo** (`demo/authwidget/`): Contains `useAuthWidget` hook with theme state, form inputs, and API integration as an example

### API Integration (Demo-specific)

The demo application (`demo/authwidget/`) includes example API integration:

- `demo/authwidget/src/Api.ts` provides thin wrappers around fetch: `getRequestObject()` and `makeRequest()`
- Demo's `useAuthWidget` hook expects backend at `http://localhost:5335/api/` (register, login)
- API errors are thrown with JSON error messages and caught in hook callbacks
- Response format expected: `AuthStatus` objects with status/message/durationMs

**Note**: API integration is demo-specific and NOT part of the published library. Consumers implement their own auth callbacks.

### Component Organization

**Library Package** (`packages/authwidget/src/`):
```
packages/authwidget/src/
├── AuthWidget.tsx      # Main component
├── index.ts            # Library entry point with all exports
├── components/
│   ├── layout.tsx      # Card, Container, TabContainer, StatusContainer
│   ├── inputs.tsx      # Input, InputWrapper, IconWrapper + InputStyles type
│   ├── buttons.tsx     # SubmitButton, TabButton + ButtonStyles type
│   ├── typography.tsx  # Title, SubTitle
│   └── index.ts        # Barrel export
├── hooks/
│   └── useAuthStatus.ts   # Status display with auto-timeout (exported)
├── themes/
│   ├── themes.ts       # Theme type definition + theme dictionary
│   ├── modern.ts       # Modern theme
│   ├── dark.ts         # Dark theme
│   ├── light.ts        # Light theme
│   └── reusable.ts     # Shared theme utilities
├── interfaces/
│   └── index.ts        # All TypeScript interfaces
└── utils/
    └── cssHelpers.ts   # cssPropertiesToString utility
```

**Demo Application** (`demo/authwidget/src/`):
```
demo/authwidget/src/
├── main.tsx            # App entry point
├── App.tsx             # Root component with AuthWidget integration
├── App.css
├── index.css
├── Api.ts              # HTTP utility functions (demo-specific)
├── ThemeSelector.tsx   # Theme switching UI component
└── hooks/
    └── useAuthWidget.ts   # State management example with API calls
```

### Style Override System

The widget supports granular style customization via `styleOverrides` prop:

- `InputStyleOverride`: focusColor, shadowColor, placeholderColor, sx
- `ButtonStyleOverride`: hoverBgColor, hoverBoxShadow, sx

Overrides are checked at render time and take precedence over theme defaults. See `packages/authwidget/src/AuthWidget.tsx` for implementation pattern.

### Library Exports

The library (`@pigeon-ui/auth-widget`) exports the following from `packages/authwidget/src/index.ts`:

- **Main component**: `AuthWidget` (default + named export)
- **UI components**: All styled components (Card, Container, Input, Button variants, etc.)
- **Hooks**: `useAuthStatus` for status management
- **Themes**: `modern`, `dark`, `light` theme objects + `themes` dictionary
- **Types**: All TypeScript interfaces (AuthWidgetProps, Theme, AuthStatus, etc.)
- **Utilities**: `cssPropertiesToString` helper

## Build Configuration

### Monorepo Setup

- **npm workspaces**: Root `package.json` defines workspaces: `packages/*` and `demo/*`
- **TypeScript project references**: Root `tsconfig.json` references both workspace packages
- **Workspace scripts**: Centralized npm scripts coordinate building and development across packages

### Library Package (`packages/authwidget/`)

- **Package name**: `@pigeon-ui/auth-widget`
- **TypeScript**:
  - `tsconfig.json` - Main TypeScript config
  - `tsconfig.build.json` - Declaration-only build for type definitions
- **Vite**: Library build configuration
  - ES module format (single bundle)
  - Externalizes dependencies: react, react-dom, styled-components, lucide-react
  - Sourcemaps enabled for debugging
  - Target: ES2022
- **ESLint**: Flat config using typescript-eslint, react-hooks plugins
- **Build output**: `dist/index.js` + sourcemaps

### Demo Application (`demo/authwidget/`)

- **Package name**: `@pigeon-ui/demo`
- **TypeScript**: Project references setup with tsconfig.json, tsconfig.app.json, tsconfig.node.json
- **Vite**:
  - React plugin with React Compiler (babel-plugin-react-compiler) for automatic optimizations
  - Path alias: `@pigeon-ui/auth-widget` resolves to `../../packages/authwidget/src` for development
- **ESLint**: Flat config using typescript-eslint, react-hooks, and react-refresh plugins

## Working Directory

The working directory is currently set to `auth-widget/` (monorepo root). When referencing files or running commands, paths should be relative to this location.