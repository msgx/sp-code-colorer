import * as React from "react";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";

export class ThemeSelector extends React.Component<any, any> {
	render() {
		return (
			<Dropdown
				label="Theme:"
				options={[
					{ key: "default", text: "Default" },
					{ key: "github", text: "GitHub" },
					{ key: "atom-one-light", text: "Atom One Light" },
					{ key: "vs", text: "Visual Studio Light" },
					{ key: "foundation", text: "Foundation" },
					{ key: "solarized-light", text: "Solarized Light" },
					{ key: "darcula", text: "Darcula" },
					{ key: "atom-one-dark", text: "Atom One Dark" },
					{ key: "vs2015", text: "Visual Studio Dark" },
					{ key: "obsidian", text: "Obsidian" },
					{ key: "monokai", text: "Monokai" },
					{ key: "solarized-dark", text: "Solarized Dark" }
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
