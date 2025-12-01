const modernCard : React.CSSProperties = {
    display : "flex",
    justifyContent:"space-around",
    alignItems:"flex-start",
    flexDirection : "column",
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
    color : "white",
    minWidth:"350px",
    borderRadius :"10px",
    padding : "20px",
    maxHeight:"350px",  
  }
  
  
  const modernContainer : React.CSSProperties = {
    display : "flex",
    gap : "10px",
    justifyContent:"space-around",
    alignItems:"flex-start",
    flexDirection : "column",
    borderRadius :"10px",
    width : "100%",
    maxHeight:"inherit",
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

const submitButton : React.CSSProperties = {
  flex: 1,
  padding: "10px",
  backgroundColor: "#3b82f6",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "0.87rem",
  fontWeight: "500",
  transition: "all 0.2s ease",
  margin: '0px 0px',
  width :"95%"
}


const modernTabButtonActive: React.CSSProperties = {
  ...modernTabButton,
  backgroundColor: "#c4cfe7ff",
  color: "black",
};

const modernInputWrapper: React.CSSProperties = {
  position: "relative",
  width: "inherit",
  backgroundColor: "#0f172a",
  borderRadius: "6px 6px 0 0", 
  paddingBottom : '4px'
};
const modernInputWithIcon: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "1px solid #334155",
  color: "white",
  padding: "12px 12px 12px 40px",
  borderRadius: "0",
  width: "inherit",
  fontSize: "1rem",
};


const modernInputIcon: React.CSSProperties = {
  margin: "0px auto",
  position: "absolute",
  left: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  color: "#94a3b8",
  pointerEvents: "none", 
  height: "20px",
};

const modernPasswordIcon: React.CSSProperties = {
  ...modernInputIcon,
  cursor: "pointer",
  transition: "color 0.2s ease",
  zIndex:10,
  pointerEvents: "auto",
}

export const modern = {
    'submitButton' : submitButton,
    'card' : modernCard,
    "container" : modernContainer,
    "title" : modernTitle,
    "subtitle" : modernSubtitle,
    "tabContainer" : modernTabContainer,
    "tabButton" : modernTabButton,
    "tabButtonActive" : modernTabButtonActive,
    "inputWrapper" : modernInputWrapper,
    "inputWithIcon" : modernInputWithIcon,
    'inputIcon' : modernInputIcon,
    'passwordIcon' : modernPasswordIcon,
    'focusColor' : '#055ff1ff',
    'placeholderColor' : '#64748b',
    'shadowColor' : 'rgba(59, 131, 246, 0.7)'
}