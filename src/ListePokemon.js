import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './ListePokemon.css';

export default function ListePokemon() {
    
    const [pokemons,setPokemons] = useState([])

    useEffect( () => {

        const { REACT_APP_POKEMON_JSON } = process.env

        const getPokemons = async () => {
            const data = await axios(REACT_APP_POKEMON_JSON)
            setPokemons(data.data.pokemon)
        }

        getPokemons()

    }, [])

    return(
        <div className='ListePokemon'>
            <Link to="/ajouter-un-pokemon">
                <button className='ListePokemon-add'>Ajouter un pokémon au Pokédex</button>
            </Link>
            <div className='ListePokemon-all'>
                {
                    pokemons.map( p => {
                        return(
                            <div className='Pokemon' key={p.num}>
                                <h3>N°{p.num} - {p.name}</h3>
                                <img src={p.img} alt={p.name} />    
                                <ul>
                                    <li>TYPE : {p.type.length > 1 ? p.type[0] + " / " + p.type[1] : p.type[0]}</li>
                                    <li>
                                        FAIBLESSE : 
                                        {
                                            p.weaknesses.length === 1 ? p.weaknesses[0] : p.weaknesses.map( (w, i) => i < p.weaknesses.length - 1 ?  " " + w + ", " :  " " + w)
                                        }
                                    </li>
                                </ul>
                                <div>
                                    <Link to={"/pokemon/" + p.num}>
                                        <button className='Pokemon-details'>Détails...</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}