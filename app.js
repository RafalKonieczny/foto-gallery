const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP__ClOSE = document.querySelector(".popup__close");
const POPUP__IMG = document.querySelector(".popup__img");


THUMBNAILS.forEach((thumbnail) => {
    thumbnail.addEventListener("click", (e) => {
        POPUP.classList.remove("hidden");
        POPUP__IMG.src= e.target.src;
    })
});

POPUP__ClOSE.addEventListener("click", () => {
    POPUP.classList.add("hidden");
});


