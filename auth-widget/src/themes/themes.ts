import type React from "react"
import { modern } from "./modern"
import { dark } from "./dark"
import { light } from "./light"
import type { ButtonStyles, InputStyles, StatusContainerIcon } from "../components"

type Theme = {
  card: React.CSSProperties;
  container: React.CSSProperties;
  title: React.CSSProperties;
  subtitle: React.CSSProperties;
  tabContainer: React.CSSProperties;
  tabButton: React.CSSProperties;
  tabButtonActive: React.CSSProperties;
  inputWrapper: React.CSSProperties;
  inputWithIcon: React.CSSProperties;
  inputIcon: React.CSSProperties;
  submitButton: React.CSSProperties;
  passwordIcon: React.CSSProperties;
  statusContainerSuccess: React.CSSProperties;
  statusContainerError: React.CSSProperties;
  inputStyles: InputStyles; 
  buttonStyles : ButtonStyles;
  statusContainerIcon : StatusContainerIcon 
}

type ThemeDict = {
    [key : string] : Theme
}


const themes : ThemeDict = {
    "modern" : modern,
    'dark' : dark,
    'light' : light
}

export {
  type Theme, 
  themes
}
