import { useState } from "react";
import "./App.css";
import AuthWidget from "./AuthWidget";

function App() {
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

  return (
    <>
      <AuthWidget
        theme="dark"
        behavior={{ handleEmail, handleUsername, handlePassword }}
        state={{ username, email, password }}
      />
    </>
  );
}

export default App;
