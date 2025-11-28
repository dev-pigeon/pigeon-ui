type Theme  = {
    [key : string] : React.CSSProperties
}

type ThemeDict = {
    [key : string] : Theme
}


// add these: border radius / color, dynamic sizing
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

/*
components to make:
1. Title
2. subtitle
3. button group for toggling sign up / login
4. regular text box (username / email)
5. password text box
6. password eye
7. submit button (logging and signing in)
*/