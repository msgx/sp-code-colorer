import * as React from "react";
import * as ReactDOM from "react-dom";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { TabSource } from "./TabSource";
import { TabHighlight } from "./TabHighlight";

class App extends React.Component<any, any> {
	state = {
		source: null,
		theme: "default",
		language: "auto",
		tab: "source"
	};

	render() {
		const tabContent = this.state.tab === "source" ?
			<TabSource
				source={this.state.source}
				onSourceChanged={this.handleChangeSource}
				onChangeTab={this.handleChangeTab} /> :
			<TabHighlight
				source={this.state.source}
				theme={this.state.theme}
				language={this.state.language}
				onChangeTheme={this.handleChangeTheme}
				onChangeLanguage={this.handleChangeLanguage}
				onChangeTab={this.handleChangeTab} />;
		return <Fabric>{tabContent}</Fabric>;
	}

	handleChangeSource = (text) => {
		this.setState({ source: text });
	};

	handleChangeTab = (tab) => {
		this.setState({ tab: tab });
	};

	handleChangeLanguage = (language) => {
		this.setState({ language: language });
	};

	handleChangeTheme = (theme) => {
		this.setState({ theme: theme });
	};
}

let appContainer = document.getElementById("spccApp");
if (appContainer) {
	ReactDOM.render(<App />, appContainer);
}
