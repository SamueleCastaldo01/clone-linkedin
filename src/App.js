import './App.css';  // Importa lo stile principale
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';  // Importa il componente della pagina del profilo

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
