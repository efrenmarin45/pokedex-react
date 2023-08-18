import { useState, useEffect } from "react";
import SearchBar from "./searchBar";

const GlassBody = (props: {
	checkOpen: { isActive: boolean; setIsActive: (value: boolean) => void };
}) => {
	const { isActive, setIsActive } = props.checkOpen;
	const [showSearchBar, setShowSearchBar] = useState(false);

	const OpenToggle = () => {
		setIsActive(true);
	};

	useEffect(() => {
		let timer: number | undefined;

		if (isActive) {
			timer = setTimeout(() => {
				setShowSearchBar(true);
			}, 900);
		}

		return () => clearTimeout(timer);
	}, [isActive]);

	return (
		<>
			<div
				className='glassBody'
				style={{
					height: isActive ? "60vh" : "10px",
					background: "rgba(0, 255, 255, 0.5)",
					borderRadius: isActive ? "0px" : "16px",
				}}>
				{isActive && showSearchBar && <SearchBar />}
			</div>
			<div className={isActive ? "hide" : "pulseBG"}></div>
			<div
				className={isActive ? "open-pulse hide" : "open-pulse"}
				onClick={OpenToggle}></div>
		</>
	);
};

export default GlassBody;
