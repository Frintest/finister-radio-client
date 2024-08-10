import {
   addCassetteAnimation,
   removeCassetteAnimation,
} from "./animate-cassette.js";
import { API } from "../api.js";

const btnPlay = document.querySelector(".cassette__button-key--play");

const createOnClickPlayBtn = (audio) => {
   return () => {
      if (btnPlay.classList.contains("active")) {
         btnPlay.classList.remove("active");
         if (!audio.paused) {
            audio.pause();
         }
         removeCassetteAnimation();
      } else {
         btnPlay.classList.add("active");
         if (audio.paused) {
            API.sendCurrentTimeTrigger();
            const getCurrentTime = (currentTime) => {
               audio.currentTime = currentTime;
            };
            API.requestCurrentTime(getCurrentTime);
            audio.play();
         }
         addCassetteAnimation();
      }
   };
};

let onClickPlayBtn = null;

export const addHandlerClickPlayBtn = (audio) => {
   if (btnPlay) {
      onClickPlayBtn = createOnClickPlayBtn(audio);
      btnPlay.addEventListener("click", onClickPlayBtn);
   }
};

export const removeHandlerClickPlayBtn = () => {
   if (onClickPlayBtn !== null) {
      btnPlay.removeEventListener("click", onClickPlayBtn);
   }
   onClickPlayBtn = null;
};
