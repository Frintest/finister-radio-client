import "./css/reset.css";
import "./css/fonts.css";
import "./css/main.css";
import "./css/media.css";
import "./assets/images/cassette-wrap.svg";
import "./assets/images/cassette-disc.png";
import "./assets/images/cassette-glass.png";
import { appCreate } from "./app.js";

(async () => {
   await appCreate();
})();
