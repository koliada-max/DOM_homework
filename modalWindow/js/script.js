
const btnOpen = document.querySelector(".open");
const modalWindow = document.querySelector(".modal-wrapper");
const btnClose = document.querySelector(".close");

btnOpen.addEventListener("click", ()=>{
    modalWindow.style.display = "block";
});

btnClose.addEventListener("click", ()=>{
    modalWindow.style.display = "none";
});

