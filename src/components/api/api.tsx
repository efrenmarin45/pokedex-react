import { useState, useEffect } from "react";
import { MainClient } from "pokenode-ts";
import pokeGif from "../../assets/ash_pikachu.gif";
import { PokeImage } from "../pokedexBody/content/pokeImage";
import DropDownDrawers from "../pokedexBody/dropDown";
import NoneShown from "../pokedexBody/content/noneShown";
import pokeError from "../../assets/togepiError.png";
import { Pokemon, Search, PokemonSpecies } from "../interface";
import MediaQuery from "react-responsive";

const FetchPokeData = ({ userSelection }: Search) => {
	const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);
	const [speciesData, setSpeciesData] = useState<PokemonSpecies | null>(null);
	const [apiError, setApiError] = useState(false);
	const api = new MainClient();
	let pokeName = userSelection.toLowerCase();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await api.pokemon.getPokemonByName(pokeName);
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
				<>
					<MediaQuery query='(min-width: 841px)'>
						<div className='topComponents'>
							<PokeImage pokeImgData={pokemonData} />
							<DropDownDrawers
								speciesData={speciesData}
								pokemonData={pokemonData}
							/>
						</div>
					</MediaQuery>
					<MediaQuery query='(max-width: 840px)'>
						<NoneShown />
					</MediaQuery>
				</>
			)}
		</div>
	);
};

export default FetchPokeData;
