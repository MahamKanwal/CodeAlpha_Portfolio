const barBtn = document.getElementById("barBtn");
const menu = document.getElementById("menu");

const toggleMenu = () => {
    menu.classList.toggle("h-0");
    menu.classList.toggle("h-[220px]");
};

barBtn.addEventListener("click",toggleMenu);
