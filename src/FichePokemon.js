import React from "react";
import { Link, useParams } from "react-router-dom";

import './FichePokemon.css';

export default function FichePokemon() {

    const { num } = useParams()

    return(
        <div>
            <h1>Pokémon N°{num}</h1>
            <Link to={"/pokemon/" + num + "/edit"}>
                <button>Modifier</button>
            </Link>
        </div>
    )


}