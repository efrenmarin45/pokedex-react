import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const CloseBtn = (props: {
	checkClosed: { isActive: boolean; setIsActive: (value: boolean) => void };
}) => {
	const { isActive, setIsActive } = props.checkClosed;

	const CloseDex = () => {
		setIsActive(false);
	};

	return (
		<>
			{isActive ? (
				<button className='closeBtn' onClick={CloseDex}>
					<CancelPresentationIcon sx={{ color: "#ffffff" }} fontSize='medium' />{" "}
				</button>
			) : (
				<button className='hideInSight'>
					<CancelPresentationIcon sx={{ color: "#dc3939" }} fontSize='medium' />
				</button>
			)}
		</>
	);
};

export default CloseBtn;
