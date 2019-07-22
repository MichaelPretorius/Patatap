var container = document.querySelector("#container");
var close = document.querySelector("#close");

close.addEventListener("click", function () {
    container.classList.add("close");
});