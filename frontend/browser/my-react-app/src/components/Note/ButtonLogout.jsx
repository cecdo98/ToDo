import { useNavigate } from "react-router-dom";


function ButtonLogout({token}) {


    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/"); 
    }

    return(
        <button className="buttonHeader" onClick={handleLogout}>Logout</button>
    )
}

export default ButtonLogout