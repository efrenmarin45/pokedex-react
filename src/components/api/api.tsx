import { useState, useEffect } from "react";
import { MainClient } from "pokenode-ts";
import PokeImage from "../pokedexBody/pokeImage";
import PokeText from "../pokedexBody/pokeText";

interface FetchPokeProps {
	userSelection: string;
}

interface PokeData {
	name: string;
	sprites: {
		other?: {
			dream_world?: {
				front_default: string | null;
			};
		};
	};
}

interface SpeciesData {
	flavor_text_entries: {};
}

const FetchPokeData = ({ userSelection }: FetchPokeProps) => {
	const [pokemonData, setPokemonData] = useState<PokeData | null>(null);
	const [speciesData, setSpeciesData] = useState<SpeciesData | null>(null);
	const api = new MainClient();
	const pokeName = userSelection.toLowerCase();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data: PokeData = await api.pokemon.getPokemonByName(pokeName);
				const species = await api.pokemon.getPokemonSpeciesByName(pokeName);
				setPokemonData(data);
				setSpeciesData(species);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [pokeName]);

	return (
		<div className="centralDataDisplay">
			{!pokemonData ? (
				<p>Loading...</p>
			) : (
				<>
					<PokeImage pokeData={pokemonData} />
					<PokeText pokeData={speciesData} />
				</>
			)}
		</div>
	);
};

export default FetchPokeData;
