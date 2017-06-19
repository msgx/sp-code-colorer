import * as React from "react";
import * as ReactDOM from "react-dom";
import { ColorerTabs } from "./tabs";

let appContainer = document.getElementById("spccMain");
if (appContainer) {
	ReactDOM.render(<ColorerTabs />, appContainer);
}
