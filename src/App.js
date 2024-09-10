import "./App.css"; // Importa lo stile principale
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile"; // Importa il componente della pagina del profilo
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/search/:searchTerm" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
