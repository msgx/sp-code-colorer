import * as React from "react";
import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { TextField } from "office-ui-fabric-react/lib/TextField";

export class SourceView extends React.Component<any, any> {
	render() {
		const isSourceEmpty = this.props.source === null || /^\s*$/.test(this.props.source);
		return (
			<div className="ms-Grid">
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-sm12">
						<TextField id="spccSource"
							placeholder="Type or paste your source code here"
							autoFocus
							multiline
							resizable={false}
							value={this.props.source}
							onChanged={this.props.onChangeSource} />
					</div>
				</div>
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-sm12">
						<PrimaryButton
							text="Highlight"
							disabled={isSourceEmpty}
							onClick={this.handleClickHighlight}
							className="spcc-button-right" />
					</div>
				</div>
			</div>
		);
	}

	handleClickHighlight = () => {
		this.props.onChangeView("highlight");
	};
}
