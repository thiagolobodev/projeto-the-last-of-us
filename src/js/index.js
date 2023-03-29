const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
let indiceImagemAtiva = 0;

botoesCarrossel.forEach((botao, indice) => {
   botao.addEventListener('click', () => {
      moverCarrosselPara(indice);
   })
});

function mostrarImagemDeFundo(indice) {
   imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
   botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
   const imagemAtiva = document.querySelector('.ativa');
   imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
   const botaoSelecionado = document.querySelector('.selecionado');
   botaoSelecionado.classList.remove('selecionado');
}

function moverCarrosselPara(novoIndice) {
   desativarBotaoSelecionado();
   selecionarBotaoCarrossel(botoesCarrossel[novoIndice]);
   esconderImagemAtiva();
   mostrarImagemDeFundo(novoIndice);
   indiceImagemAtiva = novoIndice;
}

document.addEventListener('keydown', (evento) => {
   if (evento.code === 'ArrowLeft') {
      let novoIndice = indiceImagemAtiva - 1;
      if (novoIndice < 0) {
         novoIndice = imagens.length - 1;
      }
      moverCarrosselPara(novoIndice);
   } else if (evento.code === 'ArrowRight') {
      let novoIndice = indiceImagemAtiva + 1;
      if (novoIndice >= imagens.length) {
         novoIndice = 0;
      }
      moverCarrosselPara(novoIndice);
   }
});
