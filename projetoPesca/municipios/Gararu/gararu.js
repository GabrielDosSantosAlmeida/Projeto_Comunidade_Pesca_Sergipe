
document.addEventListener("DOMContentLoaded", init, false);

var relatoPescador;
var relatoPescadorContagem;

const texts = [
    "“O rio, acabou aquelas crôa, aquelas areiona que tinha, muita sujeira, o pessoal joga. Pronto, às vezes eu vou no rio bem cedo, porque eu gosto de lavar roupa, eu tenho um tanquinho, mas eu gosto de lavar mais no rio. Eu saio 5 horas, a gente cata, junta, eu tenho um amigo que pesca mais pra cá, a gente deixa no lixo, eu levo até um saco e trago.”",
    "“Então se a gente tivesse consciência de que aquilo ali é da gente mesmo e que a gente precisa e que o benefício é pra gente, já resolvia muito”",
    "“Se a associação desse sua ajuda melhor, o pescador daria pra dar uma forcinha, você comprar uma rede, mas que quando acaba a rede se torna caro pra você comprar, mas o jeito, compra apusso mas tem que comprar, aí ajeitar um barco, essas coisas.”",
    "“Não tem outra forma de renda aqui. Se você não tiver emprego, aqui não tem emprego, é pouco. Aí todo mundo corre pra pesca.”"
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




