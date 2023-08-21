import { getThemeContainerFlavorTypes } from "./pokeStats";

interface PokeData {
	pokeData: {
		pokeData: any;
		basePokeData: any;
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
					name: string;
				};
			}
		];
	};
}

interface PokeTextProps extends PokeData, BasePokeData {}

const PokeText = ({ pokeData }: PokeTextProps) => {
	const flavorText = pokeData.pokeData?.flavor_text_entries;
	const rawType = pokeData.basePokeData.types[0]?.type.name || "";
	const pokeType = rawType.charAt(0).toUpperCase() + rawType.slice(1);
	const typeThemeContainer = getThemeContainerFlavorTypes(pokeType);
	const enText = flavorText.filter((item) => item.language.name === "en");
	const enFlavorText = enText[0].flavor_text;

	return (
		<div className={typeThemeContainer}>
				<p>{enFlavorText}</p>
		
		</div>
	);
};

export default PokeText;
