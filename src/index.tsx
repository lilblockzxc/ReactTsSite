import { render } from "react-dom";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
/*корень проекта*/

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root") as HTMLElement
);
