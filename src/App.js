import './App.css';  // Importa lo stile principale
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';  // Importa il componente della pagina del profilo
import SearchResults from './pages/SearchResults';  // Importa il componente per i risultati della ricerca

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/search/:searchTerm" element={<SearchResults />} /> {/* Aggiunge la route per i risultati della ricerca con il parametro di ricerca */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
