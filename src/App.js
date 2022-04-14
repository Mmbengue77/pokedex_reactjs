import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import ListePokemon from './ListePokemon';
import FichePokemon from "./FichePokemon";
import AddPokemon from "./AddPokemon";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ListePokemon />} />
        <Route path="/ajouter-un-pokemon" element={<AddPokemon />} />
        <Route path="/pokemon/:num" element={<FichePokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
