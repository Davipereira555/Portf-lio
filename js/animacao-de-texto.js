let tituloAnimado = document.querySelector('#titulo-animado')

function digitacao(texto, contador) {
    if(contador < texto.length) {
        setTimeout(() => {
            tituloAnimado.textContent += texto.charAt(contador)
            contador++
            digitacao(texto, contador)
        }, 60);
    } 
}

digitacao("Olá, me chamo Davi e sou desenvolvedor web!", 0)