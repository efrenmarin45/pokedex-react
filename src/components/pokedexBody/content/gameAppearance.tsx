import blue from "../../../assets/blueVersion.png"
import red from "../../../assets/redVersion.png"
import silver from "../../../assets/silverVersion.png"
import gold from "../../../assets/goldVersion.png"
import ruby from "../../../assets/rubyVersion.png"
import sapphire from "../../../assets/sapphireVersion.png"
import diamond from "../../../assets/diamondVersion.jpeg"
import pearl from "../../../assets/pearlVersion.jpeg"
import black from "../../../assets/blackVersion.png"
import white from "../../../assets/whiteVersion.png"
import xGame from "../../../assets/xVersion.png"
import yGame from "../../../assets/yVersion.png"
import moon from "../../../assets/moonVersion.png"
import sun from "../../../assets/sunVersion.png"
import scarlet from "../../../assets/scarletVersion.png"
import violet from "../../../assets/violetVersion.png"
import sword from "../../../assets/swordVersion.png"
import shield from "../../../assets/shieldVersion.png"

interface BasePokeData {
	pokeData: {
		game_indices: [
			version: {
				name: string;
			}
		];
	};
}

const gameMap = [
    {
        title: "blue",
        image: blue
    },
    {
        title: "red",
        image: red
    },
    {
        title: "silver",
        image: silver
    },
    {
        title: "gold",
        image: gold
    },
    {
        title: "ruby",
        image: ruby
    },
    {
        title: "sapphire",
        image: sapphire
    },
    {
        title: "diamond",
        image: diamond
    },
    {
        title: "pearl",
        image: pearl
    },
    {
        title: "black",
        image: black
    },
    {
        title: "white",
        image: white
    },
    {
        title: "x",
        image: xGame
    },
    {
        title: "y",
        image: yGame
    },
    {
        title: "sun",
        image: sun
    },
    {
        title: "moon",
        image: moon
    },
    {
        title: "sword",
        image: sword
    },
    {
        title: "shield",
        image: shield
    },
    {
        title: "scarlet",
        image: scarlet
    },
    {
        title: "violet",
        image: violet
    },

]

const GameAppearance = ({pokeData}: BasePokeData) => {
console.log(pokeData)
}

export default GameAppearance;