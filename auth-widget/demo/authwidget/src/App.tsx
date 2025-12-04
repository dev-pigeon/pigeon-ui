import "./App.css";
import { AuthWidget } from "@pigeon-ui/auth-widget";
import { useAuthWidget } from "./hooks/useAuthWidget";
import ThemeSelector from "./ThemeSelector";

function App() {
  const authWidgetHook = useAuthWidget();

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
      <ThemeSelector
        currentTheme={authWidgetHook.theme}
        onThemeChange={authWidgetHook.setTheme}
      />

      <AuthWidget
        theme={authWidgetHook.theme}
        behavior={{
          handleEmail: authWidgetHook.handleEmail,
          handleUsername: authWidgetHook.handleUsername,
          handlePassword: authWidgetHook.handlePassword,
          onLogin: authWidgetHook.onLogin,
          onSignup: authWidgetHook.onSignup,
        }}
        state={{
          username: authWidgetHook.username,
          email: authWidgetHook.email,
          password: authWidgetHook.password,
        }}
      />
    </div>
  );
}

export default App;
