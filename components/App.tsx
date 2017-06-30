import * as React from "react";
import * as ReactDOM from "react-dom";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { Pivot, PivotItem } from "office-ui-fabric-react/lib/Pivot";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeSelector } from "./ThemeSelector";
import { Highlighter } from "./Highlighter";

class App extends React.Component<any, any> {
	state = {
		source: null,
		language: "auto",
		theme: "default",
		tab: "tabSource"
	};

	render() {
		return (
			<Fabric>
				<Pivot selectedKey={this.state.tab} onLinkClick={this.handleChangeTab}>
					<PivotItem itemKey="tabSource" linkText="Source">
						<div className="ms-Grid">
							<div className="ms-Grid-row">
								<div className="ms-Grid-col ms-u-sm12">
									<TextField id="spccSource"
										label="Code:" placeholder="Type or paste your source code here"
										multiline resizable={false}
										value={this.state.source}
										onChanged={this.handleChangeSource} />
								</div>
							</div>
							<div className="ms-Grid-row">
								<div className="ms-Grid-col ms-u-sm12">
									<DefaultButton
										text="Highlight"
										iconProps={{ iconName: "Color" }}
										className="spcc-button"
										onClick={this.handleClickHighlight} />
								</div>
							</div>
						</div>
					</PivotItem>
					<PivotItem itemKey="tabHighlight" linkText="Highlight">
						<div className="ms-Grid">
							<div className="ms-Grid-row">
								<div className="ms-Grid-col ms-u-sm6">
									<LanguageSelector
										language={this.state.language}
										onChange={this.handleChangeLanguage} />
								</div>
								<div className="ms-Grid-col ms-u-sm6">
									<ThemeSelector
										theme={this.state.theme}
										onChange={this.handleChangeTheme} />
								</div>
							</div>
							<div className="ms-Grid-row">
								<div className="ms-Grid-col ms-u-sm12">
									<Highlighter
										source={this.state.source}
										language={this.state.language} />
								</div>
							</div>
							<div className="ms-Grid-row">
								<div className="ms-Grid-col ms-u-sm12">
									<DefaultButton
										text="Copy to clipboard"
										iconProps={{ iconName: "Copy" }}
										disabled
										className="spcc-button" />
								</div>
							</div>
						</div>
					</PivotItem>
					<PivotItem itemKey="tabHtml" linkText="HTML">
						<div className="ms-Grid">
							<div className="ms-Grid-row">
								<div className="ms-Grid-col ms-u-sm12">
									<TextField id="spccHtml"
										label="Here you can copy HTML representation of your code:"
										multiline resizable={false} />
								</div>
							</div>
							<div className="ms-Grid-row">
								<div className="ms-Grid-col ms-u-sm12">
									<DefaultButton
										text="Copy to clipboard"
										iconProps={{ iconName: "Copy" }}
										disabled
										className="spcc-button" />
								</div>
							</div>
						</div>
					</PivotItem>
				</Pivot>
			</Fabric>
		);
	}

	handleChangeTab = (tabItem) => {
		this.setState({ tab: tabItem.props.itemKey });
	};

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

	handleClickHighlight = () => {
		this.setState({ tab: "tabHighlight" });
	};
}

let appContainer = document.getElementById("spccApp");
if (appContainer) {
	ReactDOM.render(<App />, appContainer);
}
