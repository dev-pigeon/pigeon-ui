import { useState } from "react";
import "./App.css";
import AuthWidget from "./AuthWidget";

function App() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");

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

  return (
    <>
      <AuthWidget
        behavior={{ handleEmail, handleUsername }}
        username={username}
        email={email}
      />
    </>
  );
}

export default App;
