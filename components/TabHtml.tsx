import * as React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";

export class TabHtml extends React.Component<any, any> {
	render() {
		return (
			<div className="ms-Grid">
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-u-sm12">
						<TextField id="spccHtml"
							label="Here you can copy HTML representation of your code:"
							multiline
							resizable={false}
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
}
