import "../scss/App.scss";
import GreenColumn from "./GreenColumn";
import RedColumn from "./RedColumn";
import TitleColumn from "./TitleColumn";

function App() {
	return (
		<div className="app">
			<GreenColumn />
			<TitleColumn />
			<RedColumn />
		</div>
	);
}

export default App;
