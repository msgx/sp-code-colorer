import * as React from "react";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";

export class LanguageSelector extends React.Component<any, any> {
	render() {
		return (
			<Dropdown
				label="Language:"
				options={[
					{ key: "auto", text: "(autodetect)" },
					{ key: "js", text: "JavaScript" },
					{ key: "py", text: "Python" },
					{ key: "cs", text: "C#" },
					{ key: "cpp", text: "C++" }
				]}
				selectedKey={this.props.language}
				onChanged={this.handleChangeLanguage}
			/>
		);
	}

	handleChangeLanguage = (item) => {
		this.props.onChange(item.key);
	};
}
