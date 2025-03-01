import React, {useEffect, useState} from 'react';
import PokemonCard from '../components/PokemonCard';
import styles from "./PokemonPage.module.css";

const getPokemons = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        return response.json()
    }
    catch (error) {
        return (error.message);
    }
}

const PokePage = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons()
            .then(data => setPokemons(data.results))
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.pokemonList}>
                {pokemons.map((pokemon, index) => (
                    <PokemonCard
                        pokemon={pokemon}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default PokePage;