const pegaElemento = document.querySelector('.dark')
const pegaOutros = document.getElementsByClassName('item')
console.log(pegaOutros)

function trocaCor(){
  pegaElemento.classList.toggle('dark-mode');
  pegaElemento.classList.toggle('dark-mode+h1');
  }

function trocaCard() {
  for (let pega of pegaOutros){
    pega.classList.toggle('darkItem')
  }
     
}

const pegaContainer = document.querySelector('.container')
const padraoCard = {
  foto: '',
  titulo:'',
  texto:''
}

var poeCards = [ {
  foto:'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
  titulo: 'Gato',
  texto: 'O gato, também conhecido como gato caseiro, gato urbano ou gato doméstico, é um mamífero carnívoro da família dos felídeos, muito popular como animal de estimação. Ocupando o topo da cadeia alimentar, é predador natural de diversos animais, como roedores, pássaros, lagartixas e alguns insetos.'
},{
  foto:'https://static1.patasdacasa.com.br/articles/1/22/71/@/16746-meme-historia-de-pipi-nao-so-virou-vira-opengraph_1200-5.jpg',
  titulo:'Caramelo',
  texto:'“A inclusão do vira-lata caramelo na cédula é incentivo não só para a adoção, mas também para o controle da espécie. Pode representar uma nova fase para o bem-estar animal, visto que as notícias mais recentes são relacionadas aos sofrimentos deles” diz a descrição da petição'
}]

for (let poe of poeCards){
pegaContainer.innerHTML += `<div class="item">
      <img src="${poe.foto}">
      <h2>${poe.titulo}</h2>
      <p>${poe.texto}</p>
    </div>`}


let btn = document.querySelector('button')

btn.addEventListener('click',() =>{
  pegaContainer.innerHTML += 
  `<div class="item">
      <img src="${prompt("Qual foto?")}">
      <h2>${prompt("Qual Titulo?")}</h2>
      <p>${prompt("Qual descrição")}</p>
    </div>`
} 
)