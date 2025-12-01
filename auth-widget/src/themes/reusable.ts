import React from "react";

export const baseCard: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minWidth: "250px",
  maxWidth: "375px",
  width: "clamp(250px, 90vw, 375px)",
  borderRadius: "10px",
  padding: "clamp(16px, 5vw, 25px)",
  boxSizing: "border-box",
};


export const baseContainer: React.CSSProperties = {
  display: "flex",
  gap: "clamp(12px, 3vw, 15px)",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "10px",
  width: "100%",
  height: "auto",
};

export const baseTitle: React.CSSProperties = {
  fontSize: "clamp(1.1rem, 4vw, 1.25rem)",
  fontWeight: "bold",
  margin: 0,
  padding: 0,
  lineHeight: 1.2,
};

export const baseSubtitle: React.CSSProperties = {
  margin: 0,
  padding: 0,
  fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)",
  lineHeight: 1.4,
};

export const baseTabContainer: React.CSSProperties = {
  width: "100%",
  borderRadius: "8px",
  display: "flex",
  flexFlow: "row nowrap",
  gap: "8px",
};

export const baseTabButton: React.CSSProperties = {
  flex: 1,
  padding: "clamp(8px, 2vw, 10px) clamp(12px, 3vw, 16px)",
  backgroundColor: "transparent",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "clamp(0.8rem, 2.5vw, 0.87rem)",
  fontWeight: "500",
  transition: "all 0.2s ease",
  margin: "0px 0px",
  minWidth: "0",
  whiteSpace: "nowrap" as const,
  border: "none",
};

export const baseSubmitButton: React.CSSProperties = {
  width: "100%",
  padding: "clamp(10px, 2.5vw, 12px)",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "clamp(0.85rem, 2.5vw, 0.9rem)",
  fontWeight: "600",
  transition: "all 0.2s ease",
  margin: "0px 0px",
  minHeight: "44px",
  maxHeight: "50px",
  border: "none",
  touchAction: "manipulation",
};

export const baseInputWrapper: React.CSSProperties = {
  position: "relative",
  width: "100%",
  borderRadius: "6px 6px 0 0",
  paddingBottom: "4px",
  boxSizing: "border-box",
};

export const baseInputWithIcon: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "none",
  padding: "clamp(10px, 2.5vw, 12px) clamp(10px, 2.5vw, 12px) clamp(10px, 2.5vw, 12px) clamp(36px, 8vw, 40px)",
  borderRadius: "0",
  width: "100%",
  fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
  boxSizing: "border-box",
  minHeight: "44px",
};

export const baseInputIcon: React.CSSProperties = {
  position: "absolute",
  left: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  height: "20px",
  width: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const basePasswordIcon: React.CSSProperties = {
  position: "absolute",
  left: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  height: "20px",
  width: "20px",
  cursor: "pointer",
  transition: "color 0.2s ease",
  zIndex: 10,
  pointerEvents: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};