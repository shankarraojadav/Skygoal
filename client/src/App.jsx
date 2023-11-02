import { useEffect , useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route, useNavigate } from "react-router-dom";
import { verifyToken } from "./service/api";

export default function App () {

  const [data, setData] = useState();

  console.log("userdata",data)

  const navigate = useNavigate();

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    if(token) {
      verify();
    }
  }, [])

  const verify = async () => {
    const response = await verifyToken(token);
    console.log(response);
    if(response.status === 200) {
      const userData = response.data.user;
      setData(userData)
      navigate("/home")
    }
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home data={data} />} />
      </Routes>
    </div>
  )
}