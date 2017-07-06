import * as React from "react";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { TextField } from "office-ui-fabric-react/lib/TextField";

export class TabSource extends React.Component<any, any> {
	render() {
		const isSourceEmpty = this.props.source === null || /^\s*$/.test(this.props.source);
		return (
			<div className="ms-Grid">
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-u-sm12">
						<TextField id="spccSource"
							placeholder="Type or paste your source code here"
							autoFocus
							multiline
							resizable={false}
							value={this.props.source}
							onChanged={this.handleChangeText} />
					</div>
				</div>
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-u-sm12">
						<PrimaryButton
							text="Highlight"
							disabled={isSourceEmpty}
							className="spcc-button-right"
							onClick={this.handleClickHighlight} />
					</div>
				</div>
			</div>
		);
	}

	handleChangeText = (text) => {
		this.props.onSourceChanged(text);
	};

	handleClickHighlight = () => {
		this.props.onChangeTab("highlight");
	};
}
