//cod carros
let yCarros = [40, 96, 150, 210, 265, 316];
let veloCarros = [2, 2.45, 3.18, 2, 4, 2];
let xCarros = [500, 500, 500, 500 ,500 ,500];
let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
  for (let i = 0; i < imgCarros.length; i++){
    image(imgCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imgCarros.length; i++){
    xCarros[i] -= veloCarros[i];
  }
}

function resetCarro(){
  for (let i = 0; i < imgCarros.length; i++){
    if (passouATela(xCarros[i])){
    xCarros[i] = 600
  }
  }
}

function passouATela(xCarro){
  return xCarro < - 50;
  }

