import { useState } from "react";

import "./App.css";
import AuthWidget from "./AuthWidget";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthWidget />
    </>
  );
}

export default App;
