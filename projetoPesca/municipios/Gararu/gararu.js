
document.addEventListener("DOMContentLoaded", init, false);

var relatoPescador;

const texts = [
    "Comer peixe é bom, mas comer tilápia é melhor",
    "Água mole pedra dura, tanto bate até que fura",
    "Abacate quando nasce, se esparrama pelo chão"
]

async function init() {
    relatoPescador = document.getElementById("relatoPescador");
    relatoPescador.innerText = texts[0];
}

function nextText(){
    if(getCurrentText()+1 < texts.length){
        relatoPescador.innerText = texts[getCurrentText()+1]
    } else {
        relatoPescador.innerText = texts[0]
    }
}

function prevText(){
    if(getCurrentText() > 0){
        relatoPescador.innerText = texts[getCurrentText()-1]
    } else {
        relatoPescador.innerText = texts[texts.length-1]
    }
}

function getCurrentText(){
    return texts.indexOf(relatoPescador.innerText)
}




