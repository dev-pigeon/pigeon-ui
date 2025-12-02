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
  baseStatusContainer,
  baseStatusContainerSuccess,
  baseStatusContainerError,
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

const lightStatucContainerSuccess : React.CSSProperties = {
  ...baseStatusContainer,
  color: "#e4eee5ff",
  backgroundColor: "#357a3fff",
}

const inputStyles: InputStyles = {
  focusColor: "#1e293b",
  placeholderColor: "#94a3b8",
  shadowColor: "rgba(30, 41, 59, 0.3)",
};

const buttonStyles: ButtonStyles = {
  hoverBgColor: "#0f172a",
  hoverBoxShadow: "0 4px 12px rgba(15, 23, 42, 0.25)",
};

const lightStatusContainerSuccess: React.CSSProperties = {
  ...baseStatusContainer,
  background: "linear-gradient(135deg, #e7f7ec 0%, #f2fff6 50%, #e7f7ec 100%)",
  border: "1px solid rgba(40, 150, 90, 0.35)",
  boxShadow:
    "inset 0 1px 2px rgba(255, 255, 255, 0.7), 0 0 6px rgba(40, 150, 90, 0.15)",
  color: "rgba(30, 120, 70, 0.9)",
  backdropFilter: "blur(2px)",
};

const lightStatusContainerError: React.CSSProperties = {
  ...baseStatusContainer,
  background: "linear-gradient(135deg, #fdeaea 0%, #fff5f5 50%, #fdeaea 100%)",
  border: "1px solid rgba(200, 80, 80, 0.35)",
  boxShadow:
    "inset 0 1px 2px rgba(255, 255, 255, 0.7), 0 0 6px rgba(200, 80, 80, 0.15)",
  color: "rgba(160, 40, 40, 0.9)",
  backdropFilter: "blur(2px)",
};


const statusContainerIcon : StatusContainerIcon = {
  successColor: "#bed9bf",
  errorColor: "#bed9bf"
}

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
  statusContainerSuccess: lightStatusContainerSuccess,
  statusContainerError : lightStatusContainerError,
  statusContainerIcon : statusContainerIcon
};