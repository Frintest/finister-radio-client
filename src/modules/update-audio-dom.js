const audioNameHtml = document.querySelector(".audioName");
const authorNameHtml = document.querySelector(".authorName");

export const updateContent = (name, authorName) => {
   audioNameHtml.innerHTML = name;
   authorNameHtml.innerHTML = authorName;
};
