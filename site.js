// SELETOR DE GRADIENTE

var cor1 = document.querySelector(".cor1");
var cor2 = document.querySelector(".cor2");
var cor3 = document.querySelector(".cor3");
var cor4 = document.querySelector(".cor4");

var body = document.querySelector("body");

function gradiente()
    {
    body.style.backgroundImage="linear-gradient(45deg,"+cor1.value +","+cor2.value +","+cor3.value +")"
    }   
    cor1.addEventListener('change',gradiente);
    cor2.addEventListener('change',gradiente);
    cor3.addEventListener('change',gradiente);
    


