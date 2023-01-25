/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "../scss/App.scss";
import GreenColumn from "./GreenColumn";
import RedColumn from "./RedColumn";
import TitleColumn from "./TitleColumn";

function App() {
	const [isNarrowScreen, setIsNarrowScreen] = useState(false);

	useEffect(() => {
		// set initial value
		const mediaWatcher = window.matchMedia("(max-width: 900px)");
		setIsNarrowScreen(mediaWatcher.matches);
		//watch for updates
		function updateIsNarrowScreen(e) {
			setIsNarrowScreen(e.matches);
		}
		mediaWatcher.addEventListener("change", updateIsNarrowScreen);

		// clean up after ourselves
		return function cleanup() {
			mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
		};
	});
	return (
		<div className="app">
			{!isNarrowScreen ? (
				<>
					<GreenColumn />
					<TitleColumn />
					<RedColumn />
				</>
			) : (
				<>
					<TitleColumn />
					<GreenColumn />
					<RedColumn />
				</>
			)}
		</div>
	);
}

export default App;
