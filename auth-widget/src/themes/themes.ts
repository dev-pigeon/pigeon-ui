import type React from "react"
import { modern } from "./modern"
import { dark } from "./dark"

type Theme  = {
    [key : string] : React.CSSProperties | string
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
