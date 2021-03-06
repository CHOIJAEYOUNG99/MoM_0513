import { createRoot } from "react-dom/client";

import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
serviceWorkerRegistration.register();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App className="project" />);
