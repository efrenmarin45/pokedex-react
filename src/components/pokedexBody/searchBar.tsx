import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";

const SearchBar = () => {
	return (
		<div className='searchBar'>
			<input placeholder='Search for Pokemon'></input>
			<button className="submitBtn">
				<ArrowCircleRightSharpIcon sx={{ color: "#ffffff" }} fontSize='large' />
			</button>
		</div>
	);
};

export default SearchBar;
