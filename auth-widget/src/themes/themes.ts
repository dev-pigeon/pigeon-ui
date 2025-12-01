import type React from "react"
import { modern } from "./modern"

type Theme  = {
    [key : string] : React.CSSProperties | string
}

type ThemeDict = {
    [key : string] : Theme
}


const themes : ThemeDict = {
    "modern" : modern,
}

export {
  type Theme, 
  themes
}
