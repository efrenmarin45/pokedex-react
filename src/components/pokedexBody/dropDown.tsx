import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import pokeball from "../../assets/pokeball3.png";
import PokeText from "./pokeText";
import PokeStats from "./pokeStats";

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
								sx={{ backgroundColor: "#b50000", color: "#ffffff" }}
								fontSize='large'
								/>
								) : (
									<ExpandMoreIcon
									sx={{ backgroundColor: "#b50000", color: "#ffffff" }}
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
						<p className='statsTitle'>Poke Stats</p>
						<button className='drawerBtn' onClick={() => handleDrawerClick(2)}>
							{isOpenTwo ? (
								<ExpandLessIcon
									sx={{ backgroundColor: "#b50000", color: "#ffffff" }}
									fontSize='large'
								/>
							) : (
								<ExpandMoreIcon
									sx={{ backgroundColor: "#b50000", color: "#ffffff" }}
									fontSize='large'
								/>
							)}
						</button>
					</div>
				</div>
				<div
					className='drawerThree'
					style={{ height: isOpenThree ? "25vh" : "5vh" }}>
					<div className='dd-topRow'>
						<p className='statsTitle'>Poke Stats</p>
						<button className='drawerBtn' onClick={() => handleDrawerClick(3)}>
							{isOpenThree ? (
								<ExpandLessIcon
									sx={{ backgroundColor: "#b50000", color: "#ffffff" }}
									fontSize='large'
								/>
							) : (
								<ExpandMoreIcon
									sx={{ backgroundColor: "#b50000", color: "#ffffff" }}
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
						position: "absolute",
						width: "100%",
						zIndex: 2,
					}}>
					<div className='dd-topRow'>
						<p className='statsTitle'>Poke Stats</p>
						<button className='drawerBtn' onClick={() => handleDrawerClick(4)}>
							{isOpenFour ? (
								<ExpandLessIcon
									sx={{ backgroundColor: "#b50000", color: "#ffffff" }}
									fontSize='large'
								/>
							) : (
								<ExpandMoreIcon
									sx={{ backgroundColor: "#b50000", color: "#ffffff" }}
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
