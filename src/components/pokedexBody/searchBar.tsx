import { useState } from "react";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import FetchPokeData from "../api/api";

const SearchBar = () => {
	const [userNameSearch, setUserNameSearch] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserNameSearch(event.target.value);
		setSubmitted(false);
	};

	const handleSubmit = () => {
		if (userNameSearch && !submitted) {
			setSubmitted(true);
		}
	};

	return (
		<>
			<div className='searchBar'>
				<input
					placeholder='Search for Pokemon'
					value={userNameSearch}
					onChange={handleUserInput}
				/>
				<button className='submitBtn' onClick={handleSubmit}>
					<ArrowCircleRightSharpIcon
						sx={{ color: "#ffffff" }}
						fontSize='large'
					/>
				</button>
			</div>
			{submitted && <FetchPokeData userSelection={userNameSearch} />}
		</>
	);
};

export default SearchBar;
