import { useState } from "react";
import "./App.css";
import AuthWidget from "./AuthWidget";
import { getRequestObject, makeRequest } from "./Api";
import { type AuthStatus } from "./hooks/useAuthStatus";

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

function App() {
  const [theme, setTheme] = useState<"modern" | "dark" | "light">("modern");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setUsername(e.target.value);
    }
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setEmail(e.target.value);
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      setPassword(e.target.value);
    }
  };

  const getData = (): object => {
    return {
      username: username,
      email: email,
      password: password,
    };
  };

  const packageAuthMessage = (
    status: "success" | "error",
    message: string,
    duration: number
  ) => {
    const error: AuthStatus = {
      status: status,
      message: message,
      durationMs: duration,
    };
    return error;
  };

  const onSignup = async (): Promise<any> => {
    try {
      const data = getData();
      const request = getRequestObject("POST", data);
      // @ts-ignore
      const response = await makeRequest(
        request,
        "http://localhost:5335/api/register"
      );

      // kick off some business logic, set a timeout, route to a new page
      return packageAuthMessage(
        "success",
        "Account created successfully!",
        3000
      );
    } catch (error) {
      if (error instanceof Error) {
        const message = packageAuthMessage("error", error.message, 3000);
        return message;
      }
    }
  };

  const onLogin = async (): Promise<any> => {
    try {
      const data = getData();
      const request = getRequestObject("POST", data);
      const response = await makeRequest(
        request,
        "http://localhost:5335/api/login"
      );

      if (!response.ok) {
        const message = packageAuthMessage(
          "error",
          "An unexpected error has occured",
          3000
        );
        return message;
      }

      return packageAuthMessage("success", "Login successful!", 3000);
    } catch (error) {
      if (error instanceof Error) {
        const message = packageAuthMessage("error", error.message, 3000);
        return message;
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <ThemeSelector currentTheme={theme} onThemeChange={setTheme} />

      <AuthWidget
        theme={theme}
        behavior={{
          handleEmail,
          handleUsername,
          handlePassword,
          onLogin,
          onSignup,
        }}
        state={{ username, email, password }}
      />
    </div>
  );
}

export default App;
