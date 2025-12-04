// Main component export
export { default as AuthWidget } from './AuthWidget';
export { default } from './AuthWidget';

// Component exports (if users want to build custom UIs)
export {
  Card,
  Container,
  TabContainer,
  Title,
  SubTitle,
  TabButton,
  SubmitButton,
  InputContainer,
  InputWrapper,
  IconWrapper,
  Input,
  StatusContainer,
  type InputStyles,
  type ButtonStyles,
  type StatusContainerIcon,
} from './components';

// Hook exports
export { default as useAuthStatus } from './hooks/useAuthStatus';
export type { AuthStatus, authStatusReturn } from './hooks/useAuthStatus';

// Theme exports
export { themes } from './themes/themes';
export type { Theme } from './themes/themes';
export { modern } from './themes/modern';
export { dark } from './themes/dark';
export { light } from './themes/light';

// Interface exports
export type {
  AuthWidgetBehaviors,
  AuthWidgetState,
  InputStyleOverride,
  ButtonStyleOverride,
  StyleOverrides,
  AuthWidgetProps,
} from './interfaces';

// Utility exports
export { cssPropertiesToString } from './utils/cssHelpers';
