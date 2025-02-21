import Note from "../components/Note/note.jsx"
import Header from "../components/Extra/Header.jsx"
import Footer from "../components/Extra/Footer.jsx"
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


function MainPage(){

  const location = useLocation();
  const email = location.state?.email || "Email não recebido";
  const token = location.state?.token || null;

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
        if (email === "Email não recebido") return;

        try {
            const response = await fetch("http://localhost/todo/backend/routers/api.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "get_user",
                    email: email
                })
            });

            const data = await response.json();
            if (data.user) {
                setUser(data.user);
            } else {
                setUser("Utilizador não encontrado");
            }
        } catch (error) {
            console.error("Erro ao encontrar utilizador:", error);
            setUser("Erro ao carregar utilizador");
        }
    };

    fetchUser();
    }, [email]);
    
    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }


  return(
      <>
        <Header email={email} token={token} />
        <h2>Bem-vindo, {capitalizeFirstLetter(user)}</h2>
        <Note email={email} token={token} />  
        <Footer/>
      </>
    )
}

export default MainPage