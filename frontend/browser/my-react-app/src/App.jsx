import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage.jsx"
import MainPage from "./Pages/MainPage.jsx"


function App() {
    return(
      <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />  
      </Routes>
    );
}

export default App
