import axios from "axios";

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
const songUrl = response.data;

const audio = document.querySelector("#audio");
audio.src = songUrl;
