import React from "react";
import type { ButtonStyles, InputStyles, StatusContainerIcon } from "../components";
import {
  baseCard,
  baseContainer,
  baseTitle,
  baseSubtitle,
  baseTabContainer,
  baseTabButton,
  baseSubmitButton,
  baseInputWrapper,
  baseInputWithIcon,
  baseInputIcon,
  basePasswordIcon,
  baseStatusContainerSuccess,
  baseStatusContainerError,
} from "./reusable";

const darkCard: React.CSSProperties = {
  ...baseCard,
  background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
  color: "#e5e7eb",
};

const darkContainer: React.CSSProperties = {
  ...baseContainer,
};

const darkTitle: React.CSSProperties = {
  ...baseTitle,
  color: "#f3f4f6",
};

const darkSubtitle: React.CSSProperties = {
  ...baseSubtitle,
  color: "#9ca3af",
};

const darkTabContainer: React.CSSProperties = {
  ...baseTabContainer,
  backgroundColor: "#1a1a1a",
};

const darkTabButton: React.CSSProperties = {
  ...baseTabButton,
  color: "#9ca3af",
};

const darkSubmitButton: React.CSSProperties = {
  ...baseSubmitButton,
  backgroundColor: "#8b5cf6",
};

const darkTabButtonActive: React.CSSProperties = {
  ...darkTabButton,
  backgroundColor: "#a78bfa",
  color: "#1a1a1a",
};

const darkInputWrapper: React.CSSProperties = {
  ...baseInputWrapper,
  backgroundColor: "#1a1a1a",
};

const darkInputWithIcon: React.CSSProperties = {
  ...baseInputWithIcon,
  borderBottom: "1px solid #404040",
  color: "#e5e7eb",
};

const darkInputIcon: React.CSSProperties = {
  ...baseInputIcon,
  color: "#9ca3af",
};

const darkPasswordIcon: React.CSSProperties = {
  ...basePasswordIcon,
  color: "#9ca3af",
};

const inputStyles: InputStyles = {
  focusColor: "#8b5cf6",
  placeholderColor: "#6b7280",
  shadowColor: "rgba(139, 92, 246, 0.6)",
};

const buttonStyles: ButtonStyles = {
  hoverBgColor: "#8342f3ff",
  hoverBoxShadow: "0 4px 12px rgba(139, 92, 246, 0.5)",
};

const statusContainerIcon : StatusContainerIcon = {
  successColor: "#bed9bf",
  errorColor: "rgba(200, 60, 60, .95)"
}


export const dark = {
  submitButton: darkSubmitButton,
  card: darkCard,
  container: darkContainer,
  title: darkTitle,
  subtitle: darkSubtitle,
  tabContainer: darkTabContainer,
  tabButton: darkTabButton,
  tabButtonActive: darkTabButtonActive,
  inputWrapper: darkInputWrapper,
  inputWithIcon: darkInputWithIcon,
  inputIcon: darkInputIcon,
  passwordIcon: darkPasswordIcon,
  inputStyles: inputStyles,
  buttonStyles: buttonStyles,
  statusContainerIcon : statusContainerIcon,
  statusContainerError : baseStatusContainerError,
  statusContainerSuccess: baseStatusContainerSuccess
};