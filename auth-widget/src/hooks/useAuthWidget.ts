import  { useState } from "react";
import { getRequestObject, makeRequest } from "../Api";
import type { AuthStatus } from "./useAuthStatus";

interface UseAuthWidget {
  theme: "modern" | "dark" | "light";
  setTheme: (theme: "modern" | "dark" | "light") => void;
  username: string;
  email: string;
  password: string;
  handleUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSignup: () => Promise<any>;
  onLogin: () => Promise<any>;
}

function useAuthWidget(): UseAuthWidget {
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

  return {
    theme,
    setTheme,
    username,
    email,
    password,
    handleUsername,
    handleEmail,
    handlePassword,
    onSignup,
    onLogin,
  };
}

export { useAuthWidget };
export type { UseAuthWidget };