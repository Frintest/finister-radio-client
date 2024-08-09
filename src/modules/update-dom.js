import {
   addCassetteAnimation,
   removeCassetteAnimation,
} from "./animate-cassette.js";

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
            audio.play();
         }
         addCassetteAnimation();
      }
   };
};

let onClickPlayBtn = null;

export const addHandlerClickPlayBtn = (audio) => {
   onClickPlayBtn = createOnClickPlayBtn(audio);
   if (btnPlay) {
      btnPlay.addEventListener("click", onClickPlayBtn);
   }
};

export const removeHandlerClickPlayBtn = () => {
   if (onClickPlayBtn !== null) {
      btnPlay.removeEventListener("click", onClickPlayBtn);
   }
   onClickPlayBtn = null;
};
