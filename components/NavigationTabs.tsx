import * as React from "react";
import { Label } from "office-ui-fabric-react/lib/Label";
import { Pivot, PivotItem } from "office-ui-fabric-react/lib/Pivot";

export class NavigationTabs extends React.Component<undefined, undefined> {
	render() {
		return (
			<Pivot>
				<PivotItem linkText="Source">
					<Label>Textarea for a source code will be placed here.</Label>
				</PivotItem>
				<PivotItem linkText="Preview">
					<Label>DIV with highlighted code will be displayed here.</Label>
				</PivotItem>
				<PivotItem linkText="HTML">
					<Label>Textarea with prepared HTML will be placed here.</Label>
				</PivotItem>
			</Pivot>
		);
	}
}
