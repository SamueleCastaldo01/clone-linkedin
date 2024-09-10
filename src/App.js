import "./App.css"; // Importa lo stile principale
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile"; // Importa il componente della pagina del profilo
import AttackOnAldo from "./components/AttackOnAldo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/search/:searchTerm" element={<AttackOnAldo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
