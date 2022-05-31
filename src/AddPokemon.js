import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './AddPokemon.css';

export default function AddPokemon() {

    const [id, setId] = useState(0);
    const [numero, setNumero] = useState("");
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [type, setType] = useState([]);
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [candy, setCandy] = useState("");
    const [egg, setEgg] = useState("");
    const [spawnChance, setSpawnChance] = useState(0);
    const [avgSpawns, setAvgSpawns] = useState(0);
    const [spawnTime, setSpawnTime] = useState("");
    const [multipliers, setMultipliers] = useState(null);
    const [weakness, setWeakness] = useState([]);
    const [prevEvolution, setPrevEvolution] = useState([]);
    const [nextEvolution, setNextEvolution] = useState([]);


    return(
        <h1>Ajouter un Pokémon</h1>
        /*<form>
            <label>
                <b>Nom du pokémon</b>
            </label>
            <br />
            <input 
                type="text"
                name="nom_pokemon"
                placeholder = "Nom du pokémon"
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            
        </form>*/
    )


}
