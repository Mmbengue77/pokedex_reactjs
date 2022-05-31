import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import ListePokemon from './ListePokemon';
import FichePokemon from "./FichePokemon";
import AddPokemon from "./AddPokemon";
import UpdatePokemon from "./UpdatePokemon";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ListePokemon />} />
        <Route path="/ajouter-un-pokemon" element={<AddPokemon />} />
        <Route path="/pokemon/:num" element={<FichePokemon />} />
        <Route path="/pokemon/:num/edit" element={<UpdatePokemon />} />
      </Routes>
    </Router>
  );
}

export default App;
