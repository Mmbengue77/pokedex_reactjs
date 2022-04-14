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

    // Récupérer l'URL de l'image du type
    const getTypeImage = (type) => {
        const {
            REACT_APP_TYPE_GRASS,
            REACT_APP_TYPE_FIRE,
            REACT_APP_TYPE_WATER,
            REACT_APP_TYPE_LIGHTNING,
            REACT_APP_TYPE_FIGHTING,
            REACT_APP_TYPE_PSYCHIC,
            REACT_APP_TYPE_COLORLESS,
            REACT_APP_TYPE_DARKNESS,
            REACT_APP_TYPE_METAL,
            REACT_APP_TYPE_DRAGON,
            REACT_APP_TYPE_FAIRY
        } = process.env

        const typeToLowerCase = type.toLowerCase()

        switch(typeToLowerCase) {
            case ['grass','bug','poison'].find(t => t === typeToLowerCase):
                return REACT_APP_TYPE_GRASS
            
            case 'fire':
                return REACT_APP_TYPE_FIRE

            case ['water','ice'].find(t => t === typeToLowerCase):
                return REACT_APP_TYPE_WATER

            case 'electric':
                return REACT_APP_TYPE_LIGHTNING

            case ['fighting','rock', 'ground'].find(t => t === typeToLowerCase):
                return REACT_APP_TYPE_FIGHTING

            case ['psychic','ghost', 'poison', 'fairy'].find(t => t === typeToLowerCase):
                return REACT_APP_TYPE_PSYCHIC

            case ['normal','flying', 'dragon'].find(t => t === typeToLowerCase):
                return REACT_APP_TYPE_COLORLESS

            case ['dark','poison'].find(t => t === typeToLowerCase):
                return REACT_APP_TYPE_DARKNESS

            case 'steel':
                return REACT_APP_TYPE_METAL

            case 'dragon':
                return REACT_APP_TYPE_DRAGON

            case 'fairy':
                return REACT_APP_TYPE_FAIRY

            default:
                return false

        }
    }

    // Afficher les images selon les types
    const displayType = (types) => {
        // S'il n'y a qu'un seul type à afficher
        if(types.length === 1) {
            return(
                <div className='Pokemon-type' title={types[0]}>
                    <img src={getTypeImage(types[0])} alt={types[0]} />
                </div>
            )
        } else { // S'il y en a plusieurs

            // Convertir l'array en string délimité par une virgule
            const typesName = types.join(', ')

            // Récupérer toutes les URL
            const typesURL = types.map( type => getTypeImage(type))

            // Supprimer les doublons
            const uniqueTypesURL = typesURL.filter( (type,i,typesURL) => typesURL.indexOf(type) === i )

            return(
                <div className='Pokemon-type' title={typesName}>
                    { uniqueTypesURL.map( (url,i) => <img key={types[i]} src={url} alt={types[i]} />) }
                </div>
            )

        }
    }

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
                                    <li className='Pokemon-li_type'>TYPE : { displayType(p.type) }</li>
                                    <li className='Pokemon-li_weaknesses'>FAIBLESSE : { displayType(p.weaknesses) }</li>
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