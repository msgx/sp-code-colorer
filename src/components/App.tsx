import * as React from "react";
import * as ReactDOM from "react-dom";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { SourceView } from "./SourceView";
import { HighlightView } from "./HighlightView";

class App extends React.Component<any, any> {
	state = {
		source: null,
		theme: "default",
		language: "auto",
		view: "source"
	};

	render() {
		const viewBody = this.state.view === "source" ?
			<SourceView
				source={this.state.source}
				onChangeSource={this.handleChangeSource}
				onChangeView={this.handleChangeView} /> :
			<HighlightView
				source={this.state.source}
				theme={this.state.theme}
				language={this.state.language}
				onChangeTheme={this.handleChangeTheme}
				onChangeLanguage={this.handleChangeLanguage}
				onChangeView={this.handleChangeView} />;
		return <Fabric>{viewBody}</Fabric>;
	}

	handleChangeSource = (text) => {
		this.setState({ source: text });
	};

	handleChangeView = (view) => {
		this.setState({ view: view });
	};

	handleChangeLanguage = (language) => {
		this.setState({ language: language });
	};

	handleChangeTheme = (theme) => {
		this.setState({ theme: theme });
	};
}

let appContainer = document.getElementById("spccApp");
appContainer && ReactDOM.render(<App />, appContainer);
