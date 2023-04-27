import { RefObject, useRef, useEffect } from "react";

export const lightIntervals = (
	redLightRef: RefObject<HTMLDivElement>,
	yellowLightRef: RefObject<HTMLDivElement>,
	greenLightRef: RefObject<HTMLDivElement>
) => {
	let selection = Math.floor(Math.random() * 3) + 1;

	if (selection === 1) {
		redLightRef.current?.style.setProperty("background-color", "#ff0000");
		yellowLightRef.current?.style.setProperty("background-color", "#929219");
		greenLightRef.current?.style.setProperty("background-color", "#00ff0099");
	} else if (selection === 2) {
		redLightRef.current?.style.setProperty("background-color", "#4e1515");
		yellowLightRef.current?.style.setProperty("background-color", "#ffff00");
		greenLightRef.current?.style.setProperty("background-color", "#00ff0099");
	} else if (selection === 3) {
		redLightRef.current?.style.setProperty("background-color", "#4e1515");
		yellowLightRef.current?.style.setProperty("background-color", "#929219");
		greenLightRef.current?.style.setProperty("background-color", "#00ff00");
	}
};

const LightIndicator = () => {
	const redLightRef = useRef<HTMLDivElement>(null);
	const yellowLightRef = useRef<HTMLDivElement>(null);
	const greenLightRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let intervalID: number | undefined;
		intervalID = setInterval(
			() => lightIntervals(redLightRef, yellowLightRef, greenLightRef),
			1500
		);
		return () => clearInterval(intervalID);
	});

	return (
		<div className='indicator-lights'>
			<div className='light-trio' ref={redLightRef}></div>
			<div className='light-trio' ref={yellowLightRef}></div>
			<div className='light-trio' ref={greenLightRef}></div>
		</div>
	);
};

export default LightIndicator;
