import Note from "../components/Note/note.jsx"
import Header from "../components/Extra/Header.jsx"
import Footer from "../components/Extra/Footer.jsx"
import { useLocation } from "react-router-dom";

function MainPage(){

  const location = useLocation();
  const email = location.state?.email || "Email não recebido";




  return(
      <>
        <h2>Bem-vindo, {email}</h2>
        <Note email={email} />  
        <Footer/>
      </>
    )
}

export default MainPage