import { useState, useEffect } from "react";
import { MainClient } from "pokenode-ts";
import pokeGif from "../../assets/ash_pikachu.gif";
import { PokeImage } from "../pokedexBody/content/pokeImage";
import DropDownDrawers from "../pokedexBody/dropDown";
import pokeError from "../../assets/togepiError.png"

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
	const [apiError, setApiError] = useState(false);
	const api = new MainClient();
	let pokeName = userSelection.toLowerCase();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data: PokeData = await api.pokemon.getPokemonByName(pokeName);
				const species = await api.pokemon.getPokemonSpeciesByName(pokeName);
				setPokemonData(data);
				setSpeciesData(species);
			} catch (error) {
				setApiError(true);
				pokeName = "";
				console.error(error);
			}
		};

		fetchData();
	}, [pokeName]);

	return (
		<div className='centralDataDisplay'>
			{apiError ? (
				<div className='errorContainer'>
					<img src={pokeError} />
					<p className='errorHandlingText'>
						Uh Oh!
						<br /> We couldn't find the Pokemon you were looking for. <br />{" "}
						Please Try Again.
					</p>
				</div>
			) : !pokemonData ? (
				<div className='searchInfo'>
					<p>Searching for Pokemon...</p>
					<img
						src={pokeGif}
						alt='Loading animation'
						style={{ width: "20vh" }}
					/>
				</div>
			) : (
				<div className='topComponents'>
					<PokeImage pokeData={pokemonData} />
					<DropDownDrawers pokeData={speciesData} basePokeData={pokemonData} />
				</div>
			)}
		</div>
	);
};

export default FetchPokeData;
