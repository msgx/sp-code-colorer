import * as React from "react";
import * as hljs from "../assets/highlight.common";

export class Highlighter extends React.Component<any, any> {
	render() {
		var content;
		const source = this.props.source;
		if (source === null || source.match(/^\s*$/) !== null) {
			content = <span>Provide us with a code on <strong>Source</strong> tab to see the result here.</span>;
		}
		else {
			const hlObj = hljs.highlightAuto(source);
			content = <pre><code dangerouslySetInnerHTML={{ __html: hlObj.value }} /></pre>;
		}
		return (<div id="spccPreview">{content}</div>);
	}
}
