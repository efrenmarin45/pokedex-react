interface PokeData {
	pokeData: {
		name: string;
		height: number;
		weight: number;
		types: [
			type: {
				type: {
                    name: string
                }
			}
		];
	};
}
const typeContainerMap: {[key: string]: string} = {
    Grass: 'grassContainer statsContainer',
    Water: 'waterContainer statsContainer',
    Fire: 'fireContainer statsContainer',
};

const typeContainerFlavorMap: {[key: string]: string} = {
    Grass: 'grassContainer speciesTextContainer',
    Water: 'waterContainer speciesTextContainer',
    Fire: 'fireContainer speciesTextContainer',
}; 

const typeTextMap: {[key: string]: string} = {
    Grass: 'grassTextBG textBG',
    Water: 'waterTextBG textBG',
    Fire: 'fireTextBG textBG',
}

export const getThemeContainerTypes = (pokeType: string) => {
    return typeContainerMap[pokeType] || 'statsContainer';
}

export const getThemeContainerFlavorTypes = (pokeType: string) => {
    return typeContainerFlavorMap[pokeType] || 'speciesTextContainer';
}

export const getThemeTextTypes = (pokeType: string) => {
    return typeTextMap[pokeType] || 'textBG';
}

const PokeStats = ({ pokeData }: PokeData) => {
	const rawType = pokeData.types[0].type.name;
    const pokeType = rawType.charAt(0).toUpperCase() + rawType.slice(1);
	const decWeight = pokeData.weight;
	const decHeight = pokeData.height;
	const pokeWeight = ((decWeight / 10) * 2.2).toFixed(1);
	const totalHeight = (decHeight / 10) * 3.28;
	const heightFeet = Math.floor(totalHeight);
	const heightInch = Math.round((totalHeight - heightFeet) * 12);
	const pokeHeight = `${heightFeet}'${heightInch}"`;


    const typeThemeContainer = getThemeContainerTypes(pokeType);
    const typeThemeText = getThemeTextTypes(pokeType);

	return (
		<div className={typeThemeContainer}>
			<div className={typeThemeText}>
				<p>Type</p>
				<p>{pokeType}</p>
			</div>
			<div className={typeThemeText}>
				<p>Height</p>
				<p>{pokeHeight}</p>
			</div>
			<div className={typeThemeText}>
				<p>Weight</p>
				<p>{pokeWeight} lbs</p>
			</div>
		</div>
	);
};

export default PokeStats;