import blue from "../../../assets/blueVersion.png";
import red from "../../../assets/redVersion.png";
import silver from "../../../assets/silverVersion.png";
import gold from "../../../assets/goldVersion.png";
import ruby from "../../../assets/rubyVersion.png";
import sapphire from "../../../assets/sapphireVersion.png";
import diamond from "../../../assets/diamondVersion.jpeg";
import pearl from "../../../assets/pearlVersion.jpeg";
import black from "../../../assets/blackVersion.png";
import white from "../../../assets/whiteVersion.png";
import xGame from "../../../assets/xVersion.png";
import sun from "../../../assets/sunVersion.png";
import violet from "../../../assets/violetVersion.png";
import sword from "../../../assets/swordVersion.png";
import { Tilt } from "react-tilt";

const gameMap = [
	{
		title: "Blue Version",
		generation: "blue",
		image: blue,
	},
	{
		title: "Red Version",
		generation: "red",
		image: red,
	},
	{
		title: "Silver Version",
		generation: "silver",
		image: silver,
	},
	{
		title: "Gold Version",
		generation: "gold",
		image: gold,
	},
	{
		title: "Ruby Version",
		generation: "ruby",
		image: ruby,
	},
	{
		title: "Sapphire Version",
		generation: "sapphire",
		image: sapphire,
	},
	{
		title: "Diamond Version",
		generation: "diamond",
		image: diamond,
	},
	{
		title: "Pearl Version",
		generation: "pearl",
		image: pearl,
	},
	{
		title: "Black Version",
		generation: "black",
		image: black,
	},
	{
		title: "White Version",
		generation: "white",
		image: white,
	},
	{
		title: "X Version",
		generation: "generation-vi",
		image: xGame,
	},
	{
		title: "Sun Version",
		generation: "generation-vii",
		image: sun,
	},
	{
		title: "Sword Version",
		generation: "generation-viii",
		image: sword,
	},
	{
		title: "Violet Version",
		generation: "generation-ix",
		image: violet,
	},
];

const GameAppearance = (gameData) => {
	const data = gameData.gameData;
	const gameIndices = data.pokemonData.game_indices[0]?.version.name;
	const pokeGeneration = data.speciesData.generation.name;
	const gameVersion = gameMap.find(
		(item) =>
			item.generation === gameIndices || item.generation === pokeGeneration
	);

	return (
		<div className='gameAppearanceContainer'>
			<div className='gameStack'>
				<p>
					First appeared on <br />
					Pokemon {gameVersion?.title}
				</p>
				{/* <Tilt> */}
					<img
						src={gameVersion?.image}
					
					/>
				{/* </Tilt> */}
			</div>
		</div>
	);
};

export default GameAppearance;
