window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const resultado = document.querySelector('#chute')

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak (e){
    chute = e.results[0][0].transcript
    exibeChute(chute)
    verificaValor(chute)
}

function exibeChute(chute){
    resultado.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', ()=> recognition.start())