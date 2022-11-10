const valorAtual = document.querySelector('.valor-atual')
const selecionarMoeda = document.querySelector('.container form #moedas')
const button = document.getElementById('button')

const arrayMoedas =['USD', 'BRL','EUR',]

arrayMoedas.forEach((moedaArray,index) => {
  selecionarMoeda.innerHTML += `<option  value="${moedaArray}">${moedaArray}</option>`
})

converterNumero()
function converterNumero() {
  let moedasSelection = [] 
  fetch('https://blockchain.info/ticker')
  .then(m => m.json())
  .then(moeda => {
    moedasSelection.push(moeda.BRL,moeda.USD,moeda.EUR)

    if(selecionarMoeda.value === moeda.BRL.symbol){
      valorAtual.innerHTML = moeda.BRL.buy.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }else if(selecionarMoeda.value === moeda.USD.symbol){
      valorAtual.innerHTML = moeda.USD.buy.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
    }else {
      valorAtual.innerHTML = moeda.EUR.buy
    }
  });
}