const crossEl = document.getElementById("cross");
const cookieWindowEl = document.getElementById("cookie-window");

crossEl.addEventListener("click", ()=>{
    cookieWindowEl.classList.add("cookie-opacity");
})

