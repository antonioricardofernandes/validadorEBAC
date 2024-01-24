function validarFormulario() {
    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;

    if (campoB > campoA) {
        exibirMensagem(true, 'Ok, B é maior do que A!');
    } else {
        exibirMensagem(false, 'Não, B deve ser maior que o A!');
    }
}

function exibirMensagem(valido, mensagem) {
    var mensagemDiv = document.getElementById('mensagem');

    if (valido) {
        mensagemDiv.className = 'mensagem-positiva';
        campoA.value=' ';
        campoB.value=' ';
    } else {
        mensagemDiv.className = 'mensagem-negativa';
    }

    mensagemDiv.innerHTML = mensagem;
}