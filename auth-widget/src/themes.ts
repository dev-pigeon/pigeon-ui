type Theme  = {
    [key : string] : React.CSSProperties
}

type ThemeDict = {
    [key : string] : Theme
}


// add these: border radius / color, dynamic sizing
const modernContainer : React.CSSProperties = {
    display : "flex",
    justifyContent:"space-around",
    alignItems:"flex-start",
    flexDirection : "column",
    padding : '10px',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
    color : "white",
    minWidth:"500px",
    gap : "20px"
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

const modernTabContainer: React.CSSProperties = {
  width: "100%",
  borderRadius: "8px",
  display: "flex",
  marginBottom: "24px",
  flexFlow:"row nowrap",
  backgroundColor: "#0f172a",
};

const modernTabButton: React.CSSProperties = {
  flex: 1,
  padding: "10px 16px",
  backgroundColor: "transparent",
  color: "#94a3b8",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "0.87rem",
  fontWeight: "500",
  transition: "all 0.2s ease",
  margin: '0px 0px',
  width :"40%"
};


const modernTabButtonActive: React.CSSProperties = {
  ...modernTabButton,
  backgroundColor: "#2563eb",
  color: "white",
};

const modern : Theme = {
    "container" : modernContainer,
    "title" : modernTitle,
    "subtitle" : modernSubtitle,
    "tabContainer" : modernTabContainer,
    "tabButton" : modernTabButton,
    "tabButtonActive" : modernTabButtonActive
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