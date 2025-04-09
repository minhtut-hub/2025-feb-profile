const nav = document.querySelector("nav")
window.addEventListener("scroll", function(){
    if(window.scrollY > 123){
        nav.classList.add("bg-white")
    } else {
        nav.classList.remove('bg-white')
    }
})

const toggle = document.querySelector("#toggle")
const menu = document.querySelector(".menu")
toggle.addEventListener("click", function() {
    menu.classList.toggle("active");
})