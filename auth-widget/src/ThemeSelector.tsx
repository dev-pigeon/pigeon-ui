const ThemeSelector = ({
  currentTheme,
  onThemeChange,
}: {
  currentTheme: string;
  onThemeChange: (theme: "modern" | "dark" | "light") => void;
}) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: "12px",
    marginBottom: "24px",
    padding: "16px",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
  };

  const getButtonStyle = (isActive: boolean): React.CSSProperties => ({
    padding: "10px 20px",
    borderRadius: "8px",
    border: `2px solid ${isActive ? "#3b82f6" : "rgba(255, 255, 255, 0.1)"}`,
    background: isActive ? "#3b82f6" : "rgba(255, 255, 255, 0.05)",
    color: isActive ? "#ffffff" : "#94a3b8",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "600",
    transition: "all 0.2s ease",
  });

  return (
    <div style={containerStyle}>
      <button
        style={getButtonStyle(currentTheme === "modern")}
        onClick={() => onThemeChange("modern")}
      >
        Modern
      </button>
      <button
        style={getButtonStyle(currentTheme === "dark")}
        onClick={() => onThemeChange("dark")}
      >
        Dark
      </button>
      <button
        style={getButtonStyle(currentTheme === "light")}
        onClick={() => onThemeChange("light")}
      >
        Light
      </button>
    </div>
  );
};

export default ThemeSelector;
