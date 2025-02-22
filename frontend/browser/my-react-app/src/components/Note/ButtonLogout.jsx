import { useNavigate } from "react-router-dom";


function ButtonLogout({token}) {


    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/"); 
    }

    return(
        <button className="buttonHeader" 
            onClick={handleLogout}>
            <i class='bx bxs-log-out'></i>
        </button>
    )
}

export default ButtonLogout