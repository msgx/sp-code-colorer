import * as React from "react";
import * as ReactDOM from "react-dom";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { Pivot, PivotItem } from "office-ui-fabric-react/lib/Pivot";
import { TabSource } from "./TabSource";
import { TabPreview } from "./TabPreview";
import { TabHtml } from "./TabHtml";

class App extends React.Component<any, any> {
	state = {
		source: null,
		language: "auto",
		theme: "default"
	};

	render() {
		return (
			<Fabric>
				<Pivot>
					<PivotItem linkText="Source">
						<TabSource
							source={this.state.source}
							onChangeSource={this.handleChangeSource}
						/>
					</PivotItem>
					<PivotItem linkText="Highlight">
						<TabPreview
							source={this.state.source}
							language={this.state.language}
							theme={this.state.theme}
							onChangeLanguage={this.handleChangeLanguage}
							onChangeTheme={this.handleChangeTheme}
						/>
					</PivotItem>
					<PivotItem linkText="HTML">
						<TabHtml />
					</PivotItem>
				</Pivot>
			</Fabric>
		);
	}

	handleChangeSource = (text) => {
		this.setState({ source: text });
	};

	handleChangeLanguage = (language) => {
		this.setState({ language: language });
	};

	handleChangeTheme = (theme) => {
		if (/^[a-z\d\-]+$/.test(theme)) {
			const link = document.getElementById("hljsThemeLink");
			if (link) {
				link.setAttribute("href", "../Content/hljs/" + theme + ".css");
				this.setState({ theme: theme });
			}
		}
	};
}

let appContainer = document.getElementById("spccApp");
if (appContainer) {
	ReactDOM.render(<App />, appContainer);
}
