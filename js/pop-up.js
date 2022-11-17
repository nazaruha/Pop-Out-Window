const popUp_window = document.getElementById("registration-form");
const TitleWindow = document.getElementById("title");
const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");
const btnClose = document.getElementById("btnTitleClose");

btnYes.addEventListener("click", function () {
    popUp_window.style.display = "block";
});

btnNo.addEventListener("click", function () {
    btnNo.style.display = "none";
});

btnClose.addEventListener("click", function () {
    popUp_window.style.display = "none";
    TitleWindow.style.display = "block";
});
