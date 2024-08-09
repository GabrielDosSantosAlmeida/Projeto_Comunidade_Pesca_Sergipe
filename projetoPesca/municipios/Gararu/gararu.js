
document.addEventListener("DOMContentLoaded", init, false);

var relatoPescador;
var relatoPescadorContagem;

const texts = [
    "O rio, acabou aquelas crôa, aquelas areiona que tinha, muita sujeira, o pessoal joga. Pronto, às vezes eu vou no rio bem cedo, porque eu gosto de lavar roupa, eu tenho um tanquinho, mas eu gosto de lavar mais no rio. Eu saio 5 horas, a gente cata, junta, eu tenho um amigo que pesca mais pra cá, a gente deixa no lixo, eu levo até um saco e trago.",
    "Frase 2"
]

async function init() {
    relatoPescador = document.getElementById("relatoPescador");
    relatoPescadorContagem = document.getElementById("relatoPescadorContagem");
    relatoPescador.innerText = texts[0];
    relatoPescadorContagem.innerText = "1/" + texts.length;
}

function nextText(){
    if(getCurrentText()+1 < texts.length){
        relatoPescador.innerText = texts[getCurrentText()+1]
    } else {
        relatoPescador.innerText = texts[0]
    }

    relatoPescadorContagem.innerText = getCurrentText()+1 + "/" + texts.length
}

function prevText(){
    if(getCurrentText() > 0){
        relatoPescador.innerText = texts[getCurrentText()-1]
    } else {
        relatoPescador.innerText = texts[texts.length-1]
    }

    relatoPescadorContagem.innerText = getCurrentText()+1 + "/" + texts.length
}

function getCurrentText(){
    return texts.indexOf(relatoPescador.innerText)
}




