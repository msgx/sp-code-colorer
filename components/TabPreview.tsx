import * as React from "react";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Highlighter } from "./Highlighter";

export class TabPreview extends React.Component<any, any> {
	render() {
		return (
			<div className="ms-Grid">
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-u-sm6">
						<Dropdown
							label="Language:"
							options={[
								{ key: "auto", text: "(autodetect)" },
								{ key: "js", text: "JavaScript" },
								{ key: "py", text: "Python" },
								{ key: "cs", text: "C#" },
								{ key: "cpp", text: "C++" }
							]}
							selectedKey={this.props.language}
							onChanged={this.handleChangeLanguage}
						/>
					</div>
					<div className="ms-Grid-col ms-u-sm6">
						<Dropdown
							label="Theme:"
							options={[
								{ key: "default", text: "(default)" },
								{ key: "monokai", text: "Monokai" },
								{ key: "dracula", text: "Dracula" }
							]}
							selectedKey={this.props.theme}
							onChanged={this.handleChangeTheme}
						/>
					</div>
				</div>
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-u-sm12">
						<Highlighter
							source={this.props.source}
							language={this.props.language}
						/>
					</div>
				</div>
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-u-sm12">
						<PrimaryButton text="Copy to clipboard" />
					</div>
				</div>
			</div>
		);
	}

	handleChangeLanguage = (item) => {
		this.props.onChangeLanguage(item.key);
	};

	handleChangeTheme = (item) => {
		this.props.onChangeTheme(item.key);
	};
}
