
const botaoPlaypause = document.getElementById('play-pause');
const audio =document.getElementById('audio-capitulo');
const proximo = document.getElementById('proxima');
const anterior=document.getElementById('anterior');
const capitulo=document.getElementById('capitulo')
const nuemeroscapitulos=10;
let tatocando =0; /*terceira função*/
let capituloatual =1;

/*inciei aqui*/
function tocarfaixa(){
    audio.play();
    botaoPlaypause.classList.remove('bi-play-circle-fill');
    botaoPlaypause.classList.add('bi-pause-circle');
}
 /*segunda função*/
function pausarfaixa(){
    audio.pause();
    botaoPlaypause.classList.remove('bi-pause-circle');
    botaoPlaypause.classList.add('bi-play-circle-fill');
}
/*terceira função*/
function tocaroupausar(){
  if( tatocando===0){
    tocarfaixa();
    tatocando=1;
  }else{
    pausarfaixa();
    tatocando=0;
  } 
}
/*sexta função*/
function trocarnomefaixa(){
 capitulo.innerText='Capitulo' + capituloatual;  
}

/*quarta função*/
function proximafaixa() {
    if(capituloatual===nuemeroscapitulos){ /*se chegar no 10 voltar*/
        capituloatual=1;
    } else {
     capituloatual=capituloatual+1
    }
    audio.src='books/dom-casmurro/' + capituloatual +'.mp3';
tocarfaixa();
tatocando=1;
trocarnomefaixa();
}
/*Quinta função*/
function voltarfaixa() {
    if(capituloatual===1){
        capituloatual=nuemeroscapitulos;
    } else {
     capituloatual=capituloatual-1
    }
    audio.src='books/dom-casmurro/' + capituloatual +'.mp3';
tocarfaixa();
tatocando=1;
trocarnomefaixa();
}

botaoPlaypause.addEventListener('click', tocarfaixa);
proximo.addEventListener('click', proximafaixa);
anterior.addEventListener('click',voltarfaixa)
    