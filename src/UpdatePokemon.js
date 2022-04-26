import React from "react";
import { useParams } from "react-router-dom";

import './UpdatePokemon.css';

export default function UpdatePokemon() {

    const { num } = useParams()

    return(
        <h1>Modifier les informations du Pokémon N°{num}</h1>
    )


}