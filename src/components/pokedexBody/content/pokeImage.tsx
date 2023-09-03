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

export const PokeImage = (pokeImgData) => {
	const imgData = pokeImgData.pokeImgData;
	const pokeDreamImage = imgData.sprites.other.dream_world.front_default;
	const pokeAltImage = imgData.sprites.other["official-artwork"].front_default;
	const mainPokeImage = pokeDreamImage != null ? pokeDreamImage : pokeAltImage;

	return (
		<Tilt options={defaultOptions}>
			<div className='imgContainer'>
				<img
					src={mainPokeImage}
					alt={imgData.name}
					style={{ width: "100%", height: "100%", objectFit: "contain" }}
				/>
			</div>
		</Tilt>
	);
};
