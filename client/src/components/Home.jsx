import { useNavigate } from "react-router-dom";


export default function Home () {

    const navigate = useNavigate();

    const handelLogout = () => {
        localStorage.removeItem('jwt');
        navigate("/login");
    }
    return (
        <div style={{display:"flex",flexDirection:"column", 
        justifyContent:"center", alignItems:"center"}}>
            <h1>Welcome to SkyGoal Inc</h1>
            <div>
                <button onClick={handelLogout}>Logout</button>
            </div>
        </div>
    )
}