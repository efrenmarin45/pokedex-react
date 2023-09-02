const Evolution = (evolutionData) => {
	const data = evolutionData.evolutionData;
	const evolution = data.speciesData.evolves_from_species;
	const evolutionName =
		evolution?.name.charAt(0).toUpperCase() + evolution?.name.slice(1);
	const evolutionNum = evolution?.url;
	const regex = /\/(\d+)\/$/;
	const match = evolutionNum?.match(regex);
	const pokeNum = match ? match[1] : null;
	const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`;

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
