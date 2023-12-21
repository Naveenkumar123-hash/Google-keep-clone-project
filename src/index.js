import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";
import SidemenuProvider from "./Sidemenucontext/SidemenuProvider";
import TaskcontextProvider from "./Taskcontext/TaskcontextProvider";

ReactDOM.render(
<TaskcontextProvider>
<SidemenuProvider>
<App/>
</SidemenuProvider>
</TaskcontextProvider>
,document.getElementById("root"))