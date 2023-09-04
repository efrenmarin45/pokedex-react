import pokeError from "../../../assets/togepiError.png";

const NoneShown = () => {
	return (
		<div className='errorContainer'>
			<img src={pokeError} />
			<p className='errorHandlingText'>
				Uh Oh!
				<br /> Seems like we've hit a bit of a snag! <br /> This Pokedex is best
				viewed full width on a desktop.
			</p>
		</div>
	);
};

export default NoneShown;
