import { getThemeContainerFlavorTypes } from "./pokeStats";

const PokeText = (textData) => {
	const speciesData = textData.textData.speciesData;
	const baseData = textData.textData.pokemonData;
	const flavorText = speciesData.flavor_text_entries;
	const rawType = baseData.types[0].type.name;
	const pokeType = rawType?.charAt(0).toUpperCase() + rawType?.slice(1);
	const typeThemeContainer = getThemeContainerFlavorTypes(pokeType);
	const enText = flavorText.filter((item: { language: { name: string; }; }) => item.language.name === "en");
	const enFlavorText = enText[0].flavor_text;

	return (
		<div className={typeThemeContainer}>
			<p>{enFlavorText}</p>
		</div>
	);
};

export default PokeText;
