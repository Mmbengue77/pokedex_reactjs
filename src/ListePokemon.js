/** 
 *  La liste des pokémons
 *  Partie fait par Cynthia RABEMANANTSOA (E3 DAD A)
*/

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Importer la feuille de style de la page ListePokemon
import './ListePokemon.css';

export default function ListePokemon() {
    
    // Déclarer et initialiser le hook où seront stockés tous les pokémons.
    const [pokemons,setPokemons] = useState([])

    useEffect( () => {

        // On doit récupérer la liste des pokémons via une API externe depuis une URL, ici format JSON.
        // Pour cela, on récupère l'URL stocké dans une variable REACT_APP_POKEMON_JSON qui se trouve
        // dans le fichier /.env puis on ajoute les données reçues dans notre liste pokemons.
        const getPokemons = async () => {
            const pokedex_data = await axios(process.env.REACT_APP_POKEMON_JSON)
            setPokemons(pokedex_data.data.pokemon)
        }

        // Pour que le code précédent fonctionne, on appelle la fonction.
        getPokemons()

    }, [])

    // Cette fonction permet de récupérer le bon URL dans le fichier /.env selon le type.
    const getTypeImage = (type) => {
        // Pour éviter les problèmes de fautes de frappe, on met le type passé en paramètre.
        const typeToLowerCase = type.toLowerCase()

        // Comme il y a plus de trois cas, un switch sur la variable typeToLowerCase est favorisé.
        // Si un cas comporte plusieurs possibilités, on les regroupe dans une liste et on vérifie
        // si typeToLowerCase se trouve dans cette liste. Sinon, on se contente de vérifier si oui
        // ou non, typeToLowerCase correspond à un cas à une possibilité.
        switch(typeToLowerCase) {
            case ['grass','bug','poison'].find(t => t === typeToLowerCase):
                return process.env.REACT_APP_TYPE_GRASS
            
            case 'fire':
                return process.env.REACT_APP_TYPE_FIRE

            case ['water','ice'].find(t => t === typeToLowerCase):
                return process.env.REACT_APP_TYPE_WATER

            case 'electric':
                return process.env.REACT_APP_TYPE_LIGHTNING

            case ['fighting','rock', 'ground'].find(t => t === typeToLowerCase):
                return process.env.REACT_APP_TYPE_FIGHTING

            case ['psychic','ghost', 'poison', 'fairy'].find(t => t === typeToLowerCase):
                return process.env.REACT_APP_TYPE_PSYCHIC

            case ['normal','flying', 'dragon'].find(t => t === typeToLowerCase):
                return process.env.REACT_APP_TYPE_COLORLESS

            case ['dark','poison'].find(t => t === typeToLowerCase):
                return process.env.REACT_APP_TYPE_DARKNESS

            case 'steel':
                return process.env.REACT_APP_TYPE_METAL

            case 'dragon':
                return process.env.REACT_APP_TYPE_DRAGON

            case 'fairy':
                return process.env.REACT_APP_TYPE_FAIRY

            default:
                return false

        }
    }

    // Cette fonction permet d'afficher les images selon le(s) type(s) passé(s) en paramètre.
    // On appellera la fonction getTypeImage pour récupérer les bonnes URLs.
    const displayType = (types) => {
        
        // Si un seul type est passé en paramètre, il suffit de l'afficher.
        // Sinon, il faut procéder en plusieurs étapes :
        //      - on convertit la liste des types en une chaîne de caractères dans laquelle
        //        chaque type est séparé d'une virgule grâce à la fonction join() ; le résultat
        //        sera stocké dans la constante typesName
        //      - ensuite, on stocke dans la constante typesURL toutes les URLs grâce à la
        //        fonction getTypeImage
        //      - il faut supprimer les doublons et stocker les URLs uniques dans la constante
        //        uniqueTypesURL
        //      - et enfin, on affiche les images les unes après les autres, dans un seul div ;
        //        le title prend comme valeur la constante typesName, permettant ainsi de voir
        //        le détails des types en survolant le div
        if(types.length === 1) {
            return(
                <div className='Pokemon-type' title={types[0]}>
                    <img src={getTypeImage(types[0])} alt={types[0]} />
                </div>
            )
        } else {

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
            <div className='ListePokemon-add_zone'>
                <Link to="/ajouter-un-pokemon">
                    <button className='ListePokemon-add'>Ajouter un pokémon au Pokédex</button>
                </Link>
            </div>
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