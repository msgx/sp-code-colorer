import * as React from "react";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";

export class ThemeSelector extends React.Component<any, any> {
	render() {
		return (
			<Dropdown
				label="Theme:"
				options={[
					{ key: "default", text: "Default" },
					{ key: "vs", text: "Visual Studio" },
					{ key: "github", text: "GitHub" },
					{ key: "atom-one", text: "Atom One" },
					{ key: "idea", text: "IDEA" },
					{ key: "xcode", text: "Xcode" },
					{ key: "foundation", text: "Foundation" },
					{ key: "ascetic", text: "Ascetic" },
					{ key: "arduino", text: "Arduino" },
					{ key: "docco", text: "Docco" }
				]}
				selectedKey={this.props.theme}
				onChanged={this.handleChangeTheme}
			/>
		);
	}

	handleChangeTheme = (item) => {
		this.props.onChange(item.key);
	};
}
