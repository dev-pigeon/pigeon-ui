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
    alignItems:"flex-start",
    flexDirection : "column",
    gap : '2px',
    padding : '10px',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
    color : "white"
}


const modernTitle : React.CSSProperties = {
    color: "white",
      fontSize: "1.25rem",
    fontWeight: "bold",
    margin:0,
    padding:0,
}

const modernSubtitle: React.CSSProperties = {
  color: "#94a3b8",
  margin:0,
  padding:0,
};

const modern : Theme = {
    "container" : modernContainer,
    "title" : modernTitle,
    "subtitle" : modernSubtitle
}

export const themes : ThemeDict = {
    "modern" : modern
}

/*
components to make:
3. button group for toggling sign up / login
4. regular text box (username / email)
5. password text box
6. password eye
7. submit button (logging and signing in)
*/