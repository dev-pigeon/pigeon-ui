import type React from "react"
import { modern } from "./modern"
import { dark } from "./dark"
import type { InputStyles } from "../components"

type Theme  = {
    [key : string] : React.CSSProperties | InputStyles
}

type ThemeDict = {
    [key : string] : Theme
}


const themes : ThemeDict = {
    "modern" : modern,
    'dark' : dark
}

export {
  type Theme, 
  themes
}
