import React from "react";


export const baseCard: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minWidth: "350px",
  borderRadius: "10px",
  padding: "25px",
};

export const baseContainer: React.CSSProperties = {
  display: "flex",
  gap: "15px",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "10px",
  width: "100%",
  height: "auto",
};

export const baseTitle: React.CSSProperties = {
  fontSize: "1.25rem",
  fontWeight: "bold",
  margin: 0,
  padding: 0,
};

export const baseSubtitle: React.CSSProperties = {
  margin: 0,
  padding: 0,
};

export const baseTabContainer: React.CSSProperties = {
  width: "100%",
  borderRadius: "8px",
  display: "flex",
  flexFlow: "row nowrap",
};

export const baseTabButton: React.CSSProperties = {
  flex: 1,
  padding: "10px 16px",
  backgroundColor: "transparent",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "0.87rem",
  fontWeight: "500",
  transition: "all 0.2s ease",
  margin: "0px 0px",
  width: "40%",
};


export const baseSubmitButton: React.CSSProperties = {
  flex: 1,
  padding: "10px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "0.87rem",
  fontWeight: "500",
  transition: "all 0.2s ease",
  margin: "0px 0px",
  width: "95%",
  maxHeight: "50px",
};


export const baseInputWrapper: React.CSSProperties = {
  position: "relative",
  width: "inherit",
  borderRadius: "6px 6px 0 0",
  paddingBottom: "4px",
};


export const baseInputWithIcon: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "none",
  padding: "12px 12px 12px 40px",
  borderRadius: "0",
  width: "inherit",
  fontSize: "1rem",
};

export const baseInputIcon: React.CSSProperties = {
  margin: "0px auto",
  position: "absolute",
  left: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  height: "20px",
};

export const basePasswordIcon: React.CSSProperties = {
  margin: "0px auto",
  position: "absolute",
  left: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  height: "20px",
  cursor: "pointer",
  transition: "color 0.2s ease",
  zIndex: 10,
  pointerEvents: "auto",
};