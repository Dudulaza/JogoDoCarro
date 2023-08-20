function setup() {
  createCanvas(500, 400);
  //somDaTrilha.loop();
}

function draw() {
  background(imgDaEstrada, 255);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  resetCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}