import axios from "axios";

// const api = "https://localhost:3002/song";
const api = "https://airmonitor.servermc.ru:3002/song";

const response = await axios.post(api);
const songUrl = response.data;
const audio = document.querySelector("#audio");
audio.src = songUrl;
