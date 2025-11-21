let indiceActual=0;
function mostrarSiguiente(){
    const slides=document.querySelectorAll(".slide");
    slides[indiceActual].classList.add("active");
    indiceActual=(indiceActual+1)%slides.length;
    slides[indiceActual].classList.add("active")
}
document.addEventListener("DOMContentLoaded", ()=>{
document.querySelectorAll(".slide")[0].classList.add("active")
setInterval(mostrarSiguiente,3000);

});