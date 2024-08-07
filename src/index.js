import axios from "axios";
import "./css/reset.css";
import "./css/fonts.css";
import "./css/main.css";
import "./css/media.css";
import "./assets/images/cassette-wrap.svg";
import "./assets/images/cassette-disc.png";
import "./assets/images/glass.png";

const PORT = 3002;
let baseURL = "";

if (process.env.NODE_ENV === "development") {
   baseURL = `http://localhost:${PORT}`;
}

if (process.env.NODE_ENV === "production") {
   baseURL = `https://airmonitor.servermc.ru:${PORT}`;
}

const instance = axios.create({
   baseURL,
});

const response = await instance.get("/song");
const songData = JSON.parse(response.data);
const songName = songData.songName;
const songSrc = songData.songSrc;
const authorName = songData.authorName;

const songNameHtml = document.querySelector(".songName");
const authorNameHtml = document.querySelector(".authorName");
songNameHtml.innerHTML = songName;
authorNameHtml.innerHTML = authorName;

const audio = new Audio(songSrc);

const buttons = document.querySelectorAll(".cassette__button-key");
const btnPlay = document.querySelector(
   ".cassette__button-key[aria-name='play']",
);
const btnPause = document.querySelector(
   ".cassette__button-key[aria-name='pause']",
);
const cassetteLeftDisc = document.querySelector(".cassette__disc--left");
const cassetteRightDisc = document.querySelector(".cassette__disc--right");

buttons.forEach((btn) => {
   btn.addEventListener("click", () => {
      const btnType = btn.getAttribute("aria-name");

      if (
         (btnType === "play" && !btn.classList.contains("active")) ||
         (btnType === "pause" &&
            btn.classList.contains("active") &&
            btnPlay.classList.contains("active"))
      ) {
         audio.play();
         cassetteLeftDisc.classList.add("active");
         cassetteRightDisc.classList.add("active");
      } else if (
         (btnType === "pause" && !btn.classList.contains("active")) ||
         (btnType === "play" && btn.classList.contains("active"))
      ) {
         audio.pause();
         cassetteLeftDisc.classList.remove("active");
         cassetteRightDisc.classList.remove("active");
      }

      if (btn.classList.contains("active")) {
         btn.classList.remove("active");
      } else {
         btn.classList.add("active");
      }
   });
});
