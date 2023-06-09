
// checks for an event(click) to be carried out before performing a function
document.querySelector(".menu-button").addEventListener("click", handleClick);
document.querySelector(".menu-list img").addEventListener("click", menuRemover);


function handleClick() {
    document.querySelector(".menu-list").classList.add("display");
    document.querySelector(".cover").classList.add("display");
}

function menuRemover() {
    document.querySelector(".menu-list").classList.remove("display");
    document.querySelector(".cover").classList.remove("display");
}