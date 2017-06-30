import * as React from "react";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";

export class LanguageSelector extends React.Component<any, any> {
	render() {
		return (
			<Dropdown
				label="Language:"
				options={[
					{ key: "auto", text: "(autodetect)" },
					{ key: "cs", text: "C#" },
					{ key: "cpp", text: "C++" },
					{ key: "javascript", text: "JavaScript" },
					{ key: "typescript", text: "TypeScript" },
					{ key: "powershell", text: "PowerShell" },
					{ key: "java", text: "Java" },
					{ key: "python", text: "Python" },
					{ key: "ruby", text: "Ruby" },
					{ key: "perl", text: "Perl" },
					{ key: "fsharp", text: "F#" },
					{ key: "xml", text: "XML, HTML" },
					{ key: "css", text: "CSS" },
					{ key: "json", text: "JSON" },
					{ key: "sql", text: "SQL" },
					{ key: "bash", text: "Bash" },
					{ key: "shell", text: "Shell" },
					{ key: "ini", text: "INI" },
					{ key: "dns", text: "DNS" },
					{ key: "http", text: "HTTP" }
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
