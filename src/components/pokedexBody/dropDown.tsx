import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import PokeText from "./content/pokeText";
import PokeStats from "./content/pokeStats";
import Evolution from "./content/evolution";

const DropDownDrawers = (pokeData, basePokeData) => {
	const [isOpenOne, setIsOpenOne] = useState(false);
	const [isOpenTwo, setIsOpenTwo] = useState(false);
	const [isOpenThree, setIsOpenThree] = useState(false);
	const [isOpenFour, setIsOpenFour] = useState(false);

	const handleDrawerClick = (drawerIndex) => {
		setIsOpenOne(drawerIndex === 1 ? !isOpenOne : false);
		setIsOpenTwo(drawerIndex === 2 ? !isOpenTwo : false);
		setIsOpenThree(drawerIndex === 3 ? !isOpenThree : false);
		setIsOpenFour(drawerIndex === 4 ? !isOpenFour : false);
	};

	return (
		<>
			<div className='ddContainer'>
				<div
					className='drawerOne'
					style={{ height: isOpenOne ? "25vh" : "5vh" }}>
					<div className='dd-topRow'>
						<div className='statsTitle'>Poke Stats</div>
						<button className='drawerBtn' onClick={() => handleDrawerClick(1)}>
							{isOpenOne ? (
								<ExpandLessIcon
									sx={{ backgroundColor: "transparent", color: "#ffffff" }}
									fontSize='large'
								/>
							) : (
								<ExpandMoreIcon
									sx={{ backgroundColor: "transparent", color: "#ffffff" }}
									fontSize='large'
								/>
							)}
						</button>
					</div>
					<div className='contentRow'>
						<PokeStats pokeData={pokeData} />
					</div>
				</div>
				<div
					className='drawerTwo'
					style={{ height: isOpenTwo ? "25vh" : "5vh" }}>
					<div className='dd-topRow'>
						<p className='statsTitle'>Evolution</p>
						<button className='drawerBtn' onClick={() => handleDrawerClick(2)}>
							{isOpenTwo ? (
								<ExpandLessIcon
									sx={{ backgroundColor: "transparent", color: "#ffffff" }}
									fontSize='large'
								/>
							) : (
								<ExpandMoreIcon
									sx={{ backgroundColor: "transparent", color: "#ffffff" }}
									fontSize='large'
								/>
							)}
						</button>
					</div>
					<div className='contentRow'>
						<Evolution pokeData={pokeData} basePokeData={basePokeData} />
					</div>
				</div>
				<div
					className='drawerThree'
					style={{ height: isOpenThree ? "25vh" : "5vh" }}>
					<div className='dd-topRow'>
						<p className='statsTitle'>First Appearance</p>
						<button className='drawerBtn' onClick={() => handleDrawerClick(3)}>
							{isOpenThree ? (
								<ExpandLessIcon
									sx={{ backgroundColor: "transparent", color: "#ffffff" }}
									fontSize='large'
								/>
							) : (
								<ExpandMoreIcon
									sx={{ backgroundColor: "transparent", color: "#ffffff" }}
									fontSize='large'
								/>
							)}
						</button>
					</div>
				</div>
				<div
					className='drawerFour'
					style={{
						height: isOpenFour ? "25vh" : "5vh",
					}}>
					<div className='dd-topRow'>
						<p className='statsTitle'>Top Abilities</p>
						<button className='drawerBtn' onClick={() => handleDrawerClick(4)}>
							{isOpenFour ? (
								<ExpandLessIcon
									sx={{ backgroundColor: "transparent", color: "#ffffff" }}
									fontSize='large'
								/>
							) : (
								<ExpandMoreIcon
									sx={{ backgroundColor: "transparent", color: "#ffffff" }}
									fontSize='large'
								/>
							)}
						</button>
					</div>
				</div>
				<div className='flavorTextContainer'>
					<PokeText pokeData={pokeData} />
				</div>
			</div>
		</>
	);
};

export default DropDownDrawers;