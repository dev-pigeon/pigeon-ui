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
  background: "linear-gradient(135deg, #0a0f1e 0%, #1a2332 50%, #0a0f1e 100%)",
  color: "#ffffff",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(59, 130, 246, 0.2)",
  border: "1px solid rgba(59, 130, 246, 0.1)",
};

const modernContainer: React.CSSProperties = {
  ...baseContainer,
};

const modernTitle: React.CSSProperties = {
  ...baseTitle,
  color: "#ffffff",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
};

const modernSubtitle: React.CSSProperties = {
  ...baseSubtitle,
  color: "#a5b4fc",
};

const modernTabContainer: React.CSSProperties = {
  ...baseTabContainer,
  backgroundColor: "#0f1729",
  border: "1px solid rgba(59, 130, 246, 0.2)",
  padding: "4px",
  boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.3)",
};

const modernTabButton: React.CSSProperties = {
  ...baseTabButton,
  color: "#94a3b8",
};

const submitButton: React.CSSProperties = {
  ...baseSubmitButton,
  background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
  color: "#ffffff",
  boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
  border: "1px solid rgba(59, 130, 246, 0.5)",
};

const modernTabButtonActive: React.CSSProperties = {
  ...modernTabButton,
  background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
  color: "#ffffff",
  boxShadow: "0 2px 8px rgba(59, 130, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
  border: "1px solid rgba(59, 130, 246, 0.6)",
};

const modernInputWrapper: React.CSSProperties = {
  ...baseInputWrapper,
  backgroundColor: "#0f1729",
  border: "1px solid rgba(59, 130, 246, 0.15)",
  boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.2)",
};

const modernInputWithIcon: React.CSSProperties = {
  ...baseInputWithIcon,
  borderBottom: "2px solid #1e3a8a",
  color: "#ffffff",
};

const modernInputIcon: React.CSSProperties = {
  ...baseInputIcon,
  color: "#60a5fa",
};

const modernPasswordIcon: React.CSSProperties = {
  ...basePasswordIcon,
  color: "#60a5fa",
};

const inputStyles: InputStyles = {
  focusColor: "#3b82f6",
  placeholderColor: "#64748b",
  shadowColor: "rgba(59, 130, 246, 0.8)",
};

const buttonStyles: ButtonStyles = {
  hoverBgColor: "#2563eb",
  hoverBoxShadow: "0 6px 20px rgba(59, 130, 246, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
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