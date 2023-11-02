import { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../service/api";

export default function Signup() {

  const navigate = useNavigate();

  const [data, setData] = useState();  
  console.log(data)
  const handleChange = (e) => {
    e.preventDefault();
    setData({...data, [e.target.name]: e.target.value})
  };

  const handleSignup = async () => {
    const response = await signup(data);
    const { token } = response.data
    if (response.status === 200) {
      localStorage.setItem("jwt", token);
      navigate("/home");
    }
  }
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
        <h1>Sign Up</h1>
        <input
          placeholder="Name"
          type="text"
          name="name"
          onChange={handleChange}
        />
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
        <button onClick={handleSignup}>SignUp</button>
        <Link to="/login">
          <button style={{ marginLeft: "4vh" }}>Login</button>
        </Link>
      </div>
    </div>
  );
}
