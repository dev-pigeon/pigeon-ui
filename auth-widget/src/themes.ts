type Theme  = {
    [key : string] : React.CSSProperties
}

type ThemeDict = {
    [key : string] : Theme
}


const modernContainer : React.CSSProperties = {
    display : "flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection : "column",
    gap : 2,
    padding : 1,
    minWidth : 100,
    minHeight : 100,
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
    color : "white"
}


const modern : Theme = {
    "container" : modernContainer
}


export const themes : ThemeDict = {
    "modern" : modern
}