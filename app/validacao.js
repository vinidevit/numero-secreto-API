function verificaValor(chute){
    const numero = +chute

    if(ChuteInvalido()){
        resultado.innerHTML += '<div>valor inválido</div>'
    }

    if(numeroMaiorOuMenor(numero)){
        resultado.innerHTML += `<div>Valor inválido, o número deve estar entre ${menorValor} e ${maiorValor}</div>`
    }

    function ChuteInvalido() {
        return Number.isNaN(numero)
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `

    }else if (numero > numeroSecreto){
        resultado.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    }else {
        resultado.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }

    function numeroMaiorOuMenor(numero){
        return numero > maiorValor || numero < menorValor
    }
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})