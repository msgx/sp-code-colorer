import * as React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";

export class TabSource extends React.Component<any, any> {
	render() {
		return (
			<div className="spcc-tabcontent">
				<TextField
					id="spccSource"
					label="Code:"
					placeholder="Type or paste your source code here"
					maxLength={16384}
					multiline rows={10} resizable={false}
					required
					value={this.props.source}
					onChanged={this.handleChangeSource}
				/>
				<PrimaryButton text="Preview" />
			</div>
		);
	}

	handleChangeSource = (text) => {
		this.props.onChangeSource(text);
	};
}
