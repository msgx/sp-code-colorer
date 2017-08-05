import * as React from "react";
import * as Clipboard from "clipboard";
import * as Notyf from "notyf";
import * as hljs from "../highlight.custom";
import { CommandButton, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeSelector } from "./ThemeSelector";

const previewContainerId = "spccPreview";
const cmdCopyRichTextId = "spccCopyRichText";
const cmdCopyHtmlId = "spccCopyHtml";
const hljsThemeLinkId = "hljsThemeLink";

export class HighlightView extends React.Component<any, any> {
	notyf = new Notyf({ delay: 1500 });

	render() {
		this.applyTheme();
		return (
			<div className="ms-Grid">
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-sm6">
						<ThemeSelector
							theme={this.props.theme}
							onChange={this.props.onChangeTheme} />
					</div>
					<div className="ms-Grid-col ms-sm6">
						<LanguageSelector
							language={this.props.language}
							onChange={this.props.onChangeLanguage} />
					</div>
				</div>
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-sm12">
						<div id={previewContainerId}>
							<pre><code className="hljs" dangerouslySetInnerHTML={{ __html: this.getHighlightedCode() }} /></pre>
						</div>
					</div>
				</div>
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-sm4">
						<CommandButton
							text="Back to code"
							iconProps={{ iconName: "DoubleChevronLeftMed" }}
							onClick={this.handleClickBack} />
					</div>
					<div className="ms-Grid-col ms-sm8">
						<PrimaryButton id={cmdCopyRichTextId}
							text="Copy as Rich Text"
							className="spcc-button-right" />
						<PrimaryButton id={cmdCopyHtmlId}
							text="Copy as HTML"
							className="spcc-button-right" />
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		const btnCopyRichText = document.getElementById(cmdCopyRichTextId);
		if (btnCopyRichText) {
			const cbHtml = new Clipboard(btnCopyRichText, { target: this.handleClickCopyRichText });
			cbHtml.on("success", this.handleCopySuccess);
			cbHtml.on("error", this.handleCopyError);
		}
		const btnCopyHtml = document.getElementById(cmdCopyHtmlId);
		if (btnCopyHtml) {
			const cbHtml = new Clipboard(btnCopyHtml, { text: this.handleClickCopyHtml });
			cbHtml.on("success", this.handleCopySuccess);
			cbHtml.on("error", this.handleCopyError);
		}
	}

	applyTheme() {
		if (/^[a-z\d\-]+$/.test(this.props.theme)) {
			const link = document.getElementById(hljsThemeLinkId);
			link && link.setAttribute("href", "../Content/themes/" + this.props.theme + ".css");
		}
	}

	getHighlightedCode(): string {
		const language = this.props.language || "auto";
		hljs.configure({ tabReplace: "    " });
		const hlObj = language === "auto" ? hljs.highlightAuto(this.props.source) : hljs.highlight(language, this.props.source);
		return hljs.fixMarkup(hlObj.value);
	}

	handleClickCopyHtml = () => {
		let html = "";
		const container = document.getElementById(previewContainerId);
		const themeLink = document.getElementById(hljsThemeLinkId) as HTMLLinkElement;
		if (container && themeLink) {
			let clone = container.cloneNode(true) as HTMLElement;
			const cssRules = (themeLink.sheet as CSSStyleSheet).cssRules;
			for (let r = 0; r < cssRules.length; r++) {
				let rule = cssRules[r] as CSSStyleRule;
				let elements = clone.querySelectorAll(rule.selectorText);
				for (let e = 0; e < elements.length; e++) {
					let element = elements[e] as HTMLElement;
					element.style.cssText += rule.style.cssText;
				}
			}
			html = clone.innerHTML;
		}
		return html;
	};

	handleClickCopyRichText = () => {
		return document.getElementById(previewContainerId) as Element;
	};

	handleClickBack = () => {
		this.props.onChangeView("source");
	};

	handleCopySuccess = (event) => {
		event.clearSelection();
		this.notyf.confirm("Code copied to clipboard");
	};

	handleCopyError = (event) => {
		this.notyf.alert("Copy to clipboard failed");
	};
}
