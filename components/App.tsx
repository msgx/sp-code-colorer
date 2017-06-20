import * as React from "react";
import * as ReactDOM from "react-dom";
import { NavigationTabs } from "./NavigationTabs";

class App extends React.Component<undefined, undefined> {
	render() {
		return (
			<NavigationTabs/>
		);
	}
}

let appContainer = document.getElementById("spccApp");
if (appContainer) {
	ReactDOM.render(<App/>, appContainer);
}
