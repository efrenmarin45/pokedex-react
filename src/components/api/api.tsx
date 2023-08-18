import { useState, useEffect } from "react";
import { MainClient } from "pokenode-ts";
import pokeGif from "../../assets/ash_pikachu.gif";
import { PokeImage } from "../pokedexBody/pokeImage";
import PokeText from "../pokedexBody/pokeText";
import PokeStats from "../pokedexBody/pokeStats";
import DropDownDrawers from "../pokedexBody/dropDown";

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
		<div className='centralDataDisplay'>
			{!pokemonData ? (
				<div className='searchInfo'>
					<p>Searching for Pokemon...</p>
					<img src={pokeGif} alt='Loading animation' style={{ width: "20vh" }} />
					<p>
						If search query does not generate results, please check the
						spelling.
					</p>
				</div>
			) : (
				<>
					<div className='topComponents'>
						<PokeImage pokeData={pokemonData} />
						<DropDownDrawers pokeData={speciesData} basePokeData={pokemonData} />
						{/* <PokeStats pokeData={pokemonData} />
						<PokeStats pokeData={pokemonData} /> */}
					</div>
					{/* <div className='bottomComponents'>
						<PokeText pokeData={speciesData} basePokeData={pokemonData} />
					</div> */}
				</>
			)}
		</div>
	);
};

export default FetchPokeData;
