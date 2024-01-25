function pegarTexto(button) {
    let copiarTexto = document.getElementById('areaTexto');
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999); //COMPATIBILIDADE COM CELULAR
    navigator.clipboard.writeText(copiarTexto.value);
    //CRIPTOGRAGAR OU DESCRIPTOGRAFAR
    criptoOuDescripto(button, copiarTexto.value);

}

function criptoOuDescripto(button, valueText) {
    if (button.id === 'criptografar') {
        let textoCriptografado = criptografar(valueText);

        if (!eVazio(textoCriptografado)) {
            exibirTextoNaTela('#section-second-text-paragraph', textoCriptografado);
            ocultarOuNaoElemento('section-second-div', 'none');
            ocultarOuNaoElemento('section-second-button-copy', 'inline');
        }

    } else {
        let textoDescriptografado = descriptografar(valueText);
        if (!eVazio(textoDescriptografado)) {
            exibirTextoNaTela('#section-second-text-paragraph', textoDescriptografado);
            ocultarOuNaoElemento('section-second-div', 'none');
            ocultarOuNaoElemento('section-second-button-copy', 'inline');
        }
    }
}

function copiarTexto() {
    var paragrafo = document.getElementById("section-second-text-paragraph");
    var textoParaCopiar = paragrafo.textContent; //Pegar o conteúdo do paragráfo
    navigator.clipboard.writeText(textoParaCopiar).then(function () {
        if (textoParaCopiar === '') {
            alert('Não há nada para copiar.');
            return;
        }
        alert('Texto copiado para área de transferência.');
        limparTela('#section-second-text-paragraph');
    });
}


function criptografar(text) {

    let textoDigitado = text;
    let textoCriptografado = ''; //TEXTO TRATADO E CRIPTOGRAFADO

    for (var i = 0; i < textoDigitado.length; i++) {
        //PEGAR LETRA POR LETRA DA PALAVRA DIGITADA
        var letters = textoDigitado.charAt(i);

        if (eVogal(letters)) {
            if (letters === 'a') {
                letters = 'ai';
            }
            if (letters === 'e') {
                letters = 'enter';
            }
            if (letters === 'i') {
                letters = 'imes';
            }
            if (letters === 'o') {
                letters = 'ober';
            }
            if (letters === 'u') {
                letters = 'ufat';
            }
        }
        textoCriptografado += letters;
    }
    return textoCriptografado;
}

function descriptografar(text) {
    return text
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function eVazio(text) {
    if (text === '') {
        alert('Opa! Parece que você não digitou ou não existe nada para copiar.');
        return true;
    }
    return false;
}

function eVogal(letters) {
    return ['a', 'e', 'i', 'o', 'u'].includes(letters);
}

function exibirTextoNaTela(tag, text) {
    limparTela('textarea');
    document.querySelector(tag).innerHTML = text;
}

function limparTela(selector) {
    document.querySelector(selector).value = '';
}

function ocultarOuNaoElemento(id, action) {
    document.getElementById(id).style.display = action;
}