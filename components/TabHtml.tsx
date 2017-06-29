import * as React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";

export class TabHtml extends React.Component<any, any> {
	render() {
		return (
			<div className="spcc-tabcontent">
				<TextField
					label="You can copy the following HTML representation of the code:"
					multiline rows={10} resizable={false}
				/>
				<PrimaryButton text="Copy to clipboard" />
			</div>
		);
	}
}
