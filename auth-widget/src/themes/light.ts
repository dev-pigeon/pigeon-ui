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

const lightCard: React.CSSProperties = {
  ...baseCard,
  background: "linear-gradient(135deg, #ffffffff 0%, #f8fafcdd 50%, #ffffff 100%)",
  color: "#1e293b",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)",
};

const lightContainer: React.CSSProperties = {
  ...baseContainer,
};

const lightTitle: React.CSSProperties = {
  ...baseTitle,
  color: "#0f172a",
};

const lightSubtitle: React.CSSProperties = {
  ...baseSubtitle,
  color: "#64748b",
};

const lightTabContainer: React.CSSProperties = {
  ...baseTabContainer,
  backgroundColor: "#f1f5f9",
};

const lightTabButton: React.CSSProperties = {
  ...baseTabButton,
  color: "#64748b",
  backgroundColor:"#ccc6e633 !important",
};

const lightSubmitButton: React.CSSProperties = {
  ...baseSubmitButton,
  backgroundColor: "#1e293b",
  color: "#ffffff",
};

const lightTabButtonActive: React.CSSProperties = {
  ...lightTabButton,
  backgroundColor: "#1e293b",
  color: "#ffffff",
};

const lightInputWrapper: React.CSSProperties = {
  ...baseInputWrapper,
  backgroundColor: "#f8fafc",
};

const lightInputWithIcon: React.CSSProperties = {
  ...baseInputWithIcon,
  borderBottom: "1px solid #cbd5e1",
  color: "#0f172a",
  backgroundColor:"#ccc6e633 !important",
};

const lightInputIcon: React.CSSProperties = {
  ...baseInputIcon,
  color: "#64748b",
};

const lightPasswordIcon: React.CSSProperties = {
  ...basePasswordIcon,
  color: "#64748b",
};

const inputStyles: InputStyles = {
  focusColor: "#1e293b",
  placeholderColor: "#94a3b8",
  shadowColor: "rgba(30, 41, 59, 0.3)",
};

const buttonStyles: ButtonStyles = {
  hoverBgColor: "#0f172a",
  hoverBoxShadow: "0 4px 12px rgba(15, 23, 42, 0.25)",
};

export const light = {
  submitButton: lightSubmitButton,
  card: lightCard,
  container: lightContainer,
  title: lightTitle,
  subtitle: lightSubtitle,
  tabContainer: lightTabContainer,
  tabButton: lightTabButton,
  tabButtonActive: lightTabButtonActive,
  inputWrapper: lightInputWrapper,
  inputWithIcon: lightInputWithIcon,
  inputIcon: lightInputIcon,
  passwordIcon: lightPasswordIcon,
  inputStyles: inputStyles,
  buttonStyles: buttonStyles,
};