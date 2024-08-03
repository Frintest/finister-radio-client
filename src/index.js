import axios from "axios";

const PORT = "3002";

const instance = axios.create({
	baseURL: `https://airmonitor.servermc.ru:${PORT}`,
	// baseURL: `http://localhost:${PORT}`,
});

const response = await instance.get("/song");
const songUrl = response.data;

const audio = document.querySelector("#audio");
audio.src = songUrl;