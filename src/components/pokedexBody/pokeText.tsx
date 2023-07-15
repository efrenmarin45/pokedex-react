interface PokeData {
	pokeData: {
		flavor_text_entries: [
			{
				flavor_text: string | undefined;
			}
		];
	};
}

const PokeText = ({ pokeData }: PokeData) => {
	const flavorText = pokeData !== undefined && pokeData.flavor_text_entries[0].flavor_text;
	console.log(pokeData);
	console.log(flavorText);
	return (
		<div>
			<p>{flavorText}</p>
		</div>
	);
};

export default PokeText;
