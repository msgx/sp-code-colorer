import * as React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";

export class TabSource extends React.Component<any, any> {
	render() {
		return (
			<div className="ms-Grid">
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-u-sm12">
						<TextField id="spccSource"
							label="Code:"
							placeholder="Type or paste your source code here"
							multiline
							resizable={false}
							value={this.props.source}
							onChanged={this.handleChangeSource}
						/>
					</div>
				</div>
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-u-sm12">
						<PrimaryButton text="Preview" />
					</div>
				</div>
			</div>
		);
	}

	handleChangeSource = (text) => {
		this.props.onChangeSource(text);
	};
}
