import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Home from "./components/home";
import Perfil from "./components/perfil";
import PerfilEditable from "./components/perfilEditable";

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/PerfilEditable" element={<PerfilEditable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
 }

export default App;
