import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassowrd] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="UserName"
      />
      {"  "}
      <br />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassowrd(e.target.value)}
        placeholder="Password"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
