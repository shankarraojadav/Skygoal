import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginUser } from "../service/api";

export default function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const response = await LoginUser(data);
    const { token } = response.data
    if (response.status === 200) {
      localStorage.setItem("jwt", token);
      navigate("/home");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Login</h1>
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={handleLogin}>Login</button>
        <Link to="/">
          <button style={{ marginLeft: "4vh" }}>Signup</button>
        </Link>
      </div>
    </div>
  );
}
