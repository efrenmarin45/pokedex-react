import { useState } from "react";
import "../pokedexBody/index.scss";
import GlassBody from "./glass-body";
import CloseBtn from "./close";
import LightIndicator from "./indicator-lights";

const Container = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className='container'>
			<div className='blockContainer'>
				<div className='blocks-top'>
					<div className='top-user-actions'>
						<CloseBtn checkClosed={{ isActive, setIsActive }} />
						<LightIndicator />
					</div>
					<div className='outer-ring-top'>
						<div className='inner-ring-top'>
							<div className='inner-center-ring-top'></div>
						</div>
					</div>
				</div>
				<GlassBody checkOpen={{ isActive, setIsActive }} />
				<div className='blocks-bottom' style={{margin: isActive ? "0 auto" : "5px auto 0 auto"}}>
					<div className='outer-ring-bottom'>
						<div className='inner-ring-bottom'>
							<div className='inner-center-ring-bottom'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Container;
