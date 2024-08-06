import axios from "axios";
import "./css/main.css";
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
// const volumeUp = document.querySelector(".cassette__button-key[aria-name='volume-up']");
// const volumeDown = document.querySelector(".cassette__button-key[aria-name='volume-down']");

buttons.forEach((btn) => {
   btn.addEventListener("click", () => {
      const btnType = btn.getAttribute("aria-name");

      if (
         (btnType === "play" && !btn.classList.contains("active")) ||
         (btnType === "pause" && btn.classList.contains("active"))
      ) {
         audio.play();
      } else if (
         (btnType === "pause" && !btn.classList.contains("active")) ||
         (btnType === "play" && btn.classList.contains("active"))
      ) {
         audio.pause();
      }

      // btnPlay.classList.remove("active");
      // btnPause.classList.remove("active");
      // volumeUp.classList.remove("active");
      // volumeDown.classList.remove("active");

      if (btn.classList.contains("active")) {
         btn.classList.remove("active");
      } else {
         btn.classList.add("active");
      }
   });
});
