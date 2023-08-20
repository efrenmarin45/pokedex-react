interface PokeData {
	pokeData: {
		name: string;
		sprites: {
			other: {
				dream_world: {
					front_default: string | null;
				};
			};
		};
	};
}

export const PokeImage = ({ pokeData }: PokeData) => {
	const pokeDreamImage = pokeData?.sprites.other.dream_world.front_default;
	return (
		<div className='imgContainer'>
			<img
				src={pokeDreamImage || undefined}
				alt={pokeData.name}
				style={{ width: "100%", height: "100%", objectFit: "contain" }}
			/>
		</div>
	);
};