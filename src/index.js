import axios from "axios";
import "./assets/logo.png";

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
const audio = document.querySelector("#audio");

songNameHtml.innerHTML = songName;
authorNameHtml.innerHTML = authorName;
audio.src = songSrc;
