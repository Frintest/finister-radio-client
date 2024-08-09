const cassetteLeftDisc = document.querySelector(".cassette__disc--left");
const cassetteRightDisc = document.querySelector(".cassette__disc--right");

export const addCassetteAnimation = () => {
   cassetteLeftDisc.classList.add("active");
   cassetteRightDisc.classList.add("active");
};

export const removeCassetteAnimation = () => {
   cassetteLeftDisc.classList.remove("active");
   cassetteRightDisc.classList.remove("active");
};
