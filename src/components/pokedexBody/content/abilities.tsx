const Abilities = (pokeData) => {
	const rawAbilities = pokeData.basePokeData.abilities;
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
