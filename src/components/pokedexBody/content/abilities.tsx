interface PokeData {
	pokeData: {
		basePokeData: any;
		pokeData: any;
		evolves_from_species: {
			name: string;
		};
	};
}

const Abilities = ({ pokeData }: PokeData) => {
	const rawAbilities = pokeData.basePokeData.abilities;
	const abilitiesList = [];

	for (let items of rawAbilities){
		abilitiesList.push(items.ability.name);
	}
	return (
		<div className='abilityContainer'>
			<div className='abilityStack'>
				{abilitiesList.map((ability, index) => (
				<p key={index}>{ability}</p>
				))}
			</div>
		</div>
	);
};

export default Abilities;
