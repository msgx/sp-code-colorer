import * as React from "react";
import * as hljs from "../assets/highlight.common";

export class Highlighter extends React.Component<any, any> {
	render() {
		let content;
		const source = this.props.source;
		const language = this.props.language || "auto";
		if (source === null || /^\s*$/.test(source)) {
			content = <div className="spcc-message">Provide us with a code on <strong>Source</strong> tab to see the result here.</div>;
		}
		else {
			hljs.configure({ tabReplace: "    " });
			const hlObj = language === "auto" ? hljs.highlightAuto(source) : hljs.highlight(language, source);
			const hlHtml = hljs.fixMarkup(hlObj.value);
			content = <pre><code className="hljs" dangerouslySetInnerHTML={{ __html: hlHtml }} /></pre>;
		}
		return (<div id="spccPreview">{content}</div>);
	}
}
