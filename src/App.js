import "./App.css"; // Importa lo stile principale
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile"; // Importa il componente della pagina del profilo
import SearchPage from "./pages/SearchPage";
import TestPostsPage from "./components/TestPostsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/search/:searchTerm" element={<SearchPage />} />
        <Route path="/posts" element={<TestPostsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
