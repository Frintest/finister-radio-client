import { API } from "./api.js";
import { updateContent } from "./modules/update-audio-dom.js";
import {
   addHandlerClickPlayBtn,
   removeHandlerClickPlayBtn,
} from "./modules/update-dom.js";

export const appCreate = async () => {
   const btnPlay = document.querySelector(".cassette__button-key--play");
   let audio = null;
   const updateAudioData = (audioData) => {
      const url = audioData.url;
      const name = audioData.name;
      const authorName = audioData.authorName;
      updateContent(name, authorName);

      if (audio !== null) {
         removeHandlerClickPlayBtn();
         if (!audio.paused) {
            audio.pause();
         }
      }

      audio = new Audio(url);
      if (btnPlay.classList.contains("active")) {
         if (audio.paused) {
            audio.play();
         }
      }
      addHandlerClickPlayBtn(audio);
   };

   await API.requestAudio(updateAudioData);
};
