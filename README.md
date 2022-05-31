# TP : Pokédex en ReactJS

Il conviendra de réaliser un Pokédex, basé sur la librairie React.js.

Le Pokédex est une base de données répertoriant différentes espèces de petits monstres combattants appelés Pokémon.
Il devra également garder trace des plus grands combats de Pokémon de l'Histoire.Un Pokédex contient des espèces de Pokémon.
Une espèce de Pokémon est identifiée par un nom unique. Elle est décrite par différentes caractéristiques morphologiques (couleur et taille moyenne), et un ou deux (jamais zéro) types (feu, eau, acier, ...).
Il existe naturellement plusieurs espèces du même type. Une espèce peut être l'évolution d'une autre espèce.
Par exemple, Raichu est l'évolution de Pikachu. On considère qu'une espèce ne peut évoluer, au plus, qu'en une seule autre espèce, et que deux espèces différentes ne peuvent jamais évoluer en une même espèce.
Il faut bien sûr afficher son aspect (image) sur l'application.

Cette application devra manipuler des données provenant d'au moins une API externe, avec notamment un CRUD le plus complet possible. 

Techniquement, il faudra que l'application comporte :

Au moins 4 écrans fonctionnellement différents
- Listing de données d'un Pokédex
- Donnant accès aux détails d'un élément
- Formulaires de création de données et de modification de données

Un mécanisme de persistance des données locales (Local Storage)

Les éléments suivants devront être obligatoirement présents :
-  Stockage dans le navigateur
-  package.json à jour

De manière optionnelle, vous pouvez utiliser :
-  Routage dynamique (plusieurs "pages")

# Groupe
- Cynthia RABEMANANTSOA 
- Sadio TOURE
- Mohamed MBENGUE

# Fonctionnalités
- Lecture des cartes de chaque pokémon avec le minimum d'informations (nom, numéro, type(s), faiblesse(s))
- Lien vers la page d'ajout
- Lien vers la page d'une fiche Pokémon (bouton Détails)

# Difficultés rencontrées
- Intégration
- GitHub pour certains d'entre nous (push sur notre branche)
- Gérer les exceptions liées à l'API externe (ex: caractères spéciaux, etc.)