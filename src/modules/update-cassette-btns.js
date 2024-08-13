const btnPlayIcon = `
	<svg
		class="cassette__button-play-icon"
		xmlns="http://www.w3.org/2000/svg"
		width="30"
		height="30"
		fill="none"
	>
		<path fill="#E2E8F0" d="M8 6h3v18H8zm11 0h3v18h-3z" />
	</svg>
`;

const btnPauseIcon = `
	<svg
		class="cassette__button-pause-icon"
		xmlns="http://www.w3.org/2000/svg"
		width="30"
		height="30"
		fill="none"
	>
		<path fill="#E2E8F0" d="M9.125 6.25v17.5L22.875 15 9.125 6.25Z" />
	</svg>
`;

const btnPlayInner = document.querySelector(".cassette__button-play-inner");

export const initPlayBtn = () => {
   btnPlayInner.insertAdjacentHTML("beforeend", btnPauseIcon);
};

export const changeOnPlayBtn = () => {
   const existIcon = document.querySelector(".cassette__button-pause-icon");
   btnPlayInner.removeChild(existIcon);
   btnPlayInner.insertAdjacentHTML("beforeend", btnPlayIcon);
};

export const changeOnPauseBtn = () => {
   const existIcon = document.querySelector(".cassette__button-play-icon");
   btnPlayInner.removeChild(existIcon);
   btnPlayInner.insertAdjacentHTML("beforeend", btnPauseIcon);
};
