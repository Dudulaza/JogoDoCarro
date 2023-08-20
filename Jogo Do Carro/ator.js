//ator
let yAtor = 370;
let xAtor = 90;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imgDoAtor, xAtor, yAtor, 28, 28);
}

function movimentaAtor(){
  if (keyIsDown(87)){
    yAtor -= 3;
  }
  if (keyIsDown(83)){
    if (podeSeMover()){
      yAtor += 3;
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imgCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      colidiu();
      somColidiu.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function colidiu(){
  yAtor = 365
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(255,105,180);
  text(meusPontos, width / 5, 25);
}

function marcaPonto(){
  if (yAtor < 20){
    meusPontos += 1;
    somDosPontos.play();
    colidiu();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 370;
}