import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage.jsx"
import MainPage from "./Pages/MainPage.jsx"
import RegisterPage from "./Pages/RegisterPage.jsx";


function App() {
    return(
      <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />  
            <Route path ="/register" element={<RegisterPage />} />
      </Routes>
    );
}

export default App
