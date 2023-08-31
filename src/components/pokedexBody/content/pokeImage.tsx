import { Tilt } from "react-tilt";

const defaultOptions = {
	reverse: true,
	max: 35,
	perspective: 1000,
	scale: 1.1,
	speed: 1000,
	transition: true,
	axis: null,
	reset: true,
	easing: "cubic-bezier(.03,.98,.52,.99)",
};

export const PokeImage = (pokeData) => {
	const pokeDreamImage = pokeData?.sprites.other.dream_world.front_default;
	const pokeAltImage =
		pokeData?.sprites.other["official-artwork"].front_default;
	const mainPokeImage = pokeDreamImage != null ? pokeDreamImage : pokeAltImage;

	return (
		<Tilt options={defaultOptions}>
			<div className='imgContainer'>
				<img
					src={mainPokeImage}
					alt={pokeData.name}
					style={{ width: "100%", height: "100%", objectFit: "contain" }}
				/>
			</div>
		</Tilt>
	);
};
