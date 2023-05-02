const GlassBody = (props: { checkOpen: { isActive: boolean; setIsActive: (value: boolean) => void} }) => {
	const {isActive, setIsActive} = props.checkOpen;
	const OpenToggle = () => {
		setIsActive(true);
	};
	return (
		<>
			<div
				className='glassBody'
				style={{
					height: isActive ? "60vh" : "10px",
					background: "rgba(0, 255, 255, 0.5)",
					borderRadius: isActive ? "0px" : "16px",
				}}></div>
			<div className={ isActive ? "hide" : "pulseBG"}></div>
			<div
				className={isActive ? "open-pulse hide" : "open-pulse"}
				onClick={OpenToggle}></div>
		</>
	);
};

export default GlassBody;
