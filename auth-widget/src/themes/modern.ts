import React from "react";
import type { ButtonStyles, InputStyles } from "../components";
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
} from "./reusable";

const modernCard: React.CSSProperties = {
  ...baseCard,
  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
  color: "white",
};

const modernContainer: React.CSSProperties = {
  ...baseContainer,
};

const modernTitle: React.CSSProperties = {
  ...baseTitle,
  color: "white",
};

const modernSubtitle: React.CSSProperties = {
  ...baseSubtitle,
  color: "#94a3b8",
};

const modernTabContainer: React.CSSProperties = {
  ...baseTabContainer,
  backgroundColor: "#0f172a",
};

const modernTabButton: React.CSSProperties = {
  ...baseTabButton,
  color: "#94a3b8",
};

const submitButton: React.CSSProperties = {
  ...baseSubmitButton,
  backgroundColor: "#3b82f6",
};

const modernTabButtonActive: React.CSSProperties = {
  ...modernTabButton,
  backgroundColor: "#3b82f6",
  color: "black",
};

const modernInputWrapper: React.CSSProperties = {
  ...baseInputWrapper,
  backgroundColor: "#0f172a",
};

const modernInputWithIcon: React.CSSProperties = {
  ...baseInputWithIcon,
  borderBottom: "1px solid #334155",
  color: "white",
};

const modernInputIcon: React.CSSProperties = {
  ...baseInputIcon,
  color: "#94a3b8",
};

const modernPasswordIcon: React.CSSProperties = {
  ...basePasswordIcon,
  color: "#94a3b8",
};

const inputStyles: InputStyles = {
  focusColor: "#055ff1ff",
  placeholderColor: "#64748b",
  shadowColor: "rgba(59, 131, 246, 0.7)",
};

const buttonStyles: ButtonStyles = {
  hoverBgColor: "#2563eb",
  hoverBoxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)",
};

export const modern = {
  submitButton: submitButton,
  card: modernCard,
  container: modernContainer,
  title: modernTitle,
  subtitle: modernSubtitle,
  tabContainer: modernTabContainer,
  tabButton: modernTabButton,
  tabButtonActive: modernTabButtonActive,
  inputWrapper: modernInputWrapper,
  inputWithIcon: modernInputWithIcon,
  inputIcon: modernInputIcon,
  passwordIcon: modernPasswordIcon,
  inputStyles: inputStyles,
  buttonStyles: buttonStyles,
};