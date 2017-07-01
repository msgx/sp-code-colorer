import * as React from "react";
import * as hljs from "../assets/highlight.common";
import { DefaultButton, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { Checkbox } from "office-ui-fabric-react/lib/Checkbox";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeSelector } from "./ThemeSelector";

export class TabHighlight extends React.Component<any, any> {
	state = {
		asHtml: false
	};

	render() {
		return this.state.asHtml ? this.htmlView() : this.highlighterView();
	}

	highlighterView() {
		return (
			<div className="ms-Grid">
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-u-sm6">
						<ThemeSelector
							theme={this.props.theme}
							onChange={this.handleChangeTheme} />
					</div>
					<div className="ms-Grid-col ms-u-sm6">
						<LanguageSelector
							language={this.props.language}
							onChange={this.handleChangeLanguage} />
					</div>
				</div>
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-u-sm12">
						<div id="spccPreview">
							<pre><code className="hljs" dangerouslySetInnerHTML={{ __html: this.getHighlightedCode() }} /></pre>
						</div>
					</div>
				</div>
				{this.footerRow()}
			</div>
		);
	}

	htmlView() {
		return (
			<div className="ms-Grid">
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-u-sm12">
						<TextField id="spccHtml"
							value={this.getHighlightedCode()}
							multiline
							resizable={false} />
					</div>
				</div>
				{this.footerRow()}
			</div>
		);
	}

	footerRow() {
		return (
			<div className="ms-Grid-row">
				<div className="ms-Grid-col ms-u-sm4">
					<Checkbox
						label="HTML"
						checked={this.state.asHtml}
						onChange={this.handleChangeMode} />
				</div>
				<div className="ms-Grid-col ms-u-sm8">
					<PrimaryButton
						text="Copy to clipboard"
						iconProps={{ iconName: "Copy" }}
						className="spcc-button" />
					<DefaultButton
						text="Back to code"
						iconProps={{ iconName: "Code" }}
						className="spcc-button"
						onClick={this.handleClickBack} />
				</div>
			</div>
		);
	}

	getHighlightedCode() {
		const language = this.props.language || "auto";
		hljs.configure({ tabReplace: "    " });
		const hlObj = language === "auto" ? hljs.highlightAuto(this.props.source) : hljs.highlight(language, this.props.source);
		return hljs.fixMarkup(hlObj.value);
	}

	handleChangeTheme = (theme) => {
		if (/^[a-z\d\-]+$/.test(theme)) {
			const link = document.getElementById("hljsThemeLink");
			if (link) {
				link.setAttribute("href", "../Content/hljs/" + theme + ".css");
				this.props.onChangeTheme(theme);
			}
		}
	};

	handleChangeLanguage = (language) => {
		this.props.onChangeLanguage(language);
	};

	handleChangeMode = (e, asHtml) => {
		this.setState({ asHtml: asHtml });
	};

	handleClickBack = () => {
		this.props.onChangeTab("source");
	};
}
