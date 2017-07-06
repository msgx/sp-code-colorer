import * as React from "react";
import * as Clipboard from "clipboard";
import * as Notyf from "notyf";
import * as hljs from "../assets/highlight.custom";
import { DefaultButton, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeSelector } from "./ThemeSelector";

export class TabHighlight extends React.Component<any, any> {
	notyf = new Notyf({ delay: 1500 });

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
						<DefaultButton
							text="Back to code"
							onClick={this.handleClickBack} />
					</div>
					<div className="ms-Grid-col ms-u-sm8">
						<PrimaryButton id="cmdCopyRichText"
							text="Copy as Rich Text"
							className="spcc-button-right" />
						<PrimaryButton id="cmdCopyHtml"
							text="Copy as HTML"
							className="spcc-button-right" />
					</div>
				</div>
			</div>
		);
	}

	componentDidMount() {
		const btnCopyRichText = document.getElementById("cmdCopyRichText");
		if (btnCopyRichText) {
			const cbHtml = new Clipboard(btnCopyRichText, { target: this.handleClickCopyRichText });
			cbHtml.on("success", this.handleCopySuccess);
			cbHtml.on("error", this.handleCopyError);
		}
		const btnCopyHtml = document.getElementById("cmdCopyHtml");
		if (btnCopyHtml) {
			const cbHtml = new Clipboard(btnCopyHtml, { text: this.handleClickCopyHtml });
			cbHtml.on("success", this.handleCopySuccess);
			cbHtml.on("error", this.handleCopyError);
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
		const container = document.getElementById("spccPreview");
		const themeLink = document.getElementById("hljsThemeLink") as HTMLLinkElement;
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
		return document.getElementById("spccPreview") as Element;
	};

	handleChangeTheme = (theme) => {
		if (/^[a-z\d\-]+$/.test(theme)) {
			const link = document.getElementById("hljsThemeLink");
			if (link) {
				link.setAttribute("href", "../Content/themes/" + theme + ".css");
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

	handleCopySuccess = (event) => {
		event.clearSelection();
		this.notyf.confirm("Code copied to clipboard");
	};

	handleCopyError = (event) => {
		this.notyf.alert("Copy to clipboard failed");
	};
}
