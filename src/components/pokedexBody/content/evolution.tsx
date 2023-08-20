interface PokeData {
	pokeData: {
		pokeData: any;
		evolves_from_species: {
			name: string;
		};
	};
}

const Evolution = ({ pokeData }: PokeData) => {
	const evolution = pokeData.pokeData?.evolves_from_species;
	const evolutionName =
		evolution?.name.charAt(0).toUpperCase() + evolution?.name.slice(1);
	const evolutionNum = evolution?.url;
	const regex = /\/(\d+)\/$/;
	const match = evolutionNum?.match(regex);
	const pokeNum = match ? match[1] : null;
	const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeNum}.svg`;

	return (
		<div className='evolutionContainer'>
			{evolution != null ? (
				<div className='evolutionStack'>
					<p>Evolves from {evolutionName}</p>
					<img src={imgURL} alt={evolution} />
				</div>
			) : (
				<div className='noEvolution'>
					<p>No Previous Evolution</p>
				</div>
			)}
		</div>
	);
};

export default Evolution;
