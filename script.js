const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById ("proximo");
const botaoVoltar = document.getElementById("anterior");
const nomeMusica = document.getElementById('musica')
const audioMusica = document.getElementById("audio-musica");

const numerodeMusicas = 16;
let taTocando = 0;
let musicaAtual = 1;

function tocarFaixa() {
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
    audioMusica.play();
    taTocando = 1;
}
function pausarFaixa(){
    audioMusica.pause();
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
}

function tocarOuPausar(){
    if ( taTocando === 0 ) {
        tocarFaixa ();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}


function proximaMusica() {
   if (musicaAtual === numerodeMusicas) {
    musicaAtual = 1;
    } else{
     musicaAtual = musicaAtual + 1;
    }
      
    audioMusica.src = "./musicas/" + musicaAtual + ".mp3"
    tocarFaixa();
    taTocando = 1;
}
    
function voltarMusica() {
    if (musicaAtual === 1) {
     musicaAtual = numerodeMusicas;
     } else{
      musicaAtual = musicaAtual - 1;
     }
       
     audioMusica.src = "./musicas/" + musicaAtual + ".mp3"
     tocarFaixa();
     taTocando = 1;
 }
     

botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoAvancar.addEventListener("click", proximaMusica);
botaoVoltar.addEventListener("click", voltarMusica )