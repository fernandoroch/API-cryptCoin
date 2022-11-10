const valorAtual = document.querySelector('.valor-atual')
const selecionarMoeda = document.querySelector('.container form #moedas')
const button = document.getElementById('button')
const todasMoedas = document.querySelector('.todas-moedas')
let moedasSelection = []
let verificador = 0

const arrayMoedas =['USD', 'BRL','EUR',]
arrayMoedas.forEach((moedaArray,index) => {
  selecionarMoeda.innerHTML += `<option  value="${moedaArray}">${moedaArray}</option>`
})

requisicaoHttp()
function requisicaoHttp() {
  fetch('https://blockchain.info/ticker')
  .then(m => m.json())
  .then(moeda => {
    moedasSelection.push(moeda.BRL,moeda.USD,moeda.EUR)
    domValorBtc(moeda)
  });
}

function domValorBtc(moeda){
  if(selecionarMoeda.value === moeda.BRL.symbol){
    valorAtual.innerHTML = moeda.BRL.buy.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  }else if(selecionarMoeda.value === moeda.USD.symbol){
    valorAtual.innerHTML = moeda.USD.buy.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  }else {
    valorAtual.innerHTML = moeda.EUR.buy
  }
  todasAsMoedas(moedasSelection)
}

function todasAsMoedas(moeda){
  let estruturaTodasMoedas = ''
    if( verificador === 0){
      moeda.forEach((m) => {
        estruturaTodasMoedas += `<div class="simbolo">${m.symbol}</div>`
        estruturaTodasMoedas += `<div class="valor">${m.buy}</div>`
      })
      todasMoedas.innerHTML += estruturaTodasMoedas
    }
    console.log(estruturaTodasMoedas);
    verificador++
}
