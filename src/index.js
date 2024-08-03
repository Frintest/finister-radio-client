import axios from "axios";

// const api = "http://localhost:3002/song";
const api = "https://finister-radio.servermc.ru:3002/song";

const response = await axios.post(api);
const songUrl = response.data;
const audio = document.querySelector("#audio");
audio.src = songUrl;
