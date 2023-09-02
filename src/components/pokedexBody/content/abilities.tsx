const Abilities = (abilityData) => {
	const data = abilityData.abilityData.pokemonData;
	const rawAbilities = data.abilities;
	const abilitiesList: string[] = [];

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
