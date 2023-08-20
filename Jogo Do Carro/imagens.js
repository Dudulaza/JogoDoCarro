let imgDaEstrada;
let imgDoAtor;
let imgCarro;
let imgCarro2;
let imgCarro3;

let somDaTrilha;
let somDosPontos;
let somColidiu;


function preload(){
  imgDaEstrada = loadImage("imagens/estrada.png");
  imgDoAtor = loadImage("imagens/ator-1.png");
  imgCarro = loadImage("imagens/carro-1.png");
  imgCarro2 = loadImage("imagens/carro-2.png");
  imgCarro3 = loadImage("imagens/carro-3.png");
  imgCarros = [imgCarro, imgCarro2, imgCarro3, imgCarro, imgCarro2, imgCarro3];
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDosPontos = loadSound("sons/pontos.wav");
  somColidiu = loadSound("sons/colidiu.mp3");
}
