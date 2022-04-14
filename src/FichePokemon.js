import React from "react";
import { useParams } from "react-router-dom";

import './FichePokemon.css';

export default function FichePokemon() {

    const { num } = useParams()

    return(
        <h1>Pokémon N°{num}</h1>
    )


}