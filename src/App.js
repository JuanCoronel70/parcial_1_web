import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comp1 from './components/component1';
import Comp2 from './components/component2';
import Comp3 from "./components/component3";
import './App.css';
import CatDetails from "./components/componentDetail";
import CatDetailsEd from "./components/componentDetailEditable";
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
