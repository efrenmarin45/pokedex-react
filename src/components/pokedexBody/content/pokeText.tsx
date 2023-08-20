import { getThemeContainerFlavorTypes } from "./pokeStats";

interface PokeData {
	pokeData: {
		flavor_text_entries: [
			{
				flavor_text: string | undefined;
			}
		];
	};
}

interface BasePokeData {
	basePokeData: {
		types: [
			type: {
				type: {
                    name: string
                }
			}
		];
	};
}

interface PokeTextProps extends PokeData, BasePokeData {}

const PokeText = ({ pokeData }: PokeTextProps) => {
	console.log(pokeData.pokeData);
	const flavorText = pokeData.pokeData?.flavor_text_entries[0]?.flavor_text || "Pokemon Description Not Available";
	const rawType = pokeData.basePokeData.types[0]?.type.name || "";
	const pokeType = rawType.charAt(0).toUpperCase() + rawType.slice(1);
	const typeThemeContainer = getThemeContainerFlavorTypes(pokeType);

	return (
		<div className={typeThemeContainer}>
			<p>{flavorText}</p>
		</div>
	);
};

export default PokeText;
