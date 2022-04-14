import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
            <button className='ListePokemon-add'>Ajouter un pokémon au Pokédex</button>
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
                                    <button className='Pokemon-details'>Détails...</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}