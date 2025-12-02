export interface AuthWidgetBehaviors {
  handleUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => any;
}

export interface AuthWidgetState {
  username: string;
  email: string;
  password: string;
}

export interface InputStyleOverride {
  sx?: React.CSSProperties;
  focusColor?: string;
  shadowColor?: string;
  placeholderColor?: string;
}

export interface ButtonStyleOverride {
  sx?: React.CSSProperties;
  hoverBgColor?: string;
  hoverBoxShadow?: string;
}

export interface StyleOverrides {
  input?: InputStyleOverride;
  button?: ButtonStyleOverride;
}

export interface AuthWidgetProps {
  behavior: AuthWidgetBehaviors;
  state: AuthWidgetState;
  styleOverrides?: StyleOverrides;
  theme?: "modern" | "light" | "dark";
  title?: string;
  subtitle?: string;
}


