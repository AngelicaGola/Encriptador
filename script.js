const textArea = document.querySelector('.text_area');
const mensajes = document.querySelector('.mensaje');

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoAEncriptar = encriptar(textArea.value)
    mensajes.value = textoAEncriptar
    textArea.value = ''
    mensajes.style.backgroundImage = 'none'
}

function encriptar(textoEncriptar) {
    let matrizTexto = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    textoEncriptar = textoEncriptar.toLowerCase()

    for (let i = 0; i < matrizTexto.length; i++) {
        if (textoEncriptar.includes(matrizTexto[i][0])) {
            textoEncriptar = textoEncriptar.replaceAll(matrizTexto[i][0], matrizTexto[i][1])
        }
    }
    return textoEncriptar
}

function btnDesencriptar() {
    const textoAEncriptar = desencriptar(textArea.value)
    mensajes.value = textoAEncriptar
    textArea.value = ''

}

function desencriptar(textoDesencriptar) {
    let matrizTexto = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    textoDesencriptar = textoDesencriptar.toLowerCase()

    for (let i = 0; i < matrizTexto.length; i++) {
        if (textoDesencriptar.includes(matrizTexto[i][1])) {
            textoDesencriptar = textoDesencriptar.replaceAll(matrizTexto[i][1], matrizTexto[i][0])
        }
    }
    return textoDesencriptar

}

