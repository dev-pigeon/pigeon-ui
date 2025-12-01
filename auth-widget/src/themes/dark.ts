import React from "react";
import type { ButtonStyles, InputStyles } from "../components";

const darkCard: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
  color: "#e5e7eb",
  minWidth: "350px",
  borderRadius: "10px",
  padding: "25px",
}

const darkContainer: React.CSSProperties = {
  display: "flex",
  gap: "15px",
  flexDirection: "column",
  justifyContent: 'space-between',
  borderRadius: "10px",
  width: "100%",
  height: "auto",
}

const darkTitle: React.CSSProperties = {
  color: "#f3f4f6",
  fontSize: "1.25rem",
  fontWeight: "bold",
  margin: 0,
  padding: 0,
}

const darkSubtitle: React.CSSProperties = {
  color: "#9ca3af",
  margin: 0,
  padding: 0,
};

const darkTabContainer: React.CSSProperties = {
  width: "100%",
  borderRadius: "8px",
  display: "flex",
  flexFlow: "row nowrap",
  backgroundColor: "#1a1a1a",
};

const darkTabButton: React.CSSProperties = {
  flex: 1,
  padding: "10px 16px",
  backgroundColor: "transparent",
  color: "#9ca3af",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "0.87rem",
  fontWeight: "500",
  transition: "all 0.2s ease",
  margin: '0px 0px',
  width: "40%"
};

const darkSubmitButton: React.CSSProperties = {
  flex: 1,
  padding: "10px",
  backgroundColor: "#8b5cf6",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "0.87rem",
  fontWeight: "500",
  transition: "all 0.2s ease",
  margin: '0px 0px',
  width: "95%",
  maxHeight: '50px'
}

const darkTabButtonActive: React.CSSProperties = {
  ...darkTabButton,
  backgroundColor: "#a78bfa",
  color: "#1a1a1a",
};

const darkInputWrapper: React.CSSProperties = {
  position: "relative",
  width: "inherit",
  backgroundColor: "#1a1a1a",
  borderRadius: "6px 6px 0 0",
  paddingBottom: '4px'
};

const darkInputWithIcon: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "1px solid #404040",
  color: "#e5e7eb",
  padding: "12px 12px 12px 40px",
  borderRadius: "0",
  width: "inherit",
  fontSize: "1rem",
};

const darkInputIcon: React.CSSProperties = {
  margin: "0px auto",
  position: "absolute",
  left: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  color: "#9ca3af",
  pointerEvents: "none",
  height: "20px",
};

const darkPasswordIcon: React.CSSProperties = {
  ...darkInputIcon,
  cursor: "pointer",
  transition: "color 0.2s ease",
  zIndex: 10,
  pointerEvents: "auto",
}

const inputStyles : InputStyles = {
  'focusColor': '#8b5cf6',
  'placeholderColor': '#6b7280',
  'shadowColor': 'rgba(139, 92, 246, 0.6)'
}

const buttonStyles : ButtonStyles = {
    hoverBgColor: "#8342f3ff",
    hoverBoxShadow: "0 4px 12px rgba(139, 92, 246, 0.5)"
}

export const dark = {
  'submitButton': darkSubmitButton,
  'card': darkCard,
  "container": darkContainer,
  "title": darkTitle,
  "subtitle": darkSubtitle,
  "tabContainer": darkTabContainer,
  "tabButton": darkTabButton,
  "tabButtonActive": darkTabButtonActive,
  "inputWrapper": darkInputWrapper,
  "inputWithIcon": darkInputWithIcon,
  'inputIcon': darkInputIcon,
  'passwordIcon': darkPasswordIcon,
  'inputStyles' : inputStyles,
  'buttonStyles' : buttonStyles
}