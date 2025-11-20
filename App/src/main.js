import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <div>
      <h1>Hello!</h1>
      <h1>Welcome to the Memory Game!</h1>
      <h1>Please choose your version!</h1>
    </div>

    <div class="card">
      <div class="Versions">
        <button id="v1">Animals</button>
        <button id="v2">Poker Cards</button>
        <button id="v3">Flags</button>
      </div>
    </div>
  </div>
`;


