import * as React from "react";
import * as hljs from "../assets/highlight.custom";
import Clipboard from "clipboard/dist/clipboard";
import { CommandButton } from "office-ui-fabric-react/lib/Button";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeSelector } from "./ThemeSelector";

export class TabHighlight extends React.Component<any, any> {
	render() {
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
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-u-sm4">
						<CommandButton
							text="Back to code"
							iconProps={{ iconName: "PageLeft" }}
							onClick={this.handleClickBack} />
					</div>
					<div className="ms-Grid-col ms-u-sm8">
						<CommandButton id="cmdCopyRichText"
							text="Copy as Rich Text"
							iconProps={{ iconName: "Font" }}
							className="spcc-button-right" />
						<CommandButton id="cmdCopyHtml"
							text="Copy as HTML"
							iconProps={{ iconName: "Embed" }}
							className="spcc-button-right" />
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		const btnCopyRichText = document.getElementById("cmdCopyRichText");
		if (btnCopyRichText) {
			const cbHtml = new Clipboard(btnCopyRichText, { target: this.getPreviewElement });
			cbHtml.on("success", (e) => { console.log("Copy as Rich Text: SUCCESS"); }); //TODO: show success notification
			cbHtml.on("error", (e) => { console.log("Copy as Rich Text: ERROR"); });     //TODO: show error notification
		}
		const btnCopyHtml = document.getElementById("cmdCopyHtml");
		if (btnCopyHtml) {
			const cbHtml = new Clipboard(btnCopyHtml, { text: this.getHtmlCode });
			cbHtml.on("success", (e) => { console.log("Copy as HTML: SUCCESS"); }); //TODO: show success notification
			cbHtml.on("error", (e) => { console.log("Copy as HTML: ERROR"); });     //TODO: show error notification
		}
	}

	getPreviewElement() {
		return document.getElementById("spccPreview");
	}

	getHtmlCode() {
		const container = document.getElementById("spccPreview");
		return container ? container.innerHTML : "";
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

	handleClickBack = () => {
		this.props.onChangeTab("source");
	};
}
