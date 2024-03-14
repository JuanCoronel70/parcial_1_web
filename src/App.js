import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comp1 from './components/component1';
import Comp2 from './components/component2';
import Comp3 from "./components/component3";
import './App.css';
import CatDetails from "./components/componentDetail";
import CatDetailsEd from "./components/componentDetailEditable";

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Comp1 />} />
          <Route path="/partsAccess" element={<Comp2 />} />
          <Route path="/partsNotAccess" element={<Comp3 />} />
          <Route path="/cat/:id" element={<CatDetails />} />
          <Route path="/catEdit/:id" element={<CatDetailsEd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
 }

export default App;
